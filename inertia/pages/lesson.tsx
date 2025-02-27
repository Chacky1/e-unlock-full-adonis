import CourseDto from "#dtos/course"
import LessonDto from "#dtos/lesson"
import { router } from "@inertiajs/react"
import LessonContent from "~/components/lesson-content"
import LessonSidebar from "~/components/lesson-sidebar"
import { Button } from "~/components/ui/button"
import VideoPlayer from "~/components/video-player"
import LessonLayout from "~/layouts/lesson"

type LessonProps = {
  course: CourseDto,
  lesson: LessonDto
}

const Lesson = ({ course, lesson }: LessonProps) => {
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
      <div className="flex flex-col gap-8 lg:gap-16 py-16 px-8 lg:px-32">
        <VideoPlayer videoUrl={lesson.videoUrl} />

        <div className="flex justify-between lg:hidden">
          <Button className="mt-4" disabled={!findPreviousLesson()} onClick={redirectToPreviousVideo}>Vidéo précédente</Button>
          <Button className="mt-4" disabled={!findNextLesson()} onClick={redirectToNextVideo}>Vidéo suivante</Button>
        </div>

        <LessonContent lesson={lesson} />
      </div>
    </LessonLayout>
  )
}

export default Lesson
