'use client';

interface WelcomeScreenProps {
  onContinue: () => void;
}

export default function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-between bg-gradient-to-b from-[#4A00B2] to-[#6932C8] rounded-2xl overflow-hidden relative p-6 sm:p-10">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      {/* Logo and Branding */}
      <div className="w-full flex justify-center pt-10 z-10">
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-full">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-[#6932C8] font-bold text-xl">PWR</span>
            </div>
          </div>
          <span className="text-white text-2xl ml-3 font-bold">POWER</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="text-center z-10 flex-1 flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Rewire Your Brain<br />Reclaim Your Life
        </h1>
        <p className="text-xl text-white/90 mb-4 max-w-md">
          Neuroscience-backed recovery assessment
        </p>
        
        <div className="w-16 h-1 bg-white/30 rounded-full mb-6"></div>

        {/* Scientific Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 max-w-md w-full">
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="text-white text-3xl font-bold">94%</div>
            <div className="text-white/80 text-sm">Recovery success rate following our program</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="text-white text-3xl font-bold">78%</div>
            <div className="text-white/80 text-sm">Reduced urge intensity after 30 days</div>
          </div>
        </div>
        
        <div className="flex flex-col items-center mb-8 bg-white/10 p-4 rounded-xl max-w-md w-full">
          <p className="text-white/90 text-sm italic mb-2">
            "PWR's science-based approach creates measurable changes in neural pathways associated with addiction, leading to long-term recovery success."
          </p>
          <div className="text-white/70 text-xs">
            — Dr. Michael Stevens, Neuroscience Research Institute
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <div className="text-white/80 text-sm bg-white/10 px-3 py-1 rounded-full">As featured in:</div>
          <div className="flex flex-wrap justify-center gap-4 text-white font-semibold">
            <span>Psychology Today</span>
            <span>•</span>
            <span>Forbes</span>
            <span>•</span>
            <span>Men's Health</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements - brain visualization */}
      <div className="absolute bottom-20 right-0 opacity-20 z-0">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 30C55.8 30 20 65.8 20 110C20 154.2 55.8 190 100 190C144.2 190 180 154.2 180 110C180 65.8 144.2 30 100 30Z" stroke="white" strokeWidth="2"/>
          <path d="M100 30C85 50 75 80 100 100C125 120 135 150 100 170" stroke="white" strokeWidth="2"/>
          <path d="M60 60C80 80 120 80 140 60" stroke="white" strokeWidth="2"/>
          <path d="M60 160C80 140 120 140 140 160" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Continue Button */}
      <div className="w-full z-10 pb-8">
        <button
          onClick={onContinue}
          className="w-full bg-white text-[#6932C8] font-medium rounded-full py-4 flex items-center justify-center shadow-lg hover:bg-opacity-95 transition-colors"
        >
          <span>Start Your Brain Recovery Assessment</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
} 