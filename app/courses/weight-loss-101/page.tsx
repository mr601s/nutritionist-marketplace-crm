export const metadata = {
  title: "Weight Loss 101 — Module 1",
  description: "Foundations: Fat Loss Fundamentals",
};

export default function ModulePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Weight Loss 101 — Module 1</h1>
      <p className="text-slate-600 mt-2">Foundations: Fat Loss Fundamentals</p>
        <div className="mt-6 rounded-xl overflow-hidden bg-black">
    <video src={"/videos/weight-loss-101/module-1-hero.mp4"} controls style={{ width: "100%", height: "auto" }} />
  </div>
      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">What you’ll learn</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Basal Metabolic Rate & Energy Expenditure</li>
            <li>Why do we gain fat?</li>
            <li>How do we lose fat?</li>
            <li>Fat loss & exercise</li>
            <li>What hinders fat loss</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How to use this module</h2>
          <p className="text-slate-700 mt-2">
            Start with the hero video (above) if present, then review each lesson in order.
            Apply worksheet prompts and bring questions to your coach.
          </p>
        </div>
      </section>
    </main>
  );
}
