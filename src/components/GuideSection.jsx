import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import VideoSection from './VideoSection';

// A helper component for each step
function GuideStep({ title, description, side = 'left' }) {
  return (
    <div
      className={`
        relative w-full mb-16 
        opacity-0 translate-y-8 transition-all duration-700 
        will-animate
        step-${side}
      `}
    >
      {/* Circle indicator */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full z-10" />
      {/* The line is handled globally by the parent container's pseudo-element */}

      <div
        className={`
          bg-[#1a132b] border border-purple-600 p-6 rounded-lg shadow-md 
          w-full max-w-md
          ${side === 'left' ? 'mr-auto' : 'ml-auto'}
        `}
      >
        <h3 className="text-lg font-bold text-purple-200 mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function GuideSection() {
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    // If the current pathname is "/guide", scroll to this section on mount
    if (location.pathname === '/guide' && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    // Intersection Observer to animate steps as they come into view
    const steps = document.querySelectorAll('.will-animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add classes to fade in and slide up
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    steps.forEach((step) => {
      observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0d0a1a] text-white py-12 px-4 overflow-hidden"
    >
      <div className="w-4/5 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Found an idea that matches your skills?
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Here’s a simple guide on how the Startupathon process works once you find a project idea that suits your skills.
        </p>

        {/* Vertical line in the center (absolute, full height) */}
        <div className="relative">
          <div
            className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-purple-600"
            style={{ minHeight: '100%' }}
          />

          {/* Steps */}
          <GuideStep
            title="It all starts here!"
            description="Create an exciting 'start-up' idea—a detailed idea to spark creativity and clarify your vision. Pro Tip: By attention—30 seconds to show your masterpiece!"
            side="left"
          />
          <GuideStep
            title="Build, Submit & Shine"
            description="Create a prototype that showcases your approach, then submit your work in time. We'll compare entries, and your creative solution will amaze reviewers."
            side="right"
          />
          <GuideStep
            title="Get Feedback, Level Up!"
            description="Three days after submission, we review your work. If it stands out, you’ll hear from us! If not, we’ll share feedback on how to improve. The cycle continues until you find the perfect fit."
            side="left"
          />
          <GuideStep
            title="Claim Your Crown"
            description="Lead the Project, ace the challenge, and take charge as BOSS. Enjoy ownership, 2% equity, and competitive salary. Turn vision into impact with your talent!"
            side="right"
          />
        </div>
        <VideoSection />
      </div>
    </section>
  );
}

export default GuideSection;
