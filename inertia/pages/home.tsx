import '~/css/app.css'

import AppLayout from '~/layouts/app'
import Hero from '~/components/hero'
import CoursesPreview from '~/components/courses-preview'
import CourseDto from '#dtos/course'

export default function Home({ courses }: { courses: CourseDto[] }) {
  return (
    <>
      <AppLayout>
        <div className="py-16 px-4 md:px-32">
          <Hero />
          <CoursesPreview courses={courses} />
        </div>
      </AppLayout>
    </>
  )
}
