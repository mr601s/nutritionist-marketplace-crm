import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  const courses = getCourses();
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-2">Courses</h1>
      <p className="text-slate-600 mb-8">Self-paced lessons your clients can start today.</p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(c => <CourseCard key={c.slug} course={c} />)}
      </div>
    </main>
  );
}