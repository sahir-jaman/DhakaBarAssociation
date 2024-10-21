// MediaPage.jsx
import React from 'react';

function MediaPage() {
  return (
    <div className="max-w-[90%] mx-auto p-5 bg-[#0d1130] text-white rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-center">Bangladeshi Media Hub</h1>
      <p className="text-lg text-center text-gray-300 mb-6">
        Stay updated with the latest news, articles, and multimedia content from the Bangladeshi entertainment industry.
      </p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Latest News</h2>
        <ul className="list-disc ml-5 text-gray-300">
          <li><strong>New Film Releases:</strong> Discover the latest Bangladeshi films hitting the theaters this month.</li>
          <li><strong>Celebrity Interviews:</strong> Read exclusive interviews with your favorite actors and filmmakers.</li>
          <li><strong>Film Festivals:</strong> Updates on upcoming film festivals and events across Bangladesh.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Featured Articles</h2>
        <div className="space-y-4">
          <article className="bg-[#1a1f35] p-4 rounded-md">
            <h3 className="text-xl font-bold">The Rise of Bangladeshi Cinema</h3>
            <p className="text-gray-300">
              An in-depth look at the evolution of the Bangladeshi film industry and its impact on culture.
            </p>
            <a href="#" className="text-blue-400 hover:underline">Read more</a>
          </article>
          <article className="bg-[#1a1f35] p-4 rounded-md">
            <h3 className="text-xl font-bold">Top 10 Movies to Watch</h3>
            <p className="text-gray-300">
              A curated list of must-watch Bangladeshi films for every cinema lover.
            </p>
            <a href="#" className="text-blue-400 hover:underline">Read more</a>
          </article>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Multimedia Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#1a1f35] p-3 rounded-md">
            <img src="https://via.placeholder.com/300" alt="Bangladeshi Film" className="w-full h-40 object-cover rounded-md mb-2"/>
            <h3 className="text-lg font-bold">Behind the Scenes</h3>
          </div>
          <div className="bg-[#1a1f35] p-3 rounded-md">
            <img src="https://via.placeholder.com/300" alt="Film Festival" className="w-full h-40 object-cover rounded-md mb-2"/>
            <h3 className="text-lg font-bold">Film Festival Highlights</h3>
          </div>
          <div className="bg-[#1a1f35] p-3 rounded-md">
            <img src="https://via.placeholder.com/300" alt="Celebrity Event" className="w-full h-40 object-cover rounded-md mb-2"/>
            <h3 className="text-lg font-bold">Celebrity Appearances</h3>
          </div>
        </div>
      </section>

      <section className="text-center mt-6">
        <h2 className="text-3xl font-semibold mb-4">Stay Connected</h2>
        <p className="text-gray-300 mb-4">Follow us on social media for the latest updates and more!</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-400">Facebook</a>
          <a href="#" className="text-blue-400">Instagram</a>
          <a href="#" className="text-blue-400">YouTube</a>
        </div>
      </section>
    </div>
  );
}

export default MediaPage;
