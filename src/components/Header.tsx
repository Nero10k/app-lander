import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0A0A0A]/90 to-[rgba(2,9,23,0.9)]/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            POWER
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#benefits" className="text-white/80 hover:text-white transition-colors">
            Benefits
          </Link>
          <Link href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Testimonials
          </Link>
          <Link href="/quiz" className="text-white/80 hover:text-white transition-colors relative group">
            Assessment
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full group-hover:animate-pulse"></span>
          </Link>
          <Link href="#faq" className="text-white/80 hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div>
          <a 
            href="https://apps.apple.com/nl/app/power-quit-porn-now/id6743706444"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
} 