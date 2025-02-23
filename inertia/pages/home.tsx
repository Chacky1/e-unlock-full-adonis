import '~/css/app.css'

import AppLayout from '~/layouts/app'
import Hero from '~/components/hero'
import CoursesPreview from '~/components/courses-preview'
import CourseDto from '#dtos/course'

export default function Home({ courses }: { courses: CourseDto[] }) {
  return (
    <>
      <AppLayout>
        <div className="flex flex-col gap-16 py-16 px-8 lg:px-32">
          <Hero />
          <CoursesPreview courses={courses} />
        </div>
      </AppLayout>
    </>
  )
}
