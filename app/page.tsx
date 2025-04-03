export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Start Your Homeschooling Journey
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          From "Where do I begin?" to "I've got this!" — We'll guide you every step of the way.
        </p>
        <div className="flex justify-center">
          <a
            href="/get-started"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}
