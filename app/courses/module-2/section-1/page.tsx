export default function Section1Page() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* YouTube Video Embed */}
      <div className="mb-8">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/HpGyR1_lqgE"
            title="Module 2.1 Creating the Deficit"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6">📉 2.1 Creating the Deficit</h1>
      
      <section className="mb-8">
        <p className="mb-4">
          Once you{"'"} ve estimated your TDEE, the next step is to create a caloric deficit—meaning you eat fewer calories than your body burns. That{"'"} s how fat loss happens.
        </p>
        <p className="mb-4">
          When you{"'"} re in a deficit, your body taps into stored fat for energy. Over time, this leads to weight loss.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔧 How Much Should You Cut?</h2>
        <p className="mb-4">
          A safe and effective deficit is usually 400–500 calories below your TDEE. This typically results in a weight loss of 1–2 pounds per week, which is sustainable and healthy.
        </p>
        <p className="mb-4">
          If you{"'"} re starting with more body fat, you may lose weight faster at first—up to 4–5 pounds per week—without harming your health. As your body composition improves, that rate will naturally slow down.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📊 Monitor &amp; Adjust</h2>
        <p className="mb-4">
          Your initial estimate is just that—an estimate. Track your weight weekly and adjust your intake if needed. If you{"'"} re losing too fast or too slow, tweak your calories slightly.
        </p>
        <p className="mb-4">
          And remember: rapid weight loss often leads to rapid regain. The goal is steady, sustainable progress—not extremes.
        </p>
      </section>
    </main>
  );
}
