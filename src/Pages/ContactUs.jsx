import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import PageTitle from "../Components/PageTitle";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <PageTitle title="Contact Us" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">
        {/* Left Side: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Type your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4 text-gray-700">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <span>contact@yourdomain.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <FaPhone className="text-indigo-600 text-xl" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-indigo-600 text-xl" />
            <span>123 Main Street, City, Country</span>
          </div>

          <iframe
            title="Location"
            className="w-full h-64 rounded-md mt-4 border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190266945795!2d-122.41941548468147!3d37.7749297797595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbbbbbb!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1615812284554!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
