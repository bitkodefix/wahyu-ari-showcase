import { Code, Coffee, Heart, Lightbulb } from 'lucide-react';
import profileImage from '@/assets/wahyu-profile.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that follows best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Turning complex problems into simple, elegant solutions.'
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Creating experiences that users love and remember.'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and trends.'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="glass-card p-8 text-center">
                <div className="relative inline-block">
                  <img
                    src={profileImage}
                    alt="Wahyu Ari"
                    className="w-64 h-64 rounded-2xl object-cover mx-auto shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent backdrop-blur-[0.2px]" style={{ filter: 'contrast(1.3) saturate(1.4) brightness(1.1) hue-rotate(10deg)' }} />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    Frontend Developer
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Based in Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8 animate-slide-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a passionate Frontend Developer with a keen eye for design and a love for creating 
                  beautiful, functional web applications. My journey in web development started with 
                  curiosity and has evolved into a profession I'm truly passionate about.
                </p>
                <p>
                  I specialize in React, TypeScript, and modern web technologies, always striving to 
                  write clean, maintainable code while delivering exceptional user experiences. 
                  I believe in the power of good design and its ability to solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:animate-glow">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;