import Link from 'next/link';

export default function Module1Page() {
  const sections = [
    {
      id: 'section-1.0',
      title: 'Section 1.0: Basal Metabolic Rate & Energy Expenditure',
      description: 'Learn about BMR, TDEE, and how your body uses energy at rest and during activity.',
      href: '/courses/module-1/section-0'
    },
    {
      id: 'section-1.1',
      title: 'Section 1.1: Why Do We Gain Fat?',
      description: 'Understand the calorie balance equation and why body fat is essential for health.',
      href: '/courses/module-1/section-1'
    },
    {
      id: 'section-1.2',
      title: 'Section 1.2: How Do We Lose Fat?',
      description: 'Discover the role of BMR, TDEE, caloric deficit, and how hormones and genetics affect fat loss.',
      href: '/courses/module-1/section-2'
    },
    {
      id: 'section-1.3',
      title: 'Section 1.3: What Really Happens When You Lose Fat?',
      description: 'Explore metabolic adaptations, lean body mass loss, and the physiological effects of fat loss.',
      href: '/courses/module-1/section-3'
    }
  ];

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Module 1: Weight & Fat Loss Fundamentals</h1>
      
      <p className="mb-8 text-gray-600">
        Select a section below to continue your learning journey through Module 1.
      </p>

      <div className="grid gap-6 mb-12">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={section.href}
            className="block p-6 border border-gray-200 rounded-lg hover:border-brand hover:shadow-lg transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
        <p className="text-gray-600">
          More sections will be added to Module 1. Check back regularly for new content!
        </p>
      </div>
    </main>
  );
}
