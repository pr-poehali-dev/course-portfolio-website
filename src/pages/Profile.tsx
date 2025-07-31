import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const userStats = {
    completedCourses: 12,
    totalHours: 89,
    currentStreak: 15,
    joinDate: '2023-03-15',
    skillLevel: 'Продвинутый',
    achievements: 8,
    certificatesEarned: 5,
    role: 'Разработчик',
    roleDescription: 'Senior Full-Stack Developer',
    specialization: ['React', 'TypeScript', 'Node.js', 'Python'],
    experience: '5+ лет'
  };

  const recentCourses = [
    {
      id: 1,
      title: 'React Fundamentals',
      progress: 100,
      completedAt: '2024-01-15',
      rating: 5
    },
    {
      id: 2,
      title: 'TypeScript Deep Dive',
      progress: 75,
      completedAt: null,
      rating: null
    },
    {
      id: 3,
      title: 'Node.js Backend',
      progress: 100,
      completedAt: '2023-12-20',
      rating: 4
    }
  ];

  const achievements = [
    { name: 'Первый курс', description: 'Завершён первый курс', icon: 'Award', earned: true },
    { name: 'Марафонец', description: '30 дней подряд', icon: 'Flame', earned: true },
    { name: 'Коллекционер', description: '10 курсов завершено', icon: 'Trophy', earned: true },
    { name: 'Мастер кода', description: '100+ часов обучения', icon: 'Code', earned: false },
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5"></div>
            <CardHeader className="relative">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    W
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold mb-2">w0vz</h1>
                  
                  {/* Enhanced Role Display */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-2">
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-base px-3 py-1">
                        <Icon name="Code" size={16} className="mr-2" />
                        {userStats.role}
                      </Badge>
                      <Badge variant="outline" className="text-primary border-primary/30">
                        {userStats.skillLevel}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {userStats.experience}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground font-medium mb-2">
                      {userStats.roleDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                      {userStats.specialization.map((tech, index) => (
                        <span key={index} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    На платформе с {new Date(userStats.joinDate).toLocaleDateString('ru-RU', { 
                      year: 'numeric', 
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </Button>
                  <Button size="sm">
                    <Icon name="Share" size={16} className="mr-2" />
                    Поделиться
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Stats */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {userStats.completedCourses}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Курсов завершено</p>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {userStats.totalHours}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Часов обучения</p>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Icon name="Flame" size={20} className="text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-orange-500">
                    {userStats.currentStreak}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Дней подряд</p>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Icon name="Certificate" size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {userStats.certificatesEarned}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Сертификатов</p>
                </CardHeader>
              </Card>
            </div>

            {/* Recent Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={20} />
                  Недавние курсы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{course.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="BarChart3" size={14} />
                            <span>{course.progress}%</span>
                          </div>
                          {course.completedAt && (
                            <div className="flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              <span>Завершён {new Date(course.completedAt).toLocaleDateString('ru-RU')}</span>
                            </div>
                          )}
                          {course.rating && (
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={14} className="text-yellow-500" />
                              <span>{course.rating}/5</span>
                            </div>
                          )}
                        </div>
                        {course.progress < 100 && (
                          <Progress value={course.progress} className="mt-2 h-2" />
                        )}
                      </div>
                      <Button variant="ghost" size="sm">
                        {course.progress < 100 ? 'Продолжить' : 'Повторить'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Monthly Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Прогресс месяца
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">76%</div>
                  <Progress value={76} className="h-3 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    23 часа из 30 запланированных
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" size={20} />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 p-3 rounded-lg border ${
                        achievement.earned 
                          ? 'bg-primary/5 border-primary/20' 
                          : 'bg-muted/30 border-muted opacity-60'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        achievement.earned 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={achievement.icon} size={16} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{achievement.name}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Zap" size={20} />
                  Активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-1">
                    🔥 {userStats.currentStreak}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    дней подряд
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Лучший результат: 28 дней
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;