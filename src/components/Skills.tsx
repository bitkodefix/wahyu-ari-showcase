const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Framer Motion', 'React Query']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Figma', 'Webpack', 'Vite', 'npm/yarn', 'VS Code']
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'Express', 'Firebase', 'Supabase', 'PostgreSQL', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technologies I use to bring ideas to life. 
            From frontend magic to backend functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-8 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '20+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-8 animate-scale-in"
              style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;