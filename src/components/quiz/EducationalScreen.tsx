'use client';

interface EducationalScreenProps {
  onContinue: () => void;
}

export default function EducationalScreen({ onContinue }: EducationalScreenProps) {
  return (
    <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden relative border border-[rgba(138,79,255,0.1)] premium-card p-4 sm:p-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
          Understanding Pornography Addiction
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
          Knowledge is power - learn what happens in your brain and how recovery works
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-gradient-to-r from-[rgba(138,79,255,0.1)] to-[rgba(138,43,226,0.05)] p-4 sm:p-6 rounded-xl border border-[rgba(138,79,255,0.2)]">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
            The Brain Chemistry of Addiction
          </h2>
          
          <div className="space-y-3 text-xs sm:text-sm">
            <p>
              Pornography addiction works by hijacking your brain's reward system, primarily through the neurotransmitter dopamine.
            </p>
            
            <div className="flex items-center mt-2 sm:mt-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(138,79,255,0.2)] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#8A4FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <span className="font-medium">Normal dopamine levels:</span> 50-100 units
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(138,79,255,0.2)] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#8A4FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="font-medium">Pornography viewing:</span> 200+ units of dopamine
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(138,79,255,0.2)] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#8A4FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div>
                <span className="font-medium">Result:</span> Desensitization and lower baseline dopamine levels
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Neurological Recovery Timeline
          </h2>
          
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex">
              <div className="w-10 sm:w-14 flex-shrink-0 text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[rgba(138,79,255,0.3)] flex items-center justify-center mx-auto">
                  <span className="font-medium">7</span>
                </div>
                <div className="text-white/50 text-[10px] sm:text-xs mt-1">days</div>
              </div>
              <div className="ml-2 sm:ml-3">
                <span className="font-medium block mb-1">Initial Withdrawal</span>
                <p className="text-white/70">Heightened urges and mood swings as your brain adapts to the absence of artificial stimulation.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-10 sm:w-14 flex-shrink-0 text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[rgba(138,79,255,0.5)] flex items-center justify-center mx-auto">
                  <span className="font-medium">14</span>
                </div>
                <div className="text-white/50 text-[10px] sm:text-xs mt-1">days</div>
              </div>
              <div className="ml-2 sm:ml-3">
                <span className="font-medium block mb-1">Dopamine Rebalancing</span>
                <p className="text-white/70">Brain begins to restore normal dopamine sensitivity. Natural pleasures become more enjoyable.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-10 sm:w-14 flex-shrink-0 text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[rgba(138,79,255,0.7)] flex items-center justify-center mx-auto">
                  <span className="font-medium">30</span>
                </div>
                <div className="text-white/50 text-[10px] sm:text-xs mt-1">days</div>
              </div>
              <div className="ml-2 sm:ml-3">
                <span className="font-medium block mb-1">Neural Pathway Weakening</span>
                <p className="text-white/70">The pathways created by addiction begin to weaken as new, healthier pathways strengthen.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-10 sm:w-14 flex-shrink-0 text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[rgba(138,79,255,0.9)] flex items-center justify-center mx-auto">
                  <span className="font-medium">90</span>
                </div>
                <div className="text-white/50 text-[10px] sm:text-xs mt-1">days</div>
              </div>
              <div className="ml-2 sm:ml-3">
                <span className="font-medium block mb-1">Substantial Recovery</span>
                <p className="text-white/70">Significant neuroplasticity has occurred, with measurable improvements in focus, mood, and energy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          Three Key Principles for Successful Recovery
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3 sm:p-4 bg-white/5 rounded-lg">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.3)] rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-[#8A4FFF]">1</span>
            </div>
            <h3 className="font-medium mb-1 text-sm sm:text-base">Consistency</h3>
            <p className="text-white/70 text-xs sm:text-sm">
              Daily check-ins and consistent practice strengthen new neural pathways.
            </p>
          </div>
          
          <div className="p-3 sm:p-4 bg-white/5 rounded-lg">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.3)] rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-[#8A4FFF]">2</span>
            </div>
            <h3 className="font-medium mb-1 text-sm sm:text-base">Self-Compassion</h3>
            <p className="text-white/70 text-xs sm:text-sm">
              Treating setbacks as learning opportunities rather than failures.
            </p>
          </div>
          
          <div className="p-3 sm:p-4 bg-white/5 rounded-lg">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.3)] rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-[#8A4FFF]">3</span>
            </div>
            <h3 className="font-medium mb-1 text-sm sm:text-base">Replacement</h3>
            <p className="text-white/70 text-xs sm:text-sm">
              Developing healthy alternative activities to replace addictive behaviors.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onContinue}
          className="w-full sm:w-auto bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center"
        >
          <span>Continue to Your Action Plan</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
} 