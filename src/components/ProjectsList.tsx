
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsList = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-commerce Platform',
      titlePt: 'Plataforma E-commerce',
      description: 'A complete e-commerce solution with React, Node.js and PostgreSQL',
      descriptionPt: 'Uma solução completa de e-commerce com React, Node.js e PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Management App',
      titlePt: 'App de Gerenciamento de Tarefas',
      description: 'Modern task management application with real-time collaboration',
      descriptionPt: 'Aplicativo moderno de gerenciamento de tarefas com colaboração em tempo real',
      tech: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Weather Dashboard',
      titlePt: 'Dashboard do Clima',
      description: 'Interactive weather dashboard with charts and forecasts',
      descriptionPt: 'Dashboard interativo do clima com gráficos e previsões',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Social Media Analytics',
      titlePt: 'Analytics de Redes Sociais',
      description: 'Comprehensive analytics platform for social media metrics',
      descriptionPt: 'Plataforma abrangente de analytics para métricas de redes sociais',
      tech: ['Vue.js', 'Python', 'Django', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {t('projectsTitle')}
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
          {t('projectsSubtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-white">
                {t('language') === 'pt' ? project.titlePt : project.title}
              </CardTitle>
              <CardDescription className="text-white/70">
                {t('language') === 'pt' ? project.descriptionPt : project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-white/20 rounded-full text-sm text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-white/30 text-white hover:bg-white/20"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    {t('viewCode')}
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="bg-white/20 text-white hover:bg-white/30"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    {t('viewDemo')}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
