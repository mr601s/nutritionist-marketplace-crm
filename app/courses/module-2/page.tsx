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
    },
    {
      id: 'section-2.2',
      title: 'Section 2.2: Setting Protein Targets',
      description: 'How to determine daily protein needs for fat loss, muscle, and health.',
      href: '/courses/module-2/section-2'
    },
    {
      id: 'section-2.3',
      title: 'Section 2.3: Setting Fat Targets',
      description: 'Guidelines for healthy fat intake and energy balance in a nutrition plan.',
      href: '/courses/module-2/section-3'
    },
    {
      id: 'section-2.4',
      title: 'Section 2.4: Setting Carbohydrate Targets',
      description: 'How to calculate and customize carb intake for healthy nutrition.',
      href: '/courses/module-2/section-4'
    },
    {
      id: 'section-2.5',
      title: 'Section 2.5: What About Micronutrients?',
      description: 'Understanding micronutrient needs and food variety for health.',
      href: '/courses/module-2/section-5'
    },
    {
      id: 'section-2.6',
      title: 'Section 2.6: Food Choices',
      description: 'Best practices for food selection, bioavailability, and healthy eating patterns.',
      href: '/courses/module-2/section-6'
    },
    {
      id: 'section-2.7',
      title: 'Section 2.7: Adjusting the Variables',
      description: 'How to monitor progress and update intake for sustainable weight loss.',
      href: '/courses/module-2/section-7'
    },
    {
      id: 'section-2.8',
      title: 'Section 2.8: Meal Prepping',
      description: 'How to use meal prepping for consistency and nutritional success.',
      href: '/courses/module-2/section-8'
    },
    {
      id: 'section-2.9',
      title: 'Section 2.9: Frequently Asked Questions',
      description: 'FAQs and fat loss myths debunked for Module 2 learners.',
      href: '/courses/module-2/section-9'
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
