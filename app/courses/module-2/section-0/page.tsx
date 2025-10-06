export default function Section0Page() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* YouTube Video Embed */}
      <div className="mb-8">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/AKq3QgZCbBk"
            title="Module 2.0 Calculating Your TDEE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">🔢 2.0 Calculating Your TDEE</h1>
      
      <section className="mb-8">
        <p className="mb-4">
          Before you can build a smart fat loss plan, you need to know how many calories your body burns in a day. That number is called your Total Daily Energy Expenditure (TDEE)—and it's your starting point.
        </p>
        <p className="mb-4">Your TDEE includes:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Your Basal Metabolic Rate (BMR)—the calories you burn at rest</li>
          <li>Plus everything else: movement, workouts, digestion, and lifestyle habits</li>
        </ul>
        <p className="mb-4">
          Knowing your TDEE helps you figure out how many calories you need to maintain your current weight. From there, you can adjust your intake to create a deficit and lose fat.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧮 A Simple Way to Estimate TDEE</h2>
        <p className="mb-4">
          You can use online calculators for a more detailed estimate, but here's a quick formula:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Multiply your body weight (in pounds) by:</li>
          <li>12 if you're mostly sedentary</li>
          <li>13 if you exercise 2–3 times per week</li>
          <li>14–15 if you exercise 3–6 times per week</li>
        </ul>
        <p className="mb-4 font-semibold">Example:</p>
        <p className="mb-4 ml-4">
          If you weigh 200 lbs and work out 2–3 times a week:<br/>
          200 × 13 = 2600 calories/day for maintenance
        </p>
        <p className="mb-4">
          This is just a starting point. Your actual needs may vary based on metabolism, body composition, and lifestyle. That's why it's important to track progress and adjust as needed.
        </p>
        <p className="mb-4 font-semibold">
          BONUS: I have provided an additional handout (PDF) that contains a link to one of my favorite TDEE calculators- even easier than doing the math yourself!
        </p>
      </section>
    </main>
  );
}
