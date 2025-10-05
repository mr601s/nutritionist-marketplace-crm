import data from "@/data/courses.json";

export type Lesson = { slug:string; title:string; videoUrl?:string; content?:string; durationMin?:number; order?:number; isPublished?:boolean; };
export type Course = { slug:string; title:string; summary:string; level:string; coverUrl?:string; isPublished?:boolean; lessons:Lesson[]; };

const courses = (data as Course[]).filter(c => c.isPublished !== false);

export function getCourses(): Course[] {
  return courses.slice().sort((a,b)=>a.title.localeCompare(b.title));
}
export function getCourse(slug:string): Course | undefined {
  return courses.find(c=>c.slug===slug);
}
export function getLesson(courseSlug:string, lessonSlug:string) {
  const course = getCourse(courseSlug); if(!course) return;
  const lessons = (course.lessons||[]).filter(l=>l.isPublished!==false).sort((a,b)=>(a.order??0)-(b.order??0));
  const idx = lessons.findIndex(l=>l.slug===lessonSlug); if(idx===-1) return;
  return { course:{...course,lessons}, lesson:lessons[idx], idx };
}
export function isEnrolled(courseSlug:string){ if(typeof window==='undefined') return true; return localStorage.getItem(`enroll:${courseSlug}`)==='true'; }
export function enroll(courseSlug:string){ if(typeof window==='undefined') return; localStorage.setItem(`enroll:${courseSlug}`,'true'); }