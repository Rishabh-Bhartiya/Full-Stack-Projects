import React from 'react'

interface VerifyPageProps {
  params: {
    username: string
  }
}

export default function VerifyPage({ params }: VerifyPageProps) {
  const { username } = params

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify Your Email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Welcome, {username}! Please enter the verification code sent to your email.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="verification-code" className="sr-only">
              Verification Code
            </label>
            <input
              id="verification-code"
              name="verificationCode"
              type="text"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter 6-digit code"
              maxLength={6}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify Email
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code? Check your spam folder or
            </p>
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Resend verification code
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
