import CourseDto from "#dtos/course"
import CoursePreview from "./course-preview"

type CoursesPreviewProps = {
  courses: CourseDto[]
}

const CoursesPreview = (props: CoursesPreviewProps) => {
  return (
    <section id="courses-preview">
      <h2>
        Les formations.
      </h2>
      <span className="text-primary">Apprendre pas à pas</span>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {props.courses.map((course) => (
          <CoursePreview key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default CoursesPreview
