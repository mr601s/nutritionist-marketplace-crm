import Link from 'next/link';

export default function CoursesPage() {
  const modules = [
    {
      id: 'module-1',
      title: 'Module 1: Weight & Fat Loss Fundamentals',
      description: 'Learn about Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), and how your body uses energy.',
      lessons: 6,
      href: '/courses/module-1'
    },
    {
      id: 'module-2',
      title: 'Module 2: Putting It Into Practice',
      description: 'Learn how to calculate your TDEE and create an effective caloric deficit for sustainable fat loss.',
      lessons: 2,
      href: '/courses/module-2'
    },
    // Future modules can be added here
  ];

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Course Modules</h1>
      <p className="mb-8 text-gray-600">
        Select a module below to begin your learning journey. Each module contains lessons designed to help you understand nutrition and achieve your health goals.
      </p>
      
      <div className="grid gap-6">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={module.href}
            className="block p-6 border border-gray-200 rounded-lg hover:border-brand hover:shadow-lg transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2">{module.title}</h2>
            <p className="text-gray-600 mb-4">{module.description}</p>
            <div className="text-sm text-gray-500">
              {module.lessons} lesson{module.lessons !== 1 ? 's' : ''} available
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">More Modules Coming Soon</h3>
        <p className="text-gray-600">
          We&apos;re continuously adding new content. Check back regularly for new modules and lessons!
        </p>
      </div>
    </main>
  );
}
