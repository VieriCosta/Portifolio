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
