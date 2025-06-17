
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code, Coffee, Heart, Trophy, Users, Target } from 'lucide-react';

const AboutContent = () => {
  const { t } = useLanguage();

  const skills = [
    { icon: Code, name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { icon: Coffee, name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { icon: Target, name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] }
  ];

  const stats = [
    { icon: Trophy, number: '50+', labelKey: 'projectsCompleted' },
    { icon: Users, number: '30+', labelKey: 'happyClients' },
    { icon: Heart, number: '5+', labelKey: 'yearsExperience' },
    { icon: Code, number: '1M+', labelKey: 'linesOfCode' }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {t('aboutTitle')}
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          {t('aboutDescription')}
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <Card 
            key={index}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <CardContent className="p-6">
              <stat.icon size={32} className="mx-auto mb-4 text-blue-200" />
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm">{t(stat.labelKey)}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          {t('skillsTitle')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <skill.icon size={48} className="mx-auto mb-4 text-purple-200" />
                <CardTitle className="text-white">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Personal Story Section */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">
            {t('myStoryTitle')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6 text-white/90 leading-relaxed">
            <p>{t('storyParagraph1')}</p>
            <p>{t('storyParagraph2')}</p>
            <p>{t('storyParagraph3')}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutContent;
