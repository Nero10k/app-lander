'use client';

import { useState } from 'react';

interface CommitmentContractProps {
  userName: string;
  onSubmit: () => void;
}

export default function CommitmentContract({ userName, onSubmit }: CommitmentContractProps) {
  const [agreed, setAgreed] = useState(false);
  
  return (
    <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden relative border border-[rgba(138,79,255,0.1)] premium-card p-4 sm:p-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
          Your Recovery Commitment
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
          Making a formal commitment increases your chances of success by over 70%
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-[rgba(138,79,255,0.1)] to-[rgba(138,43,226,0.05)] p-4 sm:p-6 rounded-xl border border-[rgba(138,79,255,0.2)] mb-6 sm:mb-8">
        <h2 className="text-xl font-medium mb-4 text-center">
          My Personal Commitment
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base">
          <p>
            I, <span className="font-bold underline">{userName || 'I'}</span>, understand that recovery is a journey that requires consistent effort and dedication. By using this app, I am making a commitment to myself to:
          </p>
          
          <ul className="space-y-2 list-disc pl-5">
            <li>Check in with the app daily to track my progress</li>
            <li>Honestly report my successes and setbacks</li>
            <li>Utilize the tools provided to manage urges</li>
            <li>Be patient with myself through this process</li>
            <li>Celebrate my progress, no matter how small</li>
          </ul>
          
          <p>
            I recognize that recovery isn't linear, and setbacks may occur. When they do, I'll use them as learning opportunities rather than reasons to give up.
          </p>
        </div>
      </div>
      
      <div className="flex items-start mb-8">
        <div 
          onClick={() => setAgreed(!agreed)}
          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md border flex-shrink-0 mt-0.5 mr-3 flex items-center justify-center cursor-pointer transition-colors ${
            agreed ? 'border-[#8A4FFF] bg-[#8A4FFF]' : 'border-white/30 hover:border-white/50'
          }`}
        >
          {agreed && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <label className="cursor-pointer text-sm sm:text-base" onClick={() => setAgreed(!agreed)}>
          I agree to this commitment and understand that by making this pledge, I'm taking an important step towards reclaiming control over my life.
        </label>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onSubmit}
          disabled={!agreed}
          className={`w-full sm:w-auto bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all flex items-center justify-center ${
            !agreed ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-purple-500/30'
          }`}
        >
          <span>I Commit to My Recovery</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
} 