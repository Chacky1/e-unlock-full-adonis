import CourseDto from "#dtos/course"
import { GraduationCap } from "lucide-react"
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, Sidebar, SidebarHeader } from "./ui/sidebar"
import { Link } from "@inertiajs/react"

type LessonSidebarProps = {
  course: CourseDto
}

const LessonSidebar = ({ course }: LessonSidebarProps) => {
  return (
    <Sidebar className="hidden h-screen lg:flex">
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-semibold">{course.name}</h2>
        <p className="flex gap-2 items-center text-sm text-gray-500">
          <GraduationCap />
          <span>{course.lessons.length} leçons</span>
        </p>
      </SidebarHeader>
      <SidebarContent>
        {course.modules.map((module) => (
          <SidebarGroup key={module.id}>
            <SidebarGroupLabel>{module.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {module.lessons.map((lesson) => (
                  <SidebarMenuItem key={lesson.id}>
                    <SidebarMenuButton asChild>
                      <Link href={`/courses/${course.slug}/lessons/${lesson.id}`} className="flex items-center space-x-2">
                        <span>{module.order + 1}.{lesson.order + 1}</span>
                        <span>{lesson.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

export default LessonSidebar
