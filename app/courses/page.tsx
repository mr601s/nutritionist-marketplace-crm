import Link from "next/link";

export const metadata = {
  title: "Courses",
  description: "Course catalog",
};

export default function CoursesIndex() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Courses</h1>
      <p className="text-slate-600 mt-2">More coming soon.</p>
      <div className="mt-8">
        <Link href="/" className="inline-block px-3 py-2 rounded-lg border">Back home</Link>
      </div>
    </main>
  );
}