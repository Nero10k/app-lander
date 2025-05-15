'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import WelcomeScreen from './WelcomeScreen';
import BehavioralScienceIntro from './BehavioralScienceIntro';
import InitialAssessment from './InitialAssessment';
import CommitmentContract from './CommitmentContract';
import ProgressVisualization from './ProgressVisualization';
import PersonalInfo from './PersonalInfo';
import EducationalScreen from './EducationalScreen';
import ActionPlan from './ActionPlan';

type QuizStep = 
  | 'welcome'
  | 'science-intro'
  | 'assessment'
  | 'personal-info'
  | 'commitment'
  | 'progress'
  | 'educational'
  | 'action-plan';

interface Answer {
  questionId: string;
  answer: string;
}

export default function QuizContainer() {
  const [currentStep, setCurrentStep] = useState<QuizStep>('welcome');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Step 1: Welcome Screen
  const handleWelcomeContinue = () => {
    setCurrentStep('science-intro');
  };
  
  // Step 2: Behavioral Science Intro
  const handleScienceIntroContinue = () => {
    setCurrentStep('assessment');
  };
  
  // Step 3: Initial Assessment
  const handleAnswerSubmit = async (submittedAnswers: Answer[]) => {
    setAnswers(submittedAnswers);
    setCurrentStep('personal-info');
  };
  
  // Step 4: Personal Info
  const handlePersonalInfoSubmit = async (name: string, userEmail: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Save user to Supabase
      const { data, error: userError } = await supabase
        .from('quiz_users')
        .insert([
          { name, email: userEmail }
        ])
        .select();
      
      if (userError) throw userError;
      
      // Set the user info in state
      setUserName(name);
      setEmail(userEmail);
      
      // Store the user ID for later use
      if (data && data.length > 0) {
        setUserId(data[0].id);
      }
      
      setCurrentStep('commitment');
    } catch (err) {
      console.error('Error saving user data:', err);
      setError('There was an error saving your information. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Step 5: Commitment Contract
  const handleCommitmentSubmit = () => {
    setCurrentStep('progress');
  };
  
  // Step 6: Progress Visualization
  const handleProgressContinue = () => {
    setCurrentStep('educational');
  };
  
  // Step 7: Educational Screen
  const handleEducationContinue = () => {
    setCurrentStep('action-plan');
  };
  
  // Step 8: Action Plan
  const handleFinish = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Only save answers if we have a userId
      if (userId && answers.length > 0) {
        // Save all answers to Supabase
        const { error: answersError } = await supabase
          .from('quiz_answers')
          .insert(
            answers.map(answer => ({
              user_id: userId,
              question_id: answer.questionId,
              answer: answer.answer
            }))
          );
        
        if (answersError) throw answersError;
      }
      
      // This would typically redirect to app download or registration
      console.log('Quiz completed with:', { answers, userName, email });
      // You could redirect here or show a final screen
    } catch (err) {
      console.error('Error saving quiz answers:', err);
      setError('There was an error saving your quiz results. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Progress indicator helper
  const getProgressPercent = () => {
    const steps: QuizStep[] = [
      'welcome',
      'science-intro',
      'assessment',
      'personal-info',
      'commitment',
      'progress',
      'educational',
      'action-plan'
    ];
    
    const currentIndex = steps.indexOf(currentStep);
    return ((currentIndex + 1) / steps.length) * 100;
  };
  
  // Render the appropriate component based on the current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeScreen onContinue={handleWelcomeContinue} />;
      case 'science-intro':
        return <BehavioralScienceIntro onContinue={handleScienceIntroContinue} />;
      case 'assessment':
        return <InitialAssessment onSubmit={handleAnswerSubmit} />;
      case 'personal-info':
        return <PersonalInfo onSubmit={handlePersonalInfoSubmit} />;
      case 'commitment':
        return <CommitmentContract userName={userName} onSubmit={handleCommitmentSubmit} />;
      case 'progress':
        return <ProgressVisualization onContinue={handleProgressContinue} />;
      case 'educational':
        return <EducationalScreen onContinue={handleEducationContinue} />;
      case 'action-plan':
        return <ActionPlan userName={userName} answers={answers} onFinish={handleFinish} />;
      default:
        return <WelcomeScreen onContinue={handleWelcomeContinue} />;
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-12 px-3 sm:px-6">
      {currentStep !== 'welcome' && currentStep !== 'science-intro' && (
        <div className="mb-4 sm:mb-10 flex items-center justify-between">
          <div className="w-full max-w-md bg-white/10 h-1.5 sm:h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] h-full transition-all duration-500 ease-out"
              style={{ width: `${getProgressPercent()}%` }}
            ></div>
          </div>
          <div className="ml-3 text-xs sm:text-sm text-white/70">
            Step {Math.round(getProgressPercent() / (100 / 8))}/8
          </div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-200 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 text-xs sm:text-sm">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-[#8A4FFF]"></div>
        </div>
      ) : (
        renderCurrentStep()
      )}
    </div>
  );
} 