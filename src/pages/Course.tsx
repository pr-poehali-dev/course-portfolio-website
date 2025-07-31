import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Course = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(1);

  // Mock course data - в реальном приложении это было бы получено из API
  const courseData = {
    1: {
      title: 'React Fundamentals',
      description: 'Изучите основы React, включая компоненты, состояние и props. Этот курс охватывает все необходимые концепции для начала работы с React.',
      icon: 'ReactIcon',
      difficulty: 'Начальный',
      duration: '6 часов',
      lessons: 24,
      students: 1250,
      rating: 4.8,
      reviews: 156,
      price: 'Бесплатно',
      instructor: {
        name: 'w0vz',
        avatar: '/placeholder-avatar.jpg',
        role: 'Разработчик',
        courses: 12
      },
      skills: ['React', 'JSX', 'Components', 'Props', 'State', 'Hooks'],
      requirements: ['Базовые знания HTML', 'Базовые знания CSS', 'Базовые знания JavaScript'],
      whatYouLearn: [
        'Создавать React компоненты',
        'Работать с props и state',
        'Использовать React Hooks',
        'Обрабатывать события',
        'Создавать интерактивные интерфейсы',
        'Разрабатывать современные веб-приложения'
      ]
    },
    2: {
      title: 'TypeScript Deep Dive',
      description: 'Продвинутые концепции TypeScript для современной разработки',
      icon: 'Code2',
      difficulty: 'Продвинутый',
      duration: '12 часов',
      lessons: 36,
      students: 892,
      rating: 4.9,
      reviews: 98,
      price: 'Бесплатно',
      instructor: {
        name: 'w0vz',
        avatar: '/placeholder-avatar.jpg',
        role: 'Разработчик',
        courses: 12
      },
      skills: ['TypeScript', 'Types', 'Interfaces', 'Generics', 'Decorators'],
      requirements: ['Хорошее знание JavaScript', 'Опыт с Node.js', 'Понимание ООП'],
      whatYouLearn: [
        'Продвинутые типы TypeScript',
        'Generics и условные типы',
        'Декораторы и метаданные',
        'Настройка TypeScript проектов',
        'Интеграция с популярными фреймворками'
      ]
    }
  };

  const course = courseData[parseInt(id || '1') as keyof typeof courseData] || courseData[1];

  const lessons = [
    { id: 1, title: 'Введение в React', duration: '15 мин', completed: true, type: 'video' },
    { id: 2, title: 'Создание первого компонента', duration: '20 мин', completed: true, type: 'video' },
    { id: 3, title: 'Props и их использование', duration: '18 мин', completed: false, type: 'video' },
    { id: 4, title: 'Практическое задание', duration: '30 мин', completed: false, type: 'practice' },
    { id: 5, title: 'State и useState Hook', duration: '25 мин', completed: false, type: 'video' },
    { id: 6, title: 'Обработка событий', duration: '22 мин', completed: false, type: 'video' },
    { id: 7, title: 'Условный рендеринг', duration: '16 мин', completed: false, type: 'video' },
    { id: 8, title: 'Проект: Todo List', duration: '45 мин', completed: false, type: 'project' }
  ];

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const progressPercentage = (completedLessons / lessons.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Начальный': return 'bg-primary/20 text-primary border-primary/30';
      case 'Средний': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Продвинутый': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return 'Play';
      case 'practice': return 'Code';
      case 'project': return 'FolderOpen';
      default: return 'BookOpen';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border px-4 py-3">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground">{course.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Course Header */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-lg bg-primary/10">
                  <Icon name={course.icon} size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500" />
                      <span>{course.rating}</span>
                      <span>({course.reviews} отзывов)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{course.students} студентов</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className={getDifficultyColor(course.difficulty)}>
                  {course.difficulty}
                </Badge>
                <Badge variant="secondary">{course.price}</Badge>
                <Badge variant="outline">{course.lessons} уроков</Badge>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Прогресс курса</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {completedLessons} из {lessons.length} уроков
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={progressPercentage} className="h-3 mb-2" />
                <p className="text-sm text-muted-foreground">
                  {progressPercentage.toFixed(0)}% завершено
                </p>
              </CardContent>
            </Card>

            {/* Course Content Tabs */}
            <Tabs defaultValue="curriculum" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curriculum">Программа</TabsTrigger>
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="instructor">Преподаватель</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="curriculum" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Программа курса</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {lessons.map((lesson) => (
                        <div 
                          key={lesson.id}
                          className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                            lesson.completed 
                              ? 'bg-primary/5 border-primary/20' 
                              : 'bg-muted/30 hover:bg-muted/50'
                          }`}
                          onClick={() => setCurrentLesson(lesson.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              lesson.completed ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                            }`}>
                              <Icon name={getLessonIcon(lesson.type)} size={16} />
                            </div>
                            <div>
                              <h4 className="font-medium">{lesson.title}</h4>
                              <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {lesson.completed && (
                              <Icon name="Check" size={16} className="text-primary" />
                            )}
                            <Icon name="Play" size={16} className="text-muted-foreground" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Что вы изучите</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.whatYouLearn.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Требования</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Icon name="Dot" size={16} className="text-muted-foreground" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Навыки</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Преподаватель</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                        <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                          {course.instructor.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{course.instructor.name}</h3>
                        <p className="text-muted-foreground mb-3">{course.instructor.role}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="BookOpen" size={16} />
                            <span>{course.instructor.courses} курсов</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Users" size={16} />
                            <span>5K+ студентов</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} />
                            <span>4.9 рейтинг</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Отзывы студентов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Алексей М.', rating: 5, comment: 'Отличный курс для начинающих! Всё объяснено очень понятно.' },
                        { name: 'Мария К.', rating: 5, comment: 'Очень структурированная подача материала. Рекомендую!' },
                        { name: 'Дмитрий С.', rating: 4, comment: 'Хороший курс, но хотелось бы больше практических заданий.' }
                      ].map((review, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">
                                {review.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{review.name}</span>
                            <div className="flex items-center">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Icon key={i} name="Star" size={14} className="text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Enrollment Card */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать курс
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Icon name="Heart" size={16} className="mr-2" />
                  В избранное
                </Button>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Уроков:</span>
                    <span>{course.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Длительность:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Уровень:</span>
                    <span>{course.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Сертификат:</span>
                    <span>Да</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Похожие курсы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { id: 2, title: 'TypeScript Deep Dive', difficulty: 'Продвинутый' },
                    { id: 3, title: 'Node.js Backend', difficulty: 'Средний' }
                  ].map((related) => (
                    <Link 
                      key={related.id}
                      to={`/course/${related.id}`}
                      className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <h4 className="font-medium text-sm mb-1">{related.title}</h4>
                      <p className="text-xs text-muted-foreground">{related.difficulty}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;