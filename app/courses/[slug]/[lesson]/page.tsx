import { getCourse } from "@/lib/courses";
import Link from "next/link";

export default function LessonPage({ params }: { params: { slug: string; lesson: string } }) {
  const course = getCourse(params.slug);
  const lesson = course?.lessons?.find((l) => l.slug === params.lesson);

  if (!course || !lesson) {
    return <main className="max-w-3xl mx-auto px-6 py-10">Lesson not found.</main>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <h2 className="text-xl mt-2">{lesson.title}</h2>

      <p className="mt-6 text-slate-700">Video coming soon.</p>

      <div className="mt-10">
        <Link href={`/courses/${course.slug}`} className="inline-block px-3 py-2 rounded-lg border">
          Back to {course.title}
        </Link>
      </div>
    </main>
  );
}