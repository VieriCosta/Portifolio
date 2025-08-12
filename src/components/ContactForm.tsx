
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você implementaria o envio do formulário
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'viericostayt@gmail.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (83) 99650-8769'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Pocinhos, PB - Brasil'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {t('contactTitle')}
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
          {t('contactSubtitle')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Informações de Contato */}
        <div className="space-y-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-white">{t('contactInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="text-white/80">
            <h3 className="text-xl font-semibold text-white mb-4">{t('availability')}</h3>
            <p className="mb-2">{t('availabilityText')}</p>
            <p>{t('responseTime')}</p>
          </div>
        </div>

        {/* Formulário de Contato */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">{t('sendMessage')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white/80">{t('name')}</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder={t('namePlaceholder')}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white/80">{t('email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder={t('emailPlaceholder')}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-white/80">{t('subject')}</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  placeholder={t('subjectPlaceholder')}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white/80">{t('message')}</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-32 px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder={t('messagePlaceholder')}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
              >
                <Send size={16} />
                {t('sendButton')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
