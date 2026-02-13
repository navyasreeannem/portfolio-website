import React, { useState } from 'react';
import { Brain, Code, Database, Globe, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('AI');
  const skillCategories = {
    AI: {
      icon: Brain,
      color: 'primary',
      skills: [{
        name: 'Machine Learning',
        frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn']
      }, {
        name: 'Deep Learning',
        frameworks: ['Keras', 'PyTorch Lightning']
      }, {
        name: 'Computer Vision',
        frameworks: ['OpenCV', 'YOLO', 'ResNet']
      }, {
        name: 'Natural Language Processing',
        frameworks: ['Transformers', 'spaCy', 'NLTK']
      }, {
        name: 'MLOps',
        frameworks: ['MLflow', 'Kubeflow', 'Docker']
      }]
    },
    ML: {
      icon: TrendingUp,
      color: 'accent',
      skills: [{
        name: 'Data Analysis',
        frameworks: ['Pandas', 'NumPy', 'Matplotlib']
      }, {
        name: 'Statistical Modeling',
        frameworks: ['SciPy', 'Statsmodels']
      }, {
        name: 'Feature Engineering',
        frameworks: ['Feature-engine', 'Category Encoders']
      }, {
        name: 'Model Deployment',
        frameworks: ['FastAPI', 'Flask', 'Streamlit']
      }, ]
    },
    Data: {
      icon: Database,
      color: 'secondary',
      skills: [{
        name: 'Data Engineering',
        frameworks: ['Apache Spark', 'Airflow']
      }, {
        name: 'Database Management',
        frameworks: ['PostgreSQL', 'MongoDB']
      }, {
        name: 'Big Data',
        frameworks: ['Hadoop', 'Kafka', 'Elasticsearch']
      }, {
        name: 'Data Visualization',
        frameworks: ['Plotly', 'D3.js', 'Tableau']
      }, {
        name: 'ETL Pipelines',
        frameworks: ['Apache Beam', 'Prefect']
      }]
    },
    Web: {
      icon: Globe,
      color: 'muted',
      skills: [{
        name: 'Frontend Development',
        frameworks: ['React', 'TypeScript', 'Tailwind']
      }, {
        name: 'Backend Development',
        frameworks: ['FastAPI', 'Django', 'Node.js']
      }, {
        name: 'Cloud Platforms',
        frameworks: ['AWS', 'Google Cloud', 'Azure']
      }, {
        name: 'DevOps',
        frameworks: ['Docker', 'Kubernetes', 'CI/CD']
      }, ]
    }
  };

  const SkillItem = ({
    skill
  }: {
    skill: any;
  }) => (
    <div className="mb-6 group">
      <div className="mb-3">
        <span className="font-medium text-foreground text-lg">{skill.name}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.frameworks.map((framework: string) => (
          <span key={framework} className="text-sm px-3 py-1 bg-primary/10 rounded-full text-primary">
            {framework}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-violet-300">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized in cutting-edge technologies that power the future
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([category, data]) => {
              const IconComponent = data.icon;
              return (
                <button 
                  key={category} 
                  onClick={() => setSelectedCategory(category)} 
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-gradient-primary text-primary-foreground shadow-glow' : 'glass-card hover:bg-primary/10'}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category === 'Web' ? 'Web Dev' : category}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Display */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills List */}
            <div className="glass-card p-8 rounded-2xl bg-card/50">
              <div className="flex items-center space-x-3 mb-6 bg-muted/50 p-4 rounded-xl">
                {React.createElement(skillCategories[selectedCategory as keyof typeof skillCategories].icon, {
                  className: "w-8 h-8 text-primary"
                })}
                <h3 className="text-2xl font-bold gradient-text">
                  {selectedCategory === 'Web' ? 'Web Development' : selectedCategory}
                </h3>
              </div>
              
              <div className="space-y-1">
                {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div key={skill.name} className="animate-fade-in-up" style={{
                    animationDelay: `${index * 100}ms`
                  }}>
                    <SkillItem skill={skill} />
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Skill Badges */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl bg-card/50">
                <h4 className="text-xl font-semibold mb-6 gradient-text">Technical Highlights</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-lg font-semibold gradient-text">Python</div>
                    <div className="text-sm text-muted-foreground">Primary Language</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-xl">
                    <Brain className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-lg font-semibold gradient-text">TensorFlow</div>
                    <div className="text-sm text-muted-foreground">ML Framework</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-lg font-semibold gradient-text">PostgreSQL</div>
                    <div className="text-sm text-muted-foreground">Database</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-xl">
                    <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-lg font-semibold gradient-text">AWS</div>
                    <div className="text-sm text-muted-foreground">Cloud Platform</div>
                  </div>
                </div>
              </div>

              {/* Learning Goals */}
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-lg font-semibold mb-4 text-primary">Currently Learning</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-foreground/80">Large Language Models (LLMs)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-foreground/80">Generative AI Applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-foreground/80">Edge AI Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;