// import React from 'react'

function Constitution() {
  return (
    <div className="bg-[#0d1130] text-white py-10 px-4 md:px-10">
      {/* Organization Journey Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">How Actor Link Began</h2>
        <p className="text-lg text-justify mb-6">
          Actor Link started with the vision of bridging the gap between actors and directors in the entertainment industry. What began as a small initiative to create a platform for connecting talent and filmmakers has grown into a vibrant community of artists from around the world. From our humble beginnings in a small office, we have expanded to help thousands of actors showcase their talent and land roles in major productions.
        </p>
        <p className="text-lg text-justify">
          The journey of Actor Link has been driven by the passion of its founders and the constant evolution of technology that now empowers artists to connect, collaborate, and create together without boundaries. Our goal is simple: to provide a seamless and creative space for actors and directors to find each other.
        </p>
      </div>

      {/* Goal Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission and Goals</h2>
        <p className="text-lg text-justify mb-6">
          At Actor Link, we believe that every actor deserves an opportunity to shine and that directors should have access to the best talent. Our mission is to democratize the casting process, making it easier, faster, and more efficient for all parties involved.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">To connect directors with actors, regardless of geographical boundaries.</li>
          <li className="mb-2">To create a diverse platform where both seasoned professionals and emerging talent can thrive.</li>
          <li className="mb-2">To foster creativity by providing a space where filmmakers can find the perfect cast for their vision.</li>
        </ul>
      </div>

      {/* Image Gallery Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Journey in Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div>
            <img src="https://images.unsplash.com/photo-1518930259200-3e5b29f42096?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <p className="text-center mt-2">Starting from Scratch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Constitution;
