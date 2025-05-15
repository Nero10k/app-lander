'use client';

interface ProgressVisualizationProps {
  onContinue: () => void;
}

export default function ProgressVisualization({ onContinue }: ProgressVisualizationProps) {
  return (
    <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden relative border border-[rgba(138,79,255,0.1)] premium-card p-4 sm:p-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
          Your Recovery Journey
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
          Tracking your progress is crucial for motivation and success in recovery
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]"></div>
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Streak Tracking</h3>
          <p className="text-white/70 text-xs sm:text-sm mb-4">
            Build momentum by maintaining and extending your streak days.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {[...Array(31)].map((_, i) => (
              <div 
                key={i}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-xs sm:text-sm font-medium ${
                  i < 7 ? 'bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white' : 'bg-white/10 text-white/50'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          
          <div className="mt-3 sm:mt-4 text-xs text-white/50">
            Current streak: 7 days
          </div>
        </div>
        
        <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]"></div>
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Progress Insights</h3>
          <p className="text-white/70 text-xs sm:text-sm mb-4">
            Visualize your recovery journey and identify patterns.
          </p>
          
          <div className="h-32 sm:h-40 flex items-end gap-1 sm:gap-2">
            {[40, 60, 30, 80, 65, 90, 75, 85, 95, 70, 85, 90].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.7)] rounded-t-sm" 
                  style={{ height: `${height}%` }}
                ></div>
                <div className="text-[10px] text-white/50 mt-1">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-3 sm:mt-4 text-xs text-white/50">
            Monthly urge tracking
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-[rgba(138,79,255,0.1)] to-[rgba(138,43,226,0.05)] p-4 sm:p-6 rounded-xl border border-[rgba(138,79,255,0.2)] mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          What You'll Track
        </h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm sm:text-base">
              <span className="font-medium">Daily Check-ins</span> - Record your daily progress and receive encouragement
            </span>
          </li>
          
          <li className="flex items-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm sm:text-base">
              <span className="font-medium">Urge Intensity</span> - Monitor how strong your urges are and when they occur
            </span>
          </li>
          
          <li className="flex items-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm sm:text-base">
              <span className="font-medium">Triggers</span> - Identify patterns in what causes urges to develop better strategies
            </span>
          </li>
          
          <li className="flex items-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm sm:text-base">
              <span className="font-medium">Mood & Energy</span> - See how your recovery impacts overall wellbeing
            </span>
          </li>
        </ul>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onContinue}
          className="w-full sm:w-auto bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center"
        >
          <span>Continue</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
} 