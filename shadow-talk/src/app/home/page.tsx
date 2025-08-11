import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Shadow-Talk
          </h1>
          <p className="text-xl text-gray-600">
            Your anonymous messaging platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Send Anonymous Messages
            </h2>
            <p className="text-gray-600 mb-4">
              Share your thoughts anonymously with others. No names, no judgment, just honest conversations.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Start Messaging
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Receive Messages
            </h2>
            <p className="text-gray-600 mb-4">
              Get anonymous messages from people who want to share something with you.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              View Messages
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/sign-in" 
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Sign in to your account
          </a>
          <span className="mx-2 text-gray-400">or</span>
          <a 
            href="/sign-up" 
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Create a new account
          </a>
        </div>
      </div>
    </div>
  )
}
