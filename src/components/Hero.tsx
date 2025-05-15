import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[rgba(14,23,39,0.8)] z-0"></div>
      
      {/* Purple gradient accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[rgba(142,45,226,0.8)] to-[rgba(74,0,224,0.6)] rounded-full filter blur-3xl opacity-20 z-0"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white">Rewire Your Brain &</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                Break Free From Porn
              </span>
            </h1>
            
            <p className="text-lg text-white/80 mb-6 max-w-xl mx-auto lg:mx-0">
              Neuroscience-backed recovery tools that actually work, designed by addiction specialists with a 94% success rate.
            </p>
            
            {/* Benefits list */}
            <div className="mb-6 text-left">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] flex-shrink-0 mr-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">Proprietary Brain Rewiring Technology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] flex-shrink-0 mr-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">Personalized 90-Day Recovery Plan</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] flex-shrink-0 mr-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">Advanced Urge Management Tools</span>
                </li>
              </ul>
            </div>

            <div className="text-sm text-white/60 mb-6 italic">
              "Developed with addiction neuroscientists from leading research institutions"
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
              <a 
                href="https://apps.apple.com/nl/app/power-quit-porn-now/id6743706444"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all text-center"
              >
                Download Now
              </a>
              <Link 
                href="/quiz" 
                className="bg-white/5 text-white border border-[#8A4FFF]/40 px-8 py-3 rounded-full font-medium hover:bg-white/10 hover:border-[#8A4FFF]/60 transition-all text-center flex items-center"
              >
                <span>Take Assessment</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <a 
                href="#learn-more" 
                className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/15 transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* App screenshot without phone frame */}
              <Image 
                src="/app-screenshot.svg" 
                alt="PWR App Dashboard" 
                width={300} 
                height={600}
                className="w-full"
                priority
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#8A4FFF] to-[#8E2DE2] rounded-full filter blur-xl opacity-30 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#8E2DE2] to-[#8A4FFF] rounded-full filter blur-xl opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 