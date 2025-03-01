import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function VideoSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="space-y-10 mt-10">
      {/* 1) YouTube Video */}
      <div data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center mb-2">
          Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive
        </h3>
        <p className="text-center text-gray-300 mb-4">
          (A Startupathon Success)
        </p>

        {/* Responsive 16:9 container */}
        <div className="relative w-full max-w-3xl mx-auto" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/pn_HoowYNTQ"
            title="Work Smart, Win Big"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* 2) Loom Video */}
      <div data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold text-center mb-2">
          Our Hiring Process: Shared Through Candidate Stories
        </h3>
        <p className="text-center text-gray-300 mb-4">
          Insights from real candidates
        </p>

        <div className="relative w-full max-w-3xl mx-auto" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?sid=f726d7c3-062a-4580-994a-0bac66861d95"
            title="Our Hiring Process"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
