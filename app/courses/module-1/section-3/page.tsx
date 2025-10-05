export default function Section3Page() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* YouTube Video Embed */}
      <div className="mb-8">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/KkUGeliHqm0"
            title="Module 1.3 What Happens When You Lose Fat"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6">Section 1.3 – What Really Happens When You Lose Fat?</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧠 What Really Happens When You Lose Fat?</h2>
        <p className="mb-4">
          Losing weight can feel empowering. You might notice changes in how you look, how your clothes fit, and how confident you feel. But beneath the surface, your body is going through a much deeper transformation—and it&apos;s not just about burning fat.
        </p>
        <p className="mb-4">
          When you&apos;re in a caloric deficit (eating fewer calories than your body needs), your body has to make up the difference by tapping into stored energy. That&apos;s where fat loss comes in. But this process also comes with some important side effects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Metabolic Adaptations: Your Body&apos;s Survival Mode</h2>
        <p className="mb-4">
          Your body is incredibly smart. It&apos;s evolved to survive tough times—like famine or food scarcity. So when you consistently eat less than your body needs, it doesn&apos;t just burn fat and move on. It adapts.
        </p>
        <p className="mb-4">
          Here&apos;s what happens:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Your body sees the calorie drop as a threat (like starvation).</li>
          <li>It responds by slowing down your metabolism to conserve energy.</li>
          <li>You might feel more tired, less motivated to move, and even notice your weight loss stalling.</li>
        </ul>
        <p className="mb-4">
          This is called metabolic adaptation—and it&apos;s your body&apos;s way of protecting itself. What started as a calorie deficit can eventually become your new &quot;maintenance,&quot; meaning you stop losing weight even though you haven&apos;t changed your intake.
        </p>
        <p className="mb-4">
          This is why many people hit a weight loss plateau. It&apos;s not failure—it&apos;s biology. And yes, there are smart ways to work around it (we&apos;ll dive into that in Module 2).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">💪 Loss of Lean Body Mass: The Hidden Cost</h2>
        <p className="mb-4">
          Here&apos;s another piece that often gets overlooked: when you lose weight, it&apos;s not just fat that disappears. You can also lose lean body mass—which includes muscle, bone, and even organ tissue.
        </p>
        <p className="mb-4">
          That matters because:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Lean mass helps keep your metabolism strong.</li>
          <li>Muscle tissue burns more calories at rest than fat.</li>
          <li>Losing too much lean mass can make you feel weaker, slower, and less energized.</li>
        </ul>
        <p className="mb-4">
          If your diet is too strict or lacks the right nutrients, your body may start breaking down muscle for energy. That&apos;s why preserving lean mass is crucial during any fat loss phase. It&apos;s not just about the scale—it&apos;s about protecting your strength and long-term health.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧾 Quick Recap: What You Need to Know</h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Fat loss happens in a caloric deficit, but your body sees that as a stressor.</li>
          <li>It adapts by slowing metabolism, which can lead to plateaus.</li>
          <li>You may feel tired, sluggish, or less active as your body conserves energy.</li>
          <li>Weight loss can also include loss of lean body mass—not just fat.</li>
          <li>Lean mass is vital for metabolism, strength, and overall health.</li>
          <li>Smart, balanced nutrition and strategic planning help minimize these side effects.</li>
        </ul>
      </section>
    </main>
  );
}
