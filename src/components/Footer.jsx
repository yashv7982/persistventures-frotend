import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeMsg, setSubscribeMsg] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeMsg('');
    setError('');
    try {
      const response = await fetch('http://localhost:5000/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setSubscribeMsg('Thank you for subscribing!');
        setEmail('');
      } else {
        const data = await response.json();
        setError(data.message || 'Subscription failed');
      }
    } catch (err) {
      setError('Subscription failed');
    }
  };

  return (
    <footer className="bg-[#0d0a1a] text-white">
      {/* Subscription Banner */}
      <div className="w-4/5 mx-auto py-8 px-4 bg-[#1a132b] rounded-md mt-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
          Sign up to get notified first about new Startupathon projects and receive updates through our newsletter...
        </h3>
        <form 
          onSubmit={handleSubscribe} 
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto sm:flex-1 px-4 py-2 text-black rounded"
            required
          />
          <button 
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded font-semibold transition-colors"
          >
            Subscribe
          </button>
        </form>
        {subscribeMsg && (
          <p className="text-center mt-2 text-green-400">{subscribeMsg}</p>
        )}
        {error && (
          <p className="text-center mt-2 text-red-500">{error}</p>
        )}
      </div>

      {/* Main Footer Content */}
      <div className="w-4/5 mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Column: Logo & Description */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
                alt="Persist Ventures Logo"
                className="w-10 h-10 object-contain mr-2"
              />
              <h4 className="text-xl font-bold leading-tight">
                PERSIST<br />VENTURES
              </h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We partner with entrepreneurs and businesses to help scale and grow their ideas. With a diverse team skilled in every sector, there's no business we can't help get a leg up.
            </p>
            <div className="flex items-center gap-4 mt-4 text-xl">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:w-1/3">
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Investor Application</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Job Application</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ & Startup Accelerator</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Legal */}
          <div className="md:w-1/3">
            <h5 className="text-lg font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Intellectual Property</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
