// import React from 'react'
import Slider from "../Slider/Slider";

function Home() {
  return (
    <>
      <div className="w-full bg-[#0d1130]">
        {/* Hero Section */}
        <div className="text-white">
          <Slider />
        </div>

        {/* Static Feature Sections */}
        <div className="text-white py-10 px-4 md:px-10 bg-[#1a1f4c]">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Actor Link?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            <div className="p-4 bg-[#242850] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Seamless Connections</h3>
              <p>Instantly connect with talented actors or directors from across the world, all in one place.</p>
            </div>

            <div className="p-4 bg-[#242850] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Diverse Talent Pool</h3>
              <p>Browse through profiles of both seasoned professionals and emerging talents ready to work on your next big project.</p>
            </div>

            <div className="p-4 bg-[#242850] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Simple & Efficient</h3>
              <p>Easily manage and track potential collaborations with our user-friendly platform, designed for the entertainment industry.</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="py-10 px-4 md:px-10 bg-[#0d1130]">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Premier Network</h2>
            <p className="text-lg text-white mb-6">
              Whether you're an actor looking for new opportunities or a director in search of the perfect cast, Actor Link is your go-to platform.
            </p>
            <a
              href="/membership-form"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-10 px-4 md:px-10 bg-[#1a1f4c]">
          <h2 className="text-3xl font-bold text-center text-white mb-6">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-4 bg-[#242850] rounded-lg shadow-md">
              <p className="text-white">
                "Actor Link made it so easy for me to find new actors for my project. I found the perfect cast in just days!"
              </p>
              <p className="text-blue-400 font-semibold mt-2">- John Doe, Director</p>
            </div>

            <div className="p-4 bg-[#242850] rounded-lg shadow-md">
              <p className="text-white">
                "Thanks to Actor Link, I landed my first major role! The platform is easy to use and connects me with amazing directors."
              </p>
              <p className="text-blue-400 font-semibold mt-2">- Jane Smith, Actor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
