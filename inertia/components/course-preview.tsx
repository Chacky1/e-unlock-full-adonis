import CourseDto from "#dtos/course";

type CourseProps = {
  course: CourseDto
}

const CoursePreview = ({ course }: CourseProps) => {
  return (<div className="bg-white shadow-lg rounded-lg overflow-hidden">
    {course.imageUrl && <img src={course.imageUrl} alt={course.name} className="w-full h-48 object-cover" />}
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2">{course.name}</h3>
      <p className="text-gray-600 text-sm">{course.description}</p>
    </div>
  </div>);
}

export default CoursePreview
