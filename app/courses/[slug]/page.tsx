import { getCourse } from "@/lib/courses";
import Link from "next/link";

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) {
    return <main className="max-w-3xl mx-auto px-6 py-10">Course not found.</main>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="text-slate-600 mt-2">{course.summary}</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Lessons</h2>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          {(course.lessons ?? []).map((l) => (
            <li key={l.slug}>
              <Link href={`/courses/${course.slug}/${l.slug}`}>{l.title}</Link>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-10">
        <Link href="/courses" className="inline-block px-3 py-2 rounded-lg border">Back to Catalog</Link>
      </div>
    </main>
  );
}