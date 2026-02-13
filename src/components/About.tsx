import React, { useState } from 'react';
import { Code, Brain, Coffee, Music, Camera, Book } from 'lucide-react';
import navyaAvatar from '@/assets/navya-avatar.jpg';
const About = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const funFacts = [{
    icon: Code,
    text: "I started coding at 17 and fell in love with the magic of turning ideas into reality"
  }, {
    icon: Brain,
    text: "I've trained over 5 AI models and each one teaches me something new about intelligence"
  }, {
    icon: Coffee,
    text: "My code runs on coffee and my AI models run on curiosity ☕"
  }, {
    icon: Camera,
    text: "I love capturing moments and training computer vision models to see beauty like humans do"
  }, {
    icon: Book,
    text: "Always learning! Currently diving deep into transformer architectures and neural networks"
  }];
  const nextFact = () => {
    setCurrentFact(prev => (prev + 1) % funFacts.length);
  };
  const prevFact = () => {
    setCurrentFact(prev => (prev - 1 + funFacts.length) % funFacts.length);
  };
  return <section id="about" className="py-20 bg-gradient-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4 text-violet-300 md:text-5xl">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating AI solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avatar Section */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl text-center">
              <div className="relative inline-block mb-6">
                <img src={navyaAvatar} alt="Navya Sree - AI/ML Engineer" className="w-64 h-64 rounded-full mx-auto shadow-glow object-cover" />
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <Brain className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2 text-purple-300">Navya Sree</h3>
              <p className="font-medium mb-4 text-purple-300">AI/ML Engineer</p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm text-red-300">🤖 AI Enthusiast</span>
                <span className="px-3 py-1 bg-accent/20 rounded-full text-sm text-red-300">💜 Dream Coder</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 text-purple-300">My Journey</h4>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Hi there! I'm Navya, an AI/ML Engineer who believes technology should be beautiful, 
                intelligent, and accessible to everyone. My journey began with a simple fascination: 
                how can we teach machines to think, learn, and create?
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, I specialize in developing intelligent systems that solve real-world problems. 
                From computer vision models that can see beauty in art to NLP systems that understand 
                human emotions, I'm passionate about bridging the gap between human creativity and artificial intelligence.
              </p>
            </div>

            {/* Fun Facts Carousel */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 text-purple-300">Fun Facts About Me</h4>
              <div className="relative">
                <div className="flex items-center space-x-4 p-4 bg-gradient-primary/10 rounded-xl">
                  {React.createElement(funFacts[currentFact].icon, {
                  className: "w-8 h-8 text-primary flex-shrink-0"
                })}
                  <p className="text-foreground/80 flex-1">{funFacts[currentFact].text}</p>
                </div>
                
                {/* Navigation */}
                <div className="flex justify-center mt-4 space-x-2">
                  <button onClick={prevFact} className="w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                    ←
                  </button>
                  <div className="flex space-x-1">
                    {funFacts.map((_, index) => <button key={index} onClick={() => setCurrentFact(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentFact ? 'bg-primary w-6' : 'bg-primary/30'}`} />)}
                  </div>
                  <button onClick={nextFact} className="w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;