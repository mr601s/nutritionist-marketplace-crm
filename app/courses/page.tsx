import Link from "next/link";

export const metadata = {
  title: "Courses",
  description: "Course catalog"
};

export default function Courses() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Courses</h1>
      <ul className="space-y-3">
        <li>
          <Link href="/courses/weight-loss-101" className="text-emerald-800 underline">
            Weight Loss 101
          </Link>
          <p className="text-slate-600">Module 1: Foundations — Fat Loss Fundamentals</p>
        </li>
      </ul>
    </main>
  );
}
