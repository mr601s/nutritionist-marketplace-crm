import Link from "next/link";

export const metadata = {
  title: "Weight Loss 101 — Module 1",
  description: "Foundations: Fat Loss Fundamentals"
};

export default function Module1() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Weight Loss 101 — Module 1</h1>
        <p className="text-slate-600">Foundations: Fat Loss Fundamentals</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What you’ll learn</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Basal Metabolic Rate & Energy Expenditure (real-world meaning)</li>
          <li>Why we gain fat</li>
          <li>How we lose fat</li>
          <li>Fat loss & exercise (practical guidance)</li>
          <li>Common blockers & how to avoid them</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Module 1 outline</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Basal Metabolic Rate & Energy Expenditure</li>
          <li>Why Do We Gain Fat</li>
          <li>How Do We Lose Fat</li>
          <li>Fat Loss & Exercise</li>
          <li>What Hinders Fat Loss</li>
        </ol>
      </section>

      <p className="pt-4">
        <Link href="/courses" className="inline-block px-4 py-2 rounded-lg border">
          ← Back to catalog
        </Link>
      </p>
    </main>
  );
}
