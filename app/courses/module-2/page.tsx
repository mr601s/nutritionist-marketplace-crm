import Link from 'next/link';

export default function Module2Page() {
  const sections = [
    {
      id: 'section-2.0',
      title: 'Section 2.0: Calculating Your TDEE',
      description: 'Learn how to calculate your Total Daily Energy Expenditure using BMR formulas and activity factors.',
      href: '/courses/module-2/section-0'
    },
    {
      id: 'section-2.1',
      title: 'Section 2.1: Creating the Deficit',
      description: 'Discover how to create an effective caloric deficit for sustainable fat loss.',
      href: '/courses/module-2/section-1'
    }
  ];

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Module 2: Putting It Into Practice
      </h1>
      
      <p className="mb-8 text-gray-600">
        Select a section below to continue your learning journey through Module 2.
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
          More sections will be added to Module 2. Check back regularly for new content!
        </p>
      </div>
    </main>
  );
}
