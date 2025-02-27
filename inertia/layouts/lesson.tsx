import CourseDto from "#dtos/course"
import Footer from "~/components/footer"
import Header from "~/components/header"
import LessonSidebar from "~/components/lesson-sidebar"
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar"

type LessonLayoutProps = {
  course: CourseDto
  children: React.ReactNode
}

const LessonLayout = ({ course, children }: LessonLayoutProps) => {
  return (
    <>
      <SidebarProvider>
        <LessonSidebar course={course} />
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </SidebarProvider>
    </>
  )
}

export default LessonLayout
