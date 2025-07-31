import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactMethods = [
    {
      platform: 'Telegram',
      handle: '@w0vz',
      description: 'Быстрый ответ в течение дня',
      icon: 'MessageCircle',
      color: 'blue',
      url: 'https://t.me/w0vz',
      preferred: true
    },
    {
      platform: 'GitHub',
      handle: 'w0vz',
      description: 'Мои проекты и код',
      icon: 'Github',
      color: 'foreground',
      url: 'https://github.com/w0vz',
      preferred: false
    },
    {
      platform: 'Email',
      handle: 'w0vz@example.com',
      description: 'Для деловых вопросов',
      icon: 'Mail',
      color: 'primary',
      url: 'mailto:w0vz@example.com',
      preferred: false
    },
    {
      platform: 'LinkedIn',
      handle: 'w0vz',
      description: 'Профессиональная сеть',
      icon: 'Linkedin',
      color: 'blue',
      url: 'https://linkedin.com/in/w0vz',
      preferred: false
    }
  ];

  const socialStats = {
    githubRepos: 24,
    githubStars: 156,
    telegramSubs: 1200,
    responseTime: '< 24 часа'
  };

  const availabilitySchedule = [
    { day: 'Понедельник - Пятница', hours: '9:00 - 18:00', timezone: 'MSK' },
    { day: 'Выходные', hours: 'По договорённости', timezone: 'MSK' }
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Связаться со мной</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Открыт для обсуждения проектов, сотрудничества и интересных идей в области программирования
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((contact, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                contact.preferred ? 'ring-2 ring-primary/20 bg-primary/5' : 'hover:border-primary/50'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-lg w-fit ${
                    contact.color === 'blue' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' :
                    contact.color === 'foreground' ? 'bg-foreground/10 group-hover:bg-foreground/20' :
                    'bg-primary/10 group-hover:bg-primary/20'
                  } transition-colors`}>
                    <Icon 
                      name={contact.icon} 
                      size={32} 
                      className={
                        contact.color === 'blue' ? 'text-blue-500' :
                        contact.color === 'foreground' ? 'text-foreground' :
                        'text-primary'
                      } 
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    {contact.preferred && (
                      <Badge variant="secondary" className="text-xs">
                        Предпочтительный
                      </Badge>
                    )}
                    <Icon 
                      name="ExternalLink" 
                      size={16} 
                      className="text-muted-foreground group-hover:text-primary transition-colors" 
                    />
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2">{contact.platform}</CardTitle>
                <div className="text-lg font-source-code text-primary mb-2">
                  {contact.handle}
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {contact.description}
                </p>
                
                <Button 
                  className="w-full" 
                  variant={contact.preferred ? "default" : "outline"}
                  onClick={() => window.open(contact.url, '_blank')}
                >
                  <Icon name={contact.icon} size={16} className="mr-2" />
                  Связаться через {contact.platform}
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Social Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} />
                Статистика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {socialStats.githubRepos}
                  </div>
                  <p className="text-sm text-muted-foreground">GitHub репозиториев</p>
                </div>
                
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {socialStats.githubStars}
                  </div>
                  <p className="text-sm text-muted-foreground">GitHub звёзд</p>
                </div>
                
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {socialStats.telegramSubs}+
                  </div>
                  <p className="text-sm text-muted-foreground">Подписчиков</p>
                </div>
                
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-lg font-bold text-primary mb-1">
                    {socialStats.responseTime}
                  </div>
                  <p className="text-sm text-muted-foreground">Время ответа</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                Доступность
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {availabilitySchedule.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <h4 className="font-medium">{schedule.day}</h4>
                    <p className="text-sm text-muted-foreground">{schedule.timezone}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-source-code text-primary">
                      {schedule.hours}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Zap" size={16} className="text-primary" />
                  <span className="font-medium text-primary">Быстрый ответ</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Обычно отвечаю в течение нескольких часов в рабочее время
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="HelpCircle" size={20} />
              Часто задаваемые вопросы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Какие проекты вас интересуют?</h4>
                <p className="text-sm text-muted-foreground">
                  Работаю с веб-разработкой (React, TypeScript, Node.js), мобильными приложениями 
                  и образовательными проектами. Особенно интересны стартапы и open-source проекты.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Предоставляете ли консультации?</h4>
                <p className="text-sm text-muted-foreground">
                  Да, провожу консультации по архитектуре проектов, code review и менторство 
                  для начинающих разработчиков.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Как лучше связаться?</h4>
                <p className="text-sm text-muted-foreground">
                  Для быстрых вопросов — Telegram. Для деловых предложений — email. 
                  Для обсуждения кода — GitHub Issues.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;