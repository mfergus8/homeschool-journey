'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const steps = [
  {
    id: 1,
    title: "Let's Get to Know You",
    questions: [
      {
        id: 'childCount',
        question: 'How many children are you planning to homeschool?',
        options: ['1', '2', '3', '4+']
      },
      {
        id: 'childAges',
        question: 'What are their ages?',
        type: 'text'
      }
    ]
  },
  {
    id: 2,
    title: 'Your Current Situation',
    questions: [
      {
        id: 'experience',
        question: 'What is your current experience with homeschooling?',
        options: ['Complete beginner', 'Done some research', 'Previously homeschooled']
      }
    ]
  }
]

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {steps[currentStep].title}
            </h2>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            {steps[currentStep].questions.map((q) => (
              <div key={q.id} className="space-y-4">
                <label className="block text-lg font-medium text-gray-700">
                  {q.question}
                </label>
                {q.type === 'text' ? (
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                  />
                ) : (
                  <div className="space-y-2">
                    {q.options?.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="radio"
                          name={q.id}
                          value={option}
                          onChange={() => setAnswers({ ...answers, [q.id]: option })}
                          className="h-4 w-4 text-blue-600"
                        />
                        <label className="ml-2">{option}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 0}
              className="px-4 py-2 text-gray-700 bg-white border rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
