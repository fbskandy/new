export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to{' '}
            <span className="text-blue-600 dark:text-blue-400">Your App</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Create something amazing with Next.js and Tailwind CSS. Start building your next great project today.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a
              href="#get-started"
              className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="px-8 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Feature 1',
              description: 'Description of your first amazing feature goes here.',
            },
            {
              title: 'Feature 2',
              description: 'Description of your second amazing feature goes here.',
            },
            {
              title: 'Feature 3',
              description: 'Description of your third amazing feature goes here.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
