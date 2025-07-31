import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');

  const courses = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Изучите основы React, включая компоненты, состояние и props',
      icon: 'ReactIcon',
      difficulty: 'Начальный',
      duration: '6 часов',
      lessons: 24,
      students: 1250,
      progress: 0,
      category: 'frontend'
    },
    {
      id: 2,
      title: 'TypeScript Deep Dive',
      description: 'Продвинутые концепции TypeScript для современной разработки',
      icon: 'Code2',
      difficulty: 'Продвинутый',
      duration: '12 часов',
      lessons: 36,
      students: 892,
      progress: 0,
      category: 'language'
    },
    {
      id: 3,
      title: 'Node.js Backend',
      description: 'Создание серверных приложений с Node.js и Express',
      icon: 'Server',
      difficulty: 'Средний',
      duration: '8 часов',
      lessons: 28,
      students: 1564,
      progress: 0,
      category: 'backend'
    },
    {
      id: 4,
      title: 'Python для начинающих',
      description: 'Основы программирования на Python с практическими примерами',
      icon: 'Code',
      difficulty: 'Начальный',
      duration: '10 часов',
      lessons: 42,
      students: 2890,
      progress: 0,
      category: 'language'
    },
    {
      id: 5,
      title: 'DevOps и Docker',
      description: 'Контейнеризация приложений и основы DevOps практик',
      icon: 'Package',
      difficulty: 'Продвинутый',
      duration: '15 часов',
      lessons: 45,
      students: 756,
      progress: 0,
      category: 'devops'
    },
    {
      id: 6,
      title: 'CSS Grid & Flexbox',
      description: 'Современная вёрстка с использованием Grid и Flexbox',
      icon: 'Layout',
      difficulty: 'Средний',
      duration: '4 часа',
      lessons: 18,
      students: 1876,
      progress: 0,
      category: 'frontend'
    }
  ];

  const userStats = {
    completedCourses: 12,
    totalHours: 89,
    currentStreak: 15,
    joinDate: '2023-03-15'
  };

  const filteredCourses = courses.filter(course => {
    const difficultyMatch = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    const durationMatch = selectedDuration === 'all' || 
      (selectedDuration === 'short' && parseInt(course.duration) <= 6) ||
      (selectedDuration === 'medium' && parseInt(course.duration) > 6 && parseInt(course.duration) <= 12) ||
      (selectedDuration === 'long' && parseInt(course.duration) > 12);
    
    return difficultyMatch && durationMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Начальный': return 'bg-primary/20 text-primary border-primary/30';
      case 'Средний': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Продвинутый': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-muted/50 rounded-full">
            <Icon name="Code2" size={16} className="text-primary" />
            <span className="text-sm font-source-code text-muted-foreground">PROGRAMMING COURSES</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="text-foreground">Мастерство через</span>
            <br />
            <span className="text-primary font-source-code">&lt;код&gt;</span>
          </h1>
          
          <blockquote className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            "Лучший способ изучить программирование — это программировать"
            <footer className="text-base text-primary mt-2 font-source-code">— Alan Kay</footer>
          </blockquote>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" size={16} />
              <span>{courses.length} курсов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              <span>8K+ студентов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Любой темп</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <h2 className="text-2xl font-semibold">Курсы</h2>
            
            <div className="flex flex-wrap gap-4">
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Уровень сложности" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все уровни</SelectItem>
                  <SelectItem value="Начальный">Начальный</SelectItem>
                  <SelectItem value="Средний">Средний</SelectItem>
                  <SelectItem value="Продвинутый">Продвинутый</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Продолжительность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая длительность</SelectItem>
                  <SelectItem value="short">Короткие (до 6ч)</SelectItem>
                  <SelectItem value="medium">Средние (6-12ч)</SelectItem>
                  <SelectItem value="long">Длинные (12ч+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon name={course.icon} size={24} className="text-primary" />
                    </div>
                    <Icon name="ArrowUpRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className={getDifficultyColor(course.difficulty)}>
                      {course.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="PlayCircle" size={14} />
                      <span>{course.lessons} уроков</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Profile */}
      <section className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <Card className="lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                    W
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">w0vz</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  Разработчик
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  На платформе с {new Date(userStats.joinDate).toLocaleDateString('ru-RU', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </p>
              </CardHeader>
            </Card>

            {/* Stats Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Завершено курсов
                    </CardTitle>
                    <Icon name="Award" size={16} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {userStats.completedCourses}
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Часов обучения
                    </CardTitle>
                    <Icon name="Clock" size={16} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {userStats.totalHours}
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Дней подряд
                    </CardTitle>
                    <Icon name="Flame" size={16} className="text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">
                    {userStats.currentStreak}
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Прогресс месяца
                    </CardTitle>
                    <Icon name="TrendingUp" size={16} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    76%
                  </div>
                  <Progress value={76} className="h-2" />
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Связаться со мной</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer">
              <CardHeader className="text-center">
                <div className="p-4 rounded-lg bg-blue-500/10 w-fit mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Icon name="MessageCircle" size={32} className="text-blue-500" />
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  Telegram
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <p className="text-muted-foreground">@w0vz</p>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer">
              <CardHeader className="text-center">
                <div className="p-4 rounded-lg bg-foreground/10 w-fit mx-auto mb-4 group-hover:bg-foreground/20 transition-colors">
                  <Icon name="Github" size={32} className="text-foreground" />
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  GitHub
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <p className="text-muted-foreground">Мои проекты</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;