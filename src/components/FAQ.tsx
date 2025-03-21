"use client";

import React, { useState } from 'react';

const faqs = [
  {
    question: "How does the streak tracking work?",
    answer: "The streak tracking feature counts the days, hours, minutes, and seconds since your last relapse. You can manually reset it if needed, and the app will save your previous streak data for analytics purposes."
  },
  {
    question: "What is brain rewiring and how does the app track it?",
    answer: "Brain rewiring refers to the neurological recovery process that occurs when you abstain from pornography. The app tracks your progress on a 90-day scale, which is based on scientific research about how long it takes for significant neural pathway changes to occur. The visualization helps you see your progress and stay motivated."
  },
  {
    question: "Is the community anonymous?",
    answer: "Yes, the community is completely anonymous. You can create a username that doesn't identify you personally, and you have control over what information you share. We have strict community guidelines to ensure a supportive and respectful environment."
  },
  {
    question: "How does the AI chatbot work?",
    answer: "The AI chatbot is trained on addiction recovery principles and strategies. It provides personalized support, answers questions, offers coping strategies, and helps you develop a recovery plan. It's available 24/7 whenever you need guidance or support."
  },
  {
    question: "What should I do if I relapse?",
    answer: "If you relapse, don't be too hard on yourself. Use the reset button to restart your streak, and consider using the journaling feature to reflect on what triggered the relapse. The app will help you learn from the experience and strengthen your strategies for next time. Remember, recovery is a journey with ups and downs."
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, we take privacy and security very seriously. All your personal data is encrypted and stored securely. We do not share your information with third parties, and you can delete your data at any time from the settings menu."
  },
  {
    question: "Can I use the app offline?",
    answer: "Yes, many features of the app work offline, including streak tracking, journaling, and emergency tools. However, community features, the AI chatbot, and data synchronization require an internet connection."
  },
  {
    question: "How do I join the Telegram community?",
    answer: "You can join our Telegram community directly from the app by tapping the 'Join Chat' button on the dashboard. This will take you to our moderated Telegram group where you can connect with others on the same journey."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,23,39,0.8)] to-[#0A0A0A] z-0"></div>
      
      {/* Purple gradient accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] rounded-full filter blur-3xl opacity-20 z-0"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about the Power app and recovery journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <div className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-white/70">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 