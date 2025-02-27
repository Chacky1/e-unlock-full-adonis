import LessonDto from "#dtos/lesson"

type LessonContentProps = {
  lesson: LessonDto
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">{lesson.name}</h1>
      <p>
        {lesson.content}
      </p>
    </div>
  )
}

export default LessonContent
