// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gray-700 text-white text-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Malik Sir Academy</h1>
          <p className="text-xl sm:text-2xl mb-6">Empowering Students with Knowledge and Skills</p>
          <a href="#about" className="bg-yellow-500 text-blue-600 hover:bg-yellow-400 text-lg font-semibold py-3 px-8 rounded-lg transition-all">
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">About Malik Sir Academy</h2>
          <p className="text-lg text-gray-700 mb-8">
            Malik Sir Academy has been shaping the minds of students for over 10 years. Our expert instructors provide a supportive and engaging learning environment.
            Whether you're looking to prepare for competitive exams, improve your skills, or learn new subjects, we have the resources to help you succeed.
          </p>
          <div className="flex justify-center gap-8">
            <div className="max-w-xs">
              <img src="https://via.placeholder.com/300x200" alt="academy image" className="w-full rounded-lg shadow-lg" />
              <p className="mt-4 text-gray-600">Experienced Faculty</p>
            </div>
            <div className="max-w-xs">
              <img src="https://via.placeholder.com/300x200" alt="classroom" className="w-full rounded-lg shadow-lg" />
              <p className="mt-4 text-gray-600">Modern Facilities</p>
            </div>
            <div className="max-w-xs">
              <img src="https://via.placeholder.com/300x200" alt="students" className="w-full rounded-lg shadow-lg" />
              <p className="mt-4 text-gray-600">Interactive Classes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Courses</h2>
          <p className="text-lg text-gray-700 mb-12">
            Explore a variety of courses designed to suit every student's needs. We offer both online and offline learning modes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Mathematics</h3>
              <p className="text-gray-600 mb-4">Master the principles of mathematics from basic to advanced levels.</p>
              <a href="#contact" className="text-blue-600 font-semibold">Learn More</a>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Science</h3>
              <p className="text-gray-600 mb-4">Our science courses are designed to make learning fun and interactive.</p>
              <a href="#contact" className="text-blue-600 font-semibold">Learn More</a>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">English</h3>
              <p className="text-gray-600 mb-4">Improve your English skills with a variety of interactive courses.</p>
              <a href="#contact" className="text-blue-600 font-semibold">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Academy Gallery</h2>
          <p className="text-lg text-gray-700 mb-12">
            Take a look at our vibrant and energetic learning environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src="https://via.placeholder.com/300x200" alt="students" className="w-full rounded-lg shadow-lg" />
            <img src="https://via.placeholder.com/300x200" alt="classroom" className="w-full rounded-lg shadow-lg" />
            <img src="https://via.placeholder.com/300x200" alt="events" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-6">Get in touch with us for more information about courses and enrollment.</p>
          <p className="text-xl font-semibold">Phone: +123 456 789</p>
          <p className="text-xl font-semibold">Email: info@maliksiracademy.com</p>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}

export default Home;
