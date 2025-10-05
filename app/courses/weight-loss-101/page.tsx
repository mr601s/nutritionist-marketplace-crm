export const metadata = {
  title: 'Weight Loss 101 – Module 1',
  description: 'Foundations: Fat Loss Fundamentals'
}

export default function Course101() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Weight Loss 101 – Module 1</h1>
      <p className="text-slate-600 mt-2">Foundations: Fat Loss Fundamentals</p>

      {/* Hero video */}
      <div className="mt-6 rounded-xl overflow-hidden bg-black">
        <video
          src="/videos/weight-loss-101/module-1-hero.mp4"
          controls
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Outline */}
      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">What you’ll learn</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>What Basal Metabolic Rate & Energy Expenditure really mean</li>
            <li>Why we gain fat (energy balance in the real world)</li>
            <li>How to reduce fat without starving or overtraining</li>
            <li>Habit-first approach to sustainable results</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Module 1 Contents</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>1.0 Basal Metabolic Rate & Energy Expenditure</li>
            <li>1.1 Why Do We Gain Fat</li>
            <li>1.2 How Do We Lose Fat</li>
            <li>1.4 Fat Loss & Exercise</li>
            <li>1.5 What Hinders Fat Loss</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">How to use this module</h2>
          <p className="mt-2 text-slate-700">
            Start with the video above, then move through each lesson in order.
            Apply the worksheet prompts and note any questions for your coach.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <a href="/courses" className="inline-block px-4 py-2 rounded-lg border">Back to Catalog</a>
      </div>
    </main>
  )
}