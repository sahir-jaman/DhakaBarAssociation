// BroadcastFairPage.jsx
import React from 'react';

function BroadcastFairPage() {
  return (
    <div className="max-w-[90%] mx-auto p-5 bg-[#0d1130] text-white rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-center">Broadcast Fair 2024</h1>
      <p className="text-lg text-center text-gray-300 mb-6">
        Join us for an exciting event dedicated to the latest innovations in broadcasting and media!
      </p>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Event Details</h2>
        <div className="flex justify-center">
          <p className="text-lg font-semibold mr-4">Date:</p>
          <p className="text-lg">March 10-12, 2024</p>
        </div>
        <div className="flex justify-center">
          <p className="text-lg font-semibold mr-4">Location:</p>
          <p className="text-lg">Dhaka International Convention Center</p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">What to Expect:</h3>
          <p className="text-gray-300">
            Explore the latest technologies, attend engaging workshops, and network with industry leaders. This is a perfect opportunity for professionals, students, and enthusiasts in the broadcasting field.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Schedule</h2>
        <ul className="list-disc ml-5 text-gray-300">
          <li><strong>March 10:</strong> Opening Ceremony and Keynote Speakers</li>
          <li><strong>March 11:</strong> Workshops and Panel Discussions</li>
          <li><strong>March 12:</strong> Exhibitor Showcase and Networking Events</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Featured Exhibitors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#1a1f35] p-4 rounded-md">
            <h3 className="text-lg font-bold">XYZ Broadcasting Co.</h3>
            <p className="text-gray-300">Innovative solutions for modern broadcasting.</p>
          </div>
          <div className="bg-[#1a1f35] p-4 rounded-md">
            <h3 className="text-lg font-bold">MediaTech Solutions</h3>
            <p className="text-gray-300">Leading provider of media technology and services.</p>
          </div>
          <div className="bg-[#1a1f35] p-4 rounded-md">
            <h3 className="text-lg font-bold">Creative Broadcast Studio</h3>
            <p className="text-gray-300">Your partner in creative media production.</p>
          </div>
        </div>
      </section>

      <section className="text-center mt-6">
        <h2 className="text-3xl font-semibold mb-4">Register Now!</h2>
        <p className="text-gray-300 mb-4">Don't miss out on this fantastic opportunity to expand your network and knowledge in broadcasting.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
          Register Here
        </button>
      </section>
    </div>
  );
}

export default BroadcastFairPage;
