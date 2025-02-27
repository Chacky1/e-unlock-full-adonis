import CourseDto from "#dtos/course";
import { router } from "@inertiajs/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";

type CourseProps = {
  course: CourseDto
}

const CoursePreview = ({ course }: CourseProps) => {
  const redirectToCourse = () => {
    return router.visit(`/courses/${course.slug}/lessons/${course.modules[0].lessons[0].id}`)
  }

  return (
    <Card className="w-[350px]">
      <CardContent className="p-0">
        {course.imageUrl && <img src={course.imageUrl} alt={course.name} className="w-full h-48 object-cover rounded-lg" />}
      </CardContent>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={() => redirectToCourse()}>Voir la formation</Button>
      </CardFooter>
    </Card>
  );
}

export default CoursePreview
