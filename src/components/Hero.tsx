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
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-5">
              <div className="flex -space-x-2">
                {['#8A4FFF', '#6D28D9', '#7C3AED', '#5B21B6', '#4C1D95'].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {['M', 'J', 'A', 'R', 'T'][i]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-white/80 font-medium">Trusted by <span className="text-white font-bold">250,000+</span> men</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.05]">
              <span className="block text-white">Quit Porn For Life</span>
              <span className="block">
                With{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                  POWER
                </span>
              </span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-md mx-auto lg:mx-0">
              Meet POWER, the #1 app for quitting porn with all the tools needed to make the process easy.
            </p>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {/* App Store */}
              <a
                href="https://apps.apple.com/us/app/power-quit-porn-now/id6743706444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black border border-white/20 text-white px-5 py-3 rounded-xl font-medium hover:border-white/40 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-white/60">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <span className="inline-flex items-center gap-3 bg-black border border-white/20 text-white px-5 py-3 rounded-xl font-medium opacity-50 cursor-not-allowed select-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.35.2.74.24 1.12.14l11.9-6.86-2.56-2.56-10.46 9.28zM.5 1.9C.19 2.3 0 2.88 0 3.62v16.76c0 .74.19 1.32.51 1.72l.09.08 9.39-9.39v-.22L.59 3.18.5 1.9zM20.1 10.5l-2.68-1.54-2.85 2.85 2.85 2.85 2.7-1.55c.77-.44.77-1.16-.02-1.61zM4.3.1L16.2 6.96l-2.56 2.56L3.18.24C3.56.14 3.95.2 4.3.1z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-white/60">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </span>
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