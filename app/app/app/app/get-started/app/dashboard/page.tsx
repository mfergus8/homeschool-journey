export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Journey</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-900">Next Steps</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center text-blue-800">
                    <span className="mr-2">•</span>
                    Research state requirements
                  </li>
                  <li className="flex items-center text-blue-800">
                    <span className="mr-2">•</span>
                    Join local homeschool group
                  </li>
                  <li className="flex items-center text-blue-800">
                    <span className="mr-2">•</span>
                    Create learning space
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Progress</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Tasks Completed</p>
                <p className="text-2xl font-bold text-blue-600">2/10</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Days Until Start</p>
                <p className="text-2xl font-bold text-blue-600">45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
