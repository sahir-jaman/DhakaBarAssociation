// EventPage.jsx
import React from 'react';

function EventPage() {
  return (
    <div className="max-w-[90%] mx-auto p-5 bg-[#0d1130] text-white rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-center">Actor Link Next Event</h1>
      <p className="text-lg text-center text-gray-300 mb-2">Join us for a night of celebration and networking!</p>
      
      <div className="flex justify-center">
        <p className="text-lg font-semibold mr-4">Date:</p>
        <p className="text-lg">December 15, 2024</p>
      </div>
      
      <div className="flex justify-center mb-5">
        <p className="text-lg font-semibold mr-4">Location:</p>
        <p className="text-lg">Dhaka Convention Center</p>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
        <p className="text-lg text-gray-300 mb-4">
          Join us for our annual gala where actors and directors come together to celebrate creativity and collaboration in the film industry. Enjoy an evening filled with inspiring speeches, networking opportunities, and exciting performances. Don’t miss the chance to connect with industry professionals and be part of the magic!
        </p>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-2">Event Highlights</h2>
        <ul className="list-disc ml-5 text-gray-300">
          <li>Keynote speeches from industry leaders</li>
          <li>Live performances by renowned artists</li>
          <li>Networking sessions with directors and actors</li>
          <li>A chance to win exciting raffle prizes</li>
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-2">Schedule</h2>
        <ul className="text-gray-300">
          <li><strong>6:00 PM:</strong> Registration Opens</li>
          <li><strong>7:00 PM:</strong> Opening Remarks</li>
          <li><strong>7:30 PM:</strong> Keynote Speech</li>
          <li><strong>8:00 PM:</strong> Dinner Served</li>
          <li><strong>9:00 PM:</strong> Performances Begin</li>
          <li><strong>10:30 PM:</strong> Networking and Raffle Draw</li>
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
        <p className="text-gray-300 italic mb-2">"A fantastic event! The networking opportunities were invaluable." - John Doe</p>
        <p className="text-gray-300 italic">"I met so many talented people. Can't wait for next year!" - Jane Smith</p>
      </div>

      <div className="mt-5 text-center">
        <h2 className="text-2xl font-semibold mb-2">Book Now!</h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
          Register
        </button>
      </div>
    </div>
  );
}

export default EventPage;
