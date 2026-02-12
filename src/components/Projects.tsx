import React from 'react';
import { ExternalLink, Github, Globe, Database, Heart, TrendingUp, Users, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [{
    id: 1,
    title: 'Pet Adoption Website',
    description: 'A full-stack web application connecting adopters, shelters, and pet owners. Features include pet listings, adoption requests, admin approval system, and PostgreSQL database integration.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Full-Stack', 'React', 'PostgreSQL', 'Node.js'],
    category: 'Web',
    demoUrl: 'https://pets-adoption-b8d9.onrender.com',
    githubUrl: 'https://github.com/navyasreeannem/pets-adoption',
    featured: true
  }, {
    id: 2,
    title: 'Cryptonest - Live Cryptocurrency Tracker',
    description: 'A dynamic crypto dashboard showing real-time price, market cap, trends, and volatility. Built using Power BI and integrates live coin data for Bitcoin, Ethereum, etc.',
    image: 'https://images.unsplash.com/photo-1651054558996-03455fe2702f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Power BI', 'Data Visualization', 'Cryptocurrency', 'Real-time'],
    category: 'Data',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/navyasreeannem/cryptonest',
    featured: true
  }, {
    id: 3,
    title: 'HR Analysis Dashboard',
    description: 'A comprehensive HR analytics platform providing insights into employee performance, recruitment metrics, and workforce trends. Features interactive dashboards, predictive analytics, automated reporting, and real-time data visualization for informed decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Data Analytics', 'Power BI', 'HR Analytics', 'Dashboard'],
    category: 'Data',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/navyasreeannem/hr-analysis-dashboard',
    featured: true
  }, {
    id: 4,
    title: 'AI Interview Questions Builder',
    description: 'An intelligent platform that generates contextual interview questions based on job descriptions and candidate profiles. Uses AI to create personalized question sets, provides scoring analytics, and helps streamline the hiring process with automated question generation.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['AI/ML', 'React', 'Node.js', 'Interview System'],
    category: 'AI',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/navyasreeannem/Interview-Question-Generator',
    featured: true
  }];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web':
        return Globe;
      case 'Data':
        return TrendingUp;
      case 'HR':
        return Users;
      case 'AI':
        return Brain;
      default:
        return Database;
    }
  };

  const ProjectCard = ({
    project
  }: {
    project: typeof projects[0];
  }) => (
    <div className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-glow">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-primary/20 overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-primary/10 group-hover:bg-gradient-primary/5 transition-colors duration-300"></div>
        <div className="absolute top-4 left-4">
          {React.createElement(getCategoryIcon(project.category), {
            className: "w-8 h-8 text-primary"
          })}
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-primary rounded-full text-xs font-medium text-primary-foreground">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 gradient-text group-hover:text-glow transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 btn-dreamy text-center group">
            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View Code
          </a>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-3">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-galaxy/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-violet-300">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in full-stack development, data visualization, AI/ML, and HR analytics
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up" style={{
              animationDelay: `${index * 150}ms`
            }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/navyasreeannem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 text-primary bg-transparent backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:border-primary/60 hover:scale-105"
          >
            View All Projects on GitHub
            <Github className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;