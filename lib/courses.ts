export type Lesson = {
  slug: string;
  title: string;
};
export type Course = {
  slug: string;
  title: string;
  summary: string;
};

export const courses: Course[] = [
  {
    slug: "weight-loss-101",
    title: "Weight Loss 101",
    summary: "Module 1: Foundations of Fat Loss Fundamentals"
  }
];

export function getCourses(): Course[] {
  return courses.slice();
}
export function getCourse(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}