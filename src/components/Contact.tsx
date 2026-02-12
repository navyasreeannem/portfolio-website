import { useState } from 'react';
import { Mail, MessageCircle, Heart, Star, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import aiRobotMascot from '@/assets/ai-robot-mascot.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'navyasreeannem33@gmail.com'
      };

                    // Send email using EmailJS
        const result = await emailjs.send(
          'service_j3a65tv', // Your EmailJS Service ID
          'template_qnb9lwg', // Your EmailJS Template ID
          templateParams,
          'WvRFCedCdJcTKwM4Q' // Your EmailJS Public Key
        );

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 8 seconds
        setTimeout(() => setSubmitted(false), 8000);
      }
    } catch (err) {
      console.error('Email sending failed:', err);
      setError('Failed to send message. Please try again or contact me directly at navyasreeannem33@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:navyasreeannem33@gmail.com',
      color: 'hover:text-primary',
      label: 'navyasreeannem33@gmail.com'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/navyasreeannem',
      color: 'hover:text-primary',
      label: '@navyasreeannem'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/navya-sree-annem-32a782321/',
      color: 'hover:text-accent',
      label: 'Navya Sree Annem'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-galaxy/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat about AI? I'd love to hear from you! ✨
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold gradient-text">Send me a message</h3>
            </div>

            {submitted ? (
                              <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Message Sent Successfully! ✨</h4>
                  <p className="text-muted-foreground mb-4">Your message has been delivered to my inbox. I'll get back to you within 24 hours! 💜</p>
                  <p className="text-sm text-primary/70">Check your email for a confirmation copy.</p>
                </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-input/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 backdrop-blur-sm"
                    />
                    <Star className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-input/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 backdrop-blur-sm"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-input/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 backdrop-blur-sm"
                  />
                  <Heart className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-input/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 backdrop-blur-sm resize-none"
                  ></textarea>
                  <MessageCircle className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                </div>

                {error && (
                  <div className="text-center py-4 bg-red-100 border border-red-200 text-red-800 rounded-lg" role="alert">
                    <AlertCircle className="w-6 h-6 inline-block mr-2" />
                    <span className="font-medium">{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-dreamy group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </button>
                <a
  href="/navya_sree_annem_resume.pdf"
  download
  className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-center"
>
  📄 Download Resume
</a>

              </form>
            )}
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* AI Mascot & Info */}
            <div className="glass-card p-8 rounded-3xl text-center">
              <img 
                src={aiRobotMascot} 
                alt="AI Mascot" 
                className="w-32 h-32 mx-auto mb-6 rounded-full shadow-glow"
              />
              <h4 className="text-xl font-semibold gradient-text mb-4">Let's build something amazing together!</h4>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project idea, want to collaborate on AI research, 
                or just want to discuss the latest in machine learning, I'm always excited 
                to connect with fellow tech enthusiasts and innovators.
              </p>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-xl font-semibold gradient-text mb-6">Find me on</h4>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-xl bg-gradient-primary/5 hover:bg-gradient-primary/10 transition-all duration-300 group ${link.color}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-sm text-muted-foreground">{link.label}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Time */}
            <div className="glass-card p-6 rounded-2xl bg-gradient-primary/10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Usually responds within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;