import React from 'react'

const OurService = () => {
  return (
    // Our Services Section
    <div className="bg-white max-w-6xl mx-auto mt-20 p-6 rounded-2xl shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-indigo-600">Our Services</h2>
        <p className="text-gray-600 mt-2">We provide 100% original service for your business</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="p-6 rounded-lg shadow border bg-indigo-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              <span className="text-xl">💼</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Business Solutions</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.
          </p>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>

        {/* Service 2 */}
        <div className="p-6 rounded-lg shadow border bg-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              <span className="text-xl">🎨</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Design Solutions</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.
          </p>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>

        {/* Service 3 */}
        <div className="p-6 rounded-lg shadow border bg-indigo-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              <span className="text-xl">📈</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Marketing Solutions</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.
          </p>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>

        {/* Service 4 */}
        <div className="p-6 rounded-lg shadow border bg-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              <span className="text-xl">🖥️</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">IT Solutions</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.
          </p>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>

        {/* Service 5 */}
        <div className="p-6 rounded-lg shadow border bg-indigo-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              <span className="text-xl">🔒</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Security Solutions</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.
          </p>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>

        {/* Service 6 */}
        <div className="p-6 rounded-lg shadow border bg-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              <span className="text-xl">💻</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Web Development</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.
          </p>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>
       
      </div>
    </div>
  )
}

export default OurService
