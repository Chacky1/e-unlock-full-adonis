import CourseDto from "#dtos/course"
import LessonDto from "#dtos/lesson"
import UserDto from "#dtos/user"
import { Head, router, useForm, usePage } from "@inertiajs/react"
import { SquareCheckBig, Square } from "lucide-react"
import LessonContent from "~/components/lesson-content"
import { Button } from "~/components/ui/button"
import VideoPlayer from "~/components/video-player"
import { useToast } from "~/hooks/use-toast"
import LessonLayout from "~/layouts/lesson"

type LessonProps = {
  course: CourseDto,
  lesson: LessonDto
}

const Lesson = ({ course, lesson }: LessonProps) => {
  const form = useForm()
  const user = usePage().props.user as UserDto | null
  const { toast } = useToast()

  const completeLesson = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour compléter la leçon.",
        variant: "destructive",
      });

      return router.visit("/auth/login");
    }

    form.post(`/users/${user.id}/lessons/${lesson.id}/complete`)
  }

  const uncompleteLesson = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    form.delete(`/users/${user!.id}/lessons/${lesson.id}/uncomplete`)
  }

  const findPreviousLesson = () => {
    const lessonModule = course.modules.find((module) => module.id === lesson.moduleId)

    if (!lessonModule) return

    const previousLessonInModule = lessonModule.lessons.find((l) => l.order === lesson.order - 1)

    if (previousLessonInModule) return previousLessonInModule

    const previousModule = course.modules.find((module) => module.order === lessonModule.order - 1)

    if (!previousModule) return

    return previousModule.lessons[previousModule.lessons.length - 1]
  }

  const redirectToPreviousVideo = () => {
    const previousLesson = findPreviousLesson()

    if (!previousLesson) return

    return router.visit(`/courses/${course.slug}/lessons/${previousLesson.id}`)
  }

  const findNextLesson = () => {
    const lessonModule = course.modules.find((module) => module.id === lesson.moduleId)

    if (!lessonModule) return

    const nextLessonInModule = lessonModule.lessons.find((l) => l.order === lesson.order + 1)

    if (nextLessonInModule) return nextLessonInModule

    const nextModule = course.modules.find((module) => module.order === lessonModule.order + 1)

    if (!nextModule) return

    return nextModule.lessons[0]
  }

  const redirectToNextVideo = () => {
    const nextLesson = findNextLesson()

    if (!nextLesson) return

    return router.visit(`/courses/${course.slug}/lessons/${nextLesson.id}`)
  }

  return (
    <LessonLayout course={course}>
      <Head title={course.name} />
      <div className="flex flex-col gap-4 lg:gap-8 py-16 px-8 lg:px-32">
        <VideoPlayer videoUrl={lesson.videoUrl} lesson={lesson} user={user} />

        <div className="flex justify-between lg:hidden">
          <Button className="mt-4" disabled={!findPreviousLesson()} onClick={redirectToPreviousVideo}>Vidéo précédente</Button>
          <Button className="mt-4" disabled={!findNextLesson()} onClick={redirectToNextVideo}>Vidéo suivante</Button>
        </div>

        {user && user.lessons?.some((l) => l.id === lesson.id) && (
          <form className="flex justify-end" onSubmit={uncompleteLesson}>
            <Button className="w-fit" type="submit" variant="secondary" disabled={form.processing}>
              <SquareCheckBig />
              Leçon complétée
            </Button>
          </form>
        )}

        {!(user && user.lessons?.some((l) => l.id === lesson.id)) && (
          <form className="flex justify-end" onSubmit={completeLesson}>
            <Button className="w-fit" type="submit" variant="secondary" disabled={form.processing}>
              <Square />
              Marquer comme complété
            </Button>
          </form>
        )}

        <LessonContent lesson={lesson} />
      </div>
    </LessonLayout>
  )
}

export default Lesson
