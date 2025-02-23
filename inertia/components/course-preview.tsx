import CourseDto from "#dtos/course";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

type CourseProps = {
  course: CourseDto
}

const CoursePreview = ({ course }: CourseProps) => {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-0">
        {course.imageUrl && <img src={course.imageUrl} alt={course.name} className="w-full h-48 object-cover rounded-lg" />}
      </CardContent>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default CoursePreview
