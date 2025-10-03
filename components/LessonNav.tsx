"use client";
import Link from "next/link";
import { Course } from "@/lib/courses";

export default function LessonNav({ course, idx }: { course: Course; idx: number }) {
  const prev = course.lessons[idx-1];
  const next = course.lessons[idx+1];
  return (
    <div className="mt-8 flex items-center justify-between">
      {prev ? <Link href={`/courses/${course.slug}/${prev.slug}`} className="px-4 py-2 rounded-lg border hover:bg-slate-50">← {prev.title}</Link> : <span/>}
      {next ? <Link href={`/courses/${course.slug}/${next.slug}`} className="px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">{next.title} →</Link> : <span/>}
    </div>
  );
}
