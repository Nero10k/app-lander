'use client';

interface Answer {
  questionId: string;
  answer: string;
}

interface ActionPlanProps {
  userName: string;
  answers: Answer[];
  onFinish: () => void;
}

export default function ActionPlan({ userName, answers, onFinish }: ActionPlanProps) {
  // Calculate recommended focus areas based on answers
  const getRecommendation = (): string[] => {
    const recommendedAreas: string[] = [];
    
    // Get frequency answer
    const frequencyAnswer = answers.find(a => a.questionId === 'frequency')?.answer;
    if (frequencyAnswer === 'Multiple times per day' || frequencyAnswer === 'Daily') {
      recommendedAreas.push('Establish a daily check-in routine within the app');
      recommendedAreas.push('Use emergency urge management tools');
    }
    
    // Get resistance answer
    const resistanceAnswer = answers.find(a => a.questionId === 'resistance')?.answer;
    if (resistanceAnswer === 'I can\'t resist at all' || resistanceAnswer === 'I struggle significantly') {
      recommendedAreas.push('Practice urge surfing techniques');
      recommendedAreas.push('Set up device restrictions during vulnerable times');
    }
    
    // Get relationships answer
    const relationshipsAnswer = answers.find(a => a.questionId === 'relationships')?.answer;
    if (relationshipsAnswer === 'Yes, severely damaged relationships' || relationshipsAnswer === 'Yes, caused some conflicts') {
      recommendedAreas.push('Join a recovery community for support');
      recommendedAreas.push('Consider relationship counseling resources');
    }
    
    // Get productivity answer
    const productivityAnswer = answers.find(a => a.questionId === 'productivity')?.answer;
    if (productivityAnswer === 'Severe impact on work/school' || productivityAnswer === 'Moderate impact') {
      recommendedAreas.push('Use the focus timer to build productive habits');
      recommendedAreas.push('Schedule specific recovery activities');
    }
    
    // Ensure we have at least 3 recommendations
    if (recommendedAreas.length < 3) {
      recommendedAreas.push('Track your streaks to build momentum');
      recommendedAreas.push('Set daily goals for your recovery journey');
      recommendedAreas.push('Explore educational content about addiction recovery');
    }
    
    // Return up to 5 recommendations
    return recommendedAreas.slice(0, 5);
  };
  
  const recommendations = getRecommendation();
  
  return (
    <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden relative border border-[rgba(138,79,255,0.1)] premium-card p-3 sm:p-8">
      <div className="text-center mb-5 sm:mb-10">
        <h1 className="text-xl sm:text-4xl font-bold mb-1.5 sm:mb-3">
          Your Personalized Recovery Plan
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-xs sm:text-base">
          {userName ? `${userName}, based` : 'Based'} on your responses, we've created a tailored plan to help you overcome pornography addiction.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-[rgba(138,79,255,0.1)] to-[rgba(138,43,226,0.05)] p-3 sm:p-6 rounded-xl border border-[rgba(138,79,255,0.2)] mb-5 sm:mb-10">
        <h2 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
          Your Recommended Focus Areas
        </h2>
        
        <ul className="space-y-2 sm:space-y-4">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-base">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 mb-5 sm:mb-10">
        <div className="bg-white/5 p-3 sm:p-6 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-1 sm:mb-3 flex items-center text-xs sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-[#8A4FFF]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Daily Check-ins
          </h3>
          <p className="text-white/70 text-xs sm:text-sm">
            Regular check-ins help maintain accountability and track your progress. Set reminders at times when you typically experience urges.
          </p>
        </div>
        
        <div className="bg-white/5 p-3 sm:p-6 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-1 sm:mb-3 flex items-center text-xs sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-[#8A4FFF]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            Progress Tracking
          </h3>
          <p className="text-white/70 text-xs sm:text-sm">
            Visualize your streak and recovery milestones. Seeing your progress helps reinforce your commitment and highlights your achievements.
          </p>
        </div>
        
        <div className="bg-white/5 p-3 sm:p-6 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-1 sm:mb-3 flex items-center text-xs sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-[#8A4FFF]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Community Support
          </h3>
          <p className="text-white/70 text-xs sm:text-sm">
            Connect with others on similar journeys. Share experiences, celebrate victories, and find encouragement during challenging times.
          </p>
        </div>
        
        <div className="bg-white/5 p-3 sm:p-6 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-1 sm:mb-3 flex items-center text-xs sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-[#8A4FFF]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Personalized Tools
          </h3>
          <p className="text-white/70 text-xs sm:text-sm">
            Access specialized features based on your needs, including emergency buttons, journal prompts, and guided meditations for urge management.
          </p>
        </div>
      </div>
      
      <div className="text-center mb-4 sm:mb-10">
        <div className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-white/5 rounded-full text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">
          Get the PWR App to Start Your Journey
        </div>
        <h3 className="text-sm sm:text-xl font-semibold">
          Download now to access your personalized plan
        </h3>
      </div>
      
      <div className="flex justify-center">
        <a
          href="https://apps.apple.com/nl/app/power-quit-porn-now/id6743706444"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto btn-primary bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-4 sm:px-10 py-2.5 sm:py-4 rounded-full text-xs sm:text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center"
          onClick={(e) => {
            // Still call onFinish to track completion
            onFinish();
          }}
        >
          <span>Download PWR App</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
} 