import React from 'react';
import Image from 'next/image';

export default function Download() {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[rgba(14,23,39,0.8)] z-0"></div>
      
      {/* Purple gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[rgba(142,45,226,0.8)] to-[rgba(74,0,224,0.6)] rounded-full filter blur-3xl opacity-20 z-0"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Download <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">Power</span> Today
              </h2>
              
              <p className="text-white/70 mb-6">
                Take the first step towards freedom and reclaim control of your life. Our comprehensive app provides all the tools you need for a successful recovery journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#app-store" 
                  className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="#google-play" 
                  className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM16.5 12L8.5 19V5l8 7z" />
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] flex items-center justify-center text-white text-sm font-bold border-2 border-black">M</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] flex items-center justify-center text-white text-sm font-bold border-2 border-black">D</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] flex items-center justify-center text-white text-sm font-bold border-2 border-black">J</div>
                </div>
                <div className="text-white/70 text-sm">
                  Join <span className="text-white font-medium">10,000+</span> users on their journey to freedom
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 relative">
              <div className="relative z-10">
                <div className="rounded-[24px] overflow-hidden">
                  <Image 
                    src="/app-screenshot.svg" 
                    alt="PWR App" 
                    width={300} 
                    height={600}
                    className="w-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#8A4FFF] to-[#8E2DE2] rounded-full filter blur-xl opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 