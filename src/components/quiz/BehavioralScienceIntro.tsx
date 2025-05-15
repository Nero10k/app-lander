'use client';

interface BehavioralScienceIntroProps {
  onContinue: () => void;
}

export default function BehavioralScienceIntro({ onContinue }: BehavioralScienceIntroProps) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-between bg-gradient-to-br from-[#F97B5C] to-[#F5554F] rounded-2xl overflow-hidden relative p-6 sm:p-10">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      {/* Main Content */}
      <div className="w-full z-10 flex-1 flex flex-col items-center pt-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
          The Neuroscience of<br />Addiction Recovery
        </h1>

        {/* Brain Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8 max-w-md w-full">
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="text-white text-xl font-bold">Neuroplasticity</div>
            <div className="text-white/80 text-sm">Your brain can form new neural connections at any age</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="text-white text-xl font-bold">Dopamine Reset</div>
            <div className="text-white/80 text-sm">Recalibrate reward pathways for natural pleasure</div>
          </div>
        </div>
        
        {/* Illustration */}
        <div className="relative w-56 h-56 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L10 40" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="absolute inset-8 rounded-full border-2 border-white/40 bg-white/5 backdrop-blur-sm flex items-center justify-center">
            <div className="text-white/80 transform -rotate-12">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 20V80" stroke="white" strokeWidth="2"/>
                <path d="M20 50H80" stroke="white" strokeWidth="2"/>
                <path d="M25 30L75 70" stroke="white" strokeWidth="2"/>
                <path d="M25 70L75 30" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl w-full mb-10 z-10">
        <p className="text-white text-center text-base leading-relaxed mb-4">
          Your brain is constantly changing in response to your behaviors. Porn addiction physically changes neural pathways in the prefrontal cortex and reward center, but these changes can be reversed through targeted interventions.
        </p>
        
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white/10 p-2 rounded-lg">
            <div className="text-white font-semibold">Phase 1</div>
            <div className="text-white/80 text-xs">Neural Detox</div>
          </div>
          <div className="bg-white/10 p-2 rounded-lg">
            <div className="text-white font-semibold">Phase 2</div>
            <div className="text-white/80 text-xs">Rewiring</div>
          </div>
          <div className="bg-white/10 p-2 rounded-lg">
            <div className="text-white font-semibold">Phase 3</div>
            <div className="text-white/80 text-xs">Integration</div>
          </div>
        </div>
      </div>
      
      {/* Continue Button */}
      <div className="w-full z-10 pb-8">
        <button
          onClick={onContinue}
          className="w-full bg-white text-[#F5554F] font-medium rounded-full py-4 flex items-center justify-center shadow-lg hover:bg-opacity-95 transition-colors"
        >
          <span>Begin Your Brain Assessment</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
} 