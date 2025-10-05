export default function Section2Page() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* YouTube Video Embed */}
      <div className="mb-8">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/U7LjnsqCuEQ"
            title="How Do We Lose Fat"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6">Section 1.2 &ndash; How Do We Lose Fat?</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔍 How Do We Lose Fat?</h2>
        <p className="mb-4">
          Let&apos;s bring it back to your metabolism. Your Basal Metabolic Rate (BMR) is a key part of the fat loss equation&mdash;it&apos;s the number of calories your body burns just to keep you alive and functioning at rest. It&apos;s influenced by things like your age, gender, muscle mass, and overall body composition.
        </p>
        <p className="mb-4">
          But here&apos;s the thing: BMR isn&apos;t the whole story.
        </p>
        <p className="mb-4">
          To get a clearer picture of how many calories you burn in a day, we also need to factor in your lifestyle&mdash;how much you move, what you eat, and how active you are overall. When you combine all those pieces, you get your Total Daily Energy Expenditure (TDEE). That&apos;s the number that really matters when it comes to fat loss.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔥 The Real Key: Caloric Deficit</h2>
        <p className="mb-4">
          If you want to lose fat, the most important thing is this:
        </p>
        <p className="mb-4 font-semibold">
          You need to burn more energy than you consume.
        </p>
        <p className="mb-4">
          That&apos;s called a caloric deficit&mdash;and it&apos;s the foundation of every successful fat loss strategy.
        </p>
        <p className="mb-4">
          You can create that deficit in two main ways:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Eat fewer calories than your body needs</li>
          <li>Burn more calories through movement and exercise</li>
        </ul>
        <p className="mb-4">
          Ideally, you do a bit of both. A balanced diet with nutrient-dense foods and smart portion control helps you manage intake. And regular physical activity&mdash;whether it&apos;s structured workouts or just moving more throughout the day&mdash;helps you increase your output.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧠 What About Hormones and Genetics?</h2>
        <p className="mb-4">
          You might&apos;ve heard that things like insulin, hormones, or genetics are the &quot;real&quot; reasons people gain weight. And yes, they can influence how your body responds to food and stores fat. But here&apos;s what the science consistently shows:
        </p>
        <p className="mb-4 font-semibold">
          👉 Energy balance&mdash;calories in vs. calories out&mdash;is still the most critical factor.
        </p>
        <p className="mb-4">
          Hormones and genetics may affect how your body handles calories, but they don&apos;t override the basic math. If you consistently eat more than your body uses, fat gain happens. If you consistently eat less, fat loss follows.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧾 Quick Recap: What You Need to Know</h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>BMR is your baseline calorie burn, but TDEE gives the full picture</li>
          <li>Fat loss happens when you&apos;re in a caloric deficit</li>
          <li>You can create a deficit by eating less, moving more, or both</li>
          <li>A balanced diet and regular activity support metabolism and fat loss</li>
          <li>Hormones and genetics matter&mdash;but energy balance is still king</li>
        </ul>
      </section>
    </main>
  );
}
