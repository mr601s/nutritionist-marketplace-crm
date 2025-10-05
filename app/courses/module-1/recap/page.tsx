import Link from 'next/link';

export default function RecapPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">🧠 Module 1 Recap: Understanding Your Body &amp; Fat Loss</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        Let&apos;s tie everything together. Fat loss isn&apos;t just about eating less and moving more—it&apos;s about understanding how your body works and how to support it through the process. Here are the key takeaways:
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔥 Your Metabolism &amp; Energy Needs</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Your <strong>Basal Metabolic Rate (BMR)</strong> is the number of calories your body burns at rest to keep you alive.</li>
          <li>When you add in movement, exercise, and digestion, you get your <strong>Total Daily Energy Expenditure (TDEE)</strong>—the full picture of how many calories you burn in a day.</li>
          <li>If you consistently eat more than your TDEE, you&apos;ll gain weight (caloric surplus).</li>
          <li>If you consistently eat less, you&apos;ll lose weight (caloric deficit).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">⚙️ What Happens During Fat Loss</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>In a calorie deficit, your body slows down to conserve energy.</li>
          <li>You may lose lean body mass (like muscle) along with fat if you&apos;re not careful.</li>
          <li>This is why smart nutrition and movement matter—not just cutting calories.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🏋️‍♀️ Exercise: Optional but Powerful</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>You don&apos;t have to exercise to lose weight—but it helps.</li>
          <li>Strength training preserves muscle, boosts metabolism, and shapes your body.</li>
          <li>Cardio burns calories and improves endurance.</li>
          <li>A mix of both is ideal, but strength training should be your foundation.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">😴 Lifestyle Matters More Than You Think</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Sleep is essential—poor sleep disrupts hormones and slows fat loss.</li>
          <li>Stress raises cortisol, which can lead to fat storage and emotional eating.</li>
          <li>Mindless snacking adds hidden calories that sabotage your deficit.</li>
          <li>Managing these factors helps you stay consistent and avoid plateaus.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧠 Final Thoughts</h2>
        <p className="text-gray-700 mb-4">
          Your body is smart. When you&apos;re in a deficit, it may push back—slowing metabolism, increasing cravings, and justifying little snacks. That&apos;s why conscious restraint, stress management, and sleep hygiene are just as important as your meal plan.
        </p>
      </section>

      <div className="mt-12 p-6 bg-brand-light rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Ready to Continue?</h3>
        <p className="text-gray-700 mb-4">
          You&apos;ve completed Module 1! More modules coming soon.
        </p>
        <Link
          href="/courses/module-1"
          className="inline-block px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors"
        >
          Back to Module 1
        </Link>
      </div>
    </main>
  );
}
