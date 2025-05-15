'use client';

import { useState } from 'react';

interface PersonalInfoProps {
  onSubmit: (name: string, email: string) => void;
}

export default function PersonalInfo({ onSubmit }: PersonalInfoProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const validateName = () => {
    if (!name.trim()) {
      setNameError('Please enter your name');
      return false;
    }
    setNameError('');
    return true;
  };
  
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Please enter your email');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    
    if (isNameValid && isEmailValid) {
      onSubmit(name, email);
    }
  };
  
  return (
    <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden relative border border-[rgba(138,79,255,0.1)] premium-card p-4 sm:p-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
          Almost There!
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
          Let us know where to send your personalized recovery plan
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4 sm:mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1 sm:mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            placeholder="Enter your name"
            className={`w-full px-4 py-3 bg-white/5 border ${
              nameError ? 'border-red-500' : 'border-white/10'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A4FFF] focus:border-transparent text-white text-sm sm:text-base`}
          />
          {nameError && <p className="mt-1 text-red-500 text-xs sm:text-sm">{nameError}</p>}
        </div>
        
        <div className="mb-6 sm:mb-8">
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1 sm:mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 bg-white/5 border ${
              emailError ? 'border-red-500' : 'border-white/10'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A4FFF] focus:border-transparent text-white text-sm sm:text-base`}
          />
          {emailError && <p className="mt-1 text-red-500 text-xs sm:text-sm">{emailError}</p>}
        </div>
        
        <div className="mb-6 sm:mb-8">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacy"
                type="checkbox"
                required
                className="w-4 h-4 bg-white/5 border-white/30 rounded"
              />
            </div>
            <label htmlFor="privacy" className="ml-3 text-sm text-white/70">
              I agree to receive my recovery plan and future updates via email. You can unsubscribe at any time. View our <a href="#" className="text-[#8A4FFF] hover:underline">Privacy Policy</a>.
            </label>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center"
          >
            <span>Continue to Your Plan</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
} 