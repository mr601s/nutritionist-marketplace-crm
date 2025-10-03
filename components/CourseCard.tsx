"use client";
import Link from "next/link";
import { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="rounded-2xl shadow-sm border bg-white p-5 flex flex-col">
      {course.coverUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={course.coverUrl} alt={course.title} className="rounded-xl mb-4 w-full h-40 object-cover" />
      )}
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-sm text-slate-600 mt-1">{course.summary}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-slate-500">{course.level}</span>
        <Link href={`/courses/${course.slug}`} className="inline-flex items-center rounded-lg px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-800">
          View
        </Link>
      </div>
    </div>
  );
}