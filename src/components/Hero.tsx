import Image from 'next/image';

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
              <span className="block text-white">Break Free from</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                Pornography Addiction
              </span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Power (PWR) is a comprehensive mobile application designed to help you overcome addiction through streak tracking, community support, and personalized tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#download" 
                className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all text-center"
              >
                Download Now
              </a>
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