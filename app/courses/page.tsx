import Link from "next/link";
import { getCourses } from "@/lib/courses";

export const metadata = {
  title: "Courses",
  description: "Learn with Julie Wallace | Planted In Nutrition",
};

export default function CoursesPage() {
  const items = getCourses();
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Courses</h1>
      <ul className="space-y-4">
        {items.map(c => (
          <li key={c.slug} className="p-4 rounded-xl bg-white/70 shadow">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="text-slate-600">{c.summary}</p>
            <div className="mt-3">
              <Link className="inline-block px-4 py-2 rounded-lg bg-emerald-700 text-white"
                    href={`/courses/${c.slug}`}>View</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}