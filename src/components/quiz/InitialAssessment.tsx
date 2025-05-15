'use client';

import { useState } from 'react';

interface Question {
  id: string;
  title: string;
  options: string[];
}

interface Answer {
  questionId: string;
  answer: string;
}

interface InitialAssessmentProps {
  onSubmit: (answers: Answer[]) => void;
}

export default function InitialAssessment({ onSubmit }: InitialAssessmentProps) {
  const questions: Question[] = [
    {
      id: 'frequency',
      title: 'How often do you use pornography?',
      options: [
        'Multiple times per day',
        'Daily',
        'Several times per week',
        'Weekly',
        'Monthly or less'
      ]
    },
    {
      id: 'resistance',
      title: 'How would you rate your ability to resist urges?',
      options: [
        'I can\'t resist at all',
        'I struggle significantly',
        'I can resist sometimes',
        'I can usually resist',
        'I can almost always resist'
      ]
    },
    {
      id: 'relationships',
      title: 'Has pornography use impacted your relationships?',
      options: [
        'Yes, severely damaged relationships',
        'Yes, caused some conflicts',
        'Some minor impacts',
        'Not really',
        'No impact at all'
      ]
    },
    {
      id: 'productivity',
      title: 'How has pornography affected your productivity?',
      options: [
        'Severe impact on work/school',
        'Moderate impact',
        'Slight impact',
        'Minimal impact',
        'No impact'
      ]
    },
    {
      id: 'goals',
      title: 'What are your goals for recovery?',
      options: [
        'Complete abstinence',
        'Significant reduction',
        'Healthier relationship with sexuality',
        'Better self-control',
        'Improved relationships'
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  
  const handleOptionSelect = (answer: string) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      (a) => a.questionId === questions[currentQuestion].id
    );

    if (existingAnswerIndex !== -1) {
      newAnswers[existingAnswerIndex].answer = answer;
    } else {
      newAnswers.push({
        questionId: questions[currentQuestion].id,
        answer
      });
    }

    setAnswers(newAnswers);

    // Move to next question or submit if on last question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onSubmit(newAnswers);
    }
  };

  return (
    <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden relative border border-[rgba(138,79,255,0.1)] premium-card p-3 sm:p-8">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] h-full"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="ml-2 sm:ml-3 text-xs sm:text-sm text-white/70 whitespace-nowrap">
          {currentQuestion + 1}/{questions.length}
        </div>
      </div>
      
      <div className="text-center mb-5 sm:mb-8">
        <h1 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">
          Initial Assessment
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-xs sm:text-base">
          Let's better understand your relationship with pornography to create a personalized recovery plan.
        </p>
      </div>
      
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-xl font-medium mb-3 sm:mb-4">
          {questions[currentQuestion].title}
        </h2>
        
        <div className="space-y-2 sm:space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = answers.some(
              (a) => a.questionId === questions[currentQuestion].id && a.answer === option
            );
            
            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'border-[#8A4FFF] bg-[rgba(138,79,255,0.1)]'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center">
                  <div 
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex-shrink-0 mr-2 sm:mr-3 flex items-center justify-center ${
                      isSelected ? 'border-[#8A4FFF] bg-[#8A4FFF]' : 'border-white/30'
                    }`}
                  >
                    {isSelected && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs sm:text-base">{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="flex justify-between">
        {currentQuestion > 0 ? (
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-white/70 hover:text-white flex items-center transition-colors text-xs sm:text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous
          </button>
        ) : <div></div>}
        
        {currentQuestion < questions.length - 1 && answers.some(a => a.questionId === questions[currentQuestion].id) && (
          <button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            className="text-white flex items-center bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
} 