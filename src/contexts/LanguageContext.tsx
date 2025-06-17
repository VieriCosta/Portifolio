
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  greeting: {
    pt: "Olá, eu sou",
    en: "Hello, I'm"
  },
  role: {
    pt: "Desenvolvedor Full Stack",
    en: "Full Stack Developer"
  },
  description: {
    pt: "Transformo ideias em experiências digitais incríveis. Especialista em criar soluções web modernas e eficientes.",
    en: "I transform ideas into amazing digital experiences. Expert in creating modern and efficient web solutions."
  },
  contact: {
    pt: "Entrar em Contato",
    en: "Get in Touch"
  },
  projects: {
    pt: "Ver Projetos",
    en: "View Projects"
  },
  home: {
    pt: "Início",
    en: "Home"
  },
  about: {
    pt: "Sobre mim",
    en: "About me"
  },
  projectsTitle: {
    pt: "Meus Projetos",
    en: "My Projects"
  },
  projectsSubtitle: {
    pt: "Aqui estão alguns dos projetos que desenvolvi, mostrando minhas habilidades em diferentes tecnologias.",
    en: "Here are some of the projects I've developed, showcasing my skills in different technologies."
  },
  viewCode: {
    pt: "Ver Código",
    en: "View Code"
  },
  viewDemo: {
    pt: "Ver Demo",
    en: "View Demo"
  },
  contactTitle: {
    pt: "Entre em Contato",
    en: "Get in Touch"
  },
  contactSubtitle: {
    pt: "Vamos conversar sobre seu próximo projeto! Estou sempre aberto a novas oportunidades e colaborações.",
    en: "Let's talk about your next project! I'm always open to new opportunities and collaborations."
  },
  contactInfo: {
    pt: "Informações de Contato",
    en: "Contact Information"
  },
  availability: {
    pt: "Disponibilidade",
    en: "Availability"
  },
  availabilityText: {
    pt: "Disponível para novos projetos freelance e oportunidades de trabalho remoto.",
    en: "Available for new freelance projects and remote work opportunities."
  },
  responseTime: {
    pt: "Tempo de resposta: 24-48 horas",
    en: "Response time: 24-48 hours"
  },
  sendMessage: {
    pt: "Enviar Mensagem",
    en: "Send Message"
  },
  name: {
    pt: "Nome",
    en: "Name"
  },
  namePlaceholder: {
    pt: "Seu nome completo",
    en: "Your full name"
  },
  email: {
    pt: "E-mail",
    en: "Email"
  },
  emailPlaceholder: {
    pt: "seu.email@exemplo.com",
    en: "your.email@example.com"
  },
  subject: {
    pt: "Assunto",
    en: "Subject"
  },
  subjectPlaceholder: {
    pt: "Assunto da mensagem",
    en: "Message subject"
  },
  message: {
    pt: "Mensagem",
    en: "Message"
  },
  messagePlaceholder: {
    pt: "Descreva seu projeto ou dúvida...",
    en: "Describe your project or question..."
  },
  sendButton: {
    pt: "Enviar Mensagem",
    en: "Send Message"
  },
  aboutTitle: {
    pt: "Sobre Mim",
    en: "About Me"
  },
  aboutDescription: {
    pt: "Sou um desenvolvedor apaixonado por tecnologia e inovação. Com anos de experiência criando soluções digitais que fazem a diferença, transformo ideias complexas em interfaces simples e funcionais.",
    en: "I'm a developer passionate about technology and innovation. With years of experience creating digital solutions that make a difference, I transform complex ideas into simple and functional interfaces."
  },
  projectsCompleted: {
    pt: "Projetos Concluídos",
    en: "Projects Completed"
  },
  happyClients: {
    pt: "Clientes Satisfeitos",
    en: "Happy Clients"
  },
  yearsExperience: {
    pt: "Anos de Experiência",
    en: "Years Experience"
  },
  linesOfCode: {
    pt: "Linhas de Código",
    en: "Lines of Code"
  },
  skillsTitle: {
    pt: "Minhas Habilidades",
    en: "My Skills"
  },
  myStoryTitle: {
    pt: "Minha História",
    en: "My Story"
  },
  storyParagraph1: {
    pt: "Minha jornada na programação começou há mais de 5 anos, quando descobri a magia de transformar linhas de código em soluções reais. Desde então, tenho me dedicado a aprender constantemente e a aplicar as melhores práticas do mercado.",
    en: "My programming journey began over 5 years ago, when I discovered the magic of transforming lines of code into real solutions. Since then, I have been constantly learning and applying the best practices in the market."
  },
  storyParagraph2: {
    pt: "Especializo-me em desenvolvimento full-stack, com foco especial em tecnologias modernas como React, Node.js e bancos de dados relacionais. Acredito que a tecnologia deve ser acessível e que boas interfaces fazem toda a diferença na experiência do usuário.",
    en: "I specialize in full-stack development, with a special focus on modern technologies like React, Node.js and relational databases. I believe that technology should be accessible and that good interfaces make all the difference in user experience."
  },
  storyParagraph3: {
    pt: "Quando não estou programando, gosto de estudar novas tecnologias, contribuir para projetos open source e compartilhar conhecimento com a comunidade de desenvolvedores. Estou sempre em busca de novos desafios que me permitam crescer profissionalmente.",
    en: "When I'm not programming, I like to study new technologies, contribute to open source projects and share knowledge with the developer community. I'm always looking for new challenges that allow me to grow professionally."
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
