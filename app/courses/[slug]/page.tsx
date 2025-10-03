"use client";
import { getCourse, enroll, isEnrolled } from "@/lib/courses";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  const [enrolled, setEnrolled] = useState(false);
  useEffect(()=>{ setEnrolled(isEnrolled(params.slug)); },[params.slug]);

  if (!course) return <main className="max-w-4xl mx-auto px-6 py-10"><p>Course not found.</p></main>;

  const lessons = (course.lessons||[]).sort((a,b)=>(a.order??0)-(b.order??0));

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="text-slate-600 mt-2">{course.summary}</p>

      <div className="mt-6 flex gap-3">
        {!enrolled ? (
          <button onClick={()=>{ enroll(course.slug); setEnrolled(true); }}
                  className="px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">
            Enroll (free for MVP)
          </button>
        ) : <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-sm">Enrolled</span>}
        <Link href="/courses" className="px-4 py-2 rounded-lg border hover:bg-slate-50">Back to catalog</Link>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">Lessons</h2>
      <ul className="space-y-2">
        {lessons.map(l=>(
          <li key={l.slug} className="flex items-center justify-between rounded-xl border p-4">
            <div>
              <div className="font-medium">{l.title}</div>
              {l.durationMin ? <div className="text-xs text-slate-500">{l.durationMin} min</div> : null}
            </div>
            <div>
              {enrolled ? <Link href={`/courses/${course.slug}/${l.slug}`} className="px-3 py-1 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Start</Link>
                         : <button disabled className="px-3 py-1 rounded-lg border text-slate-400">Enroll to start</button>}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}