import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolioImage from '@/assets/project-portfolio.jpg';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import dashboardImage from '@/assets/project-dashboard.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features elegant animations, glassmorphism design, and optimized performance.',
      image: portfolioImage,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce application with product catalog, shopping cart, user authentication, and payment integration. Built with Next.js and Stripe.',
      image: ecommerceImage,
      technologies: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management Dashboard',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: dashboardImage,
      technologies: ['React', 'TypeScript', 'Supabase', 'React Query', 'DnD Kit'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border/50 hover:border-primary/50"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-border/50 hover:border-primary/50 hover:bg-primary/5"
          >
            View All Projects on GitHub
            <Github size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;