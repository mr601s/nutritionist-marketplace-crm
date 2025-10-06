export default function Section24Page() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        🍞 2.4 Setting Carbohydrate Targets
      </h1>
      
      <p className="mb-6 text-gray-700">
        Once protein and fat are set, the rest of your calories go to carbohydrates. Carbs aren{"'t"} the enemy—they{"'re"} your body{"'s"} preferred fuel, especially during workouts.
      </p>
      
      <p className="mb-6 text-gray-700">
        Carbs also provide fiber, which supports digestion and satiety.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">
        🧮 How to Calculate Your Carb Intake
      </h2>
      
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>Subtract protein and fat calories from your total daily calories</li>
        <li>Divide the remaining calories by 4 (since carbs have 4 calories per gram)</li>
      </ul>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-800 mb-2">
          Example for a 200 lb person:
        </p>
        <ul className="space-y-1 text-gray-700">
          <li>• TDEE = 2600</li>
          <li>• Deficit = 2100</li>
          <li>• Protein = 200g = 800 cal</li>
          <li>• Fat = 90g = 810 cal</li>
          <li>• Remaining = 2100 - 800 - 810 = 490 cal</li>
          <li>• Carbs = 490 ÷ 4 = 122g of carbs/day</li>
        </ul>
      </div>
      
      <p className="text-gray-700">
        You can adjust based on preference—some people feel better with more carbs, others with more fat. Just keep it balanced and avoid extremes.
      </p>
    </main>
  );
}
