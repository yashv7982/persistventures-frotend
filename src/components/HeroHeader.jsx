import React from 'react';

function HeroHeader() {
  return (
    <section className="relative w-full bg-[#0d0a1a] text-white overflow-hidden">
      {/* Top Image (Black & White) with gradient fade at bottom) */}
      <div className="relative w-full flex justify-center">
        <img
          src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png"
          alt="Group of People"
          className=" px-4 filter grayscale"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0d0a1a] to-transparent" />
      </div>

      {/* Main Hero Content wrapped in an 80% width container */}
      <div className="w-4/5 mx-auto flex flex-col items-center text-center px-4 py-8 md:py-12 lg:py-16">
        <h1 className="text-5xl font-bold mb-4 text-white">Startupathon</h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Your Chance to Build, Lead, and Succeed as a Founder
        </p>

        {/* Video Embed with reduced height */}
        <div
          className="relative w-full max-w-3xl mb-8"
          style={{ paddingTop: '40%' }}
        >
          <iframe
            src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde?t=14"
            title="Startupathon Video"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#ongoing"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition-colors"
          >
            Ongoing Startupathon
          </a>
          <a
            href="#guide"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition-colors"
          >
            Startupathon Guide
          </a>
          <a
            href="#past"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition-colors"
          >
            Past Startupathons
          </a>
          <a
            href="#mentor"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition-colors"
          >
            Mentor Network
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroHeader;
