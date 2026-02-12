import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Heart, Star } from 'lucide-react';
import galaxyHero from '@/assets/galaxy-hero.jpg';
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi! I'm Navya Sree";
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 galaxy-bg" style={{
      backgroundImage: `url(${galaxyHero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }} />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 text-primary w-6 h-6 float opacity-70" />
        <Heart className="absolute top-40 right-32 text-accent w-8 h-8 float-delayed opacity-60" />
        <Star className="absolute bottom-40 left-32 text-secondary w-5 h-5 float opacity-80" />
        <Sparkles className="absolute bottom-32 right-20 text-primary w-4 h-4 float-delayed opacity-75" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 max-w-4xl mx-auto">
          {/* Chatbot Welcome Bubble */}
          <div className="glass-card p-6 rounded-3xl mb-8 max-w-md mx-auto animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-primary animate-pulse-glow"></div>
              <span className="text-sm font-medium text-muted-foreground">AI Assistant</span>
            </div>
            <p className="text-lg">Welcome to my digital space! I'm excited to share my journey in AI/ML engineering with you. </p>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">
              <span className="gradient-text text-indigo-400 text-6xl">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-6">
              AI/ML Engineer & Creative Problem Solver
            </p>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-zinc-700">
              Crafting intelligent solutions with a touch of creativity. 
              I blend cutting-edge AI technology with beautiful, user-centered design 
              to create meaningful digital experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })} className="btn-dreamy group">
              Explore My Work
              <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="btn-ghost bg-zinc-300 hover:bg-zinc-200 text-slate-950">
              Let's Connect
            </button>
          </div>

          {/* Scroll Indicator */}
          <button onClick={scrollToNext} className="animate-bounce text-primary hover:text-accent transition-colors duration-300">
            <ChevronDown className="w-8 h-8 mx-auto" />
            <span className="text-sm font-medium">Scroll to explore</span>
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;