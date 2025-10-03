import { getLesson } from "@/lib/courses";
import LessonNav from "@/components/LessonNav";

export default function LessonPage({ params }: { params: { slug: string; lesson: string } }) {
  const res = getLesson(params.slug, params.lesson);
  if (!res) return <main className="max-w-3xl mx-auto px-6 py-10"><p>Lesson not found.</p></main>;
  const { course, lesson, idx } = res;

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-xl font-semibold">{course.title}</h1>
      <h2 className="text-lg mt-1 text-slate-600">{lesson.title}</h2>

      {lesson.videoUrl && (
        <div className="mt-6 aspect-video">
          <iframe className="w-full h-full rounded-xl" src={lesson.videoUrl} title={lesson.title} allowFullScreen />
        </div>
      )}

      {lesson.content && (
        <article className="prose prose-slate mt-6" dangerouslySetInnerHTML={{ __html: md(lesson.content) }} />
      )}

      <LessonNav course={course} idx={idx} />
    </main>
  );
}

function md(src?: string){
  if(!src) return "";
  let html = src
    .replace(/^### (.*)$/gm,"<h3>$1</h3>")
    .replace(/^## (.*)$/gm,"<h2>$1</h2>")
    .replace(/^# (.*)$/gm,"<h1>$1</h1>")
    .replace(/^\- (.*)$/gm,"<li>$1</li>")
    .replace(/\n\n/g,"</p><p>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g,"<ul>$1</ul>");
  return `<p>${html}</p>`;
}
