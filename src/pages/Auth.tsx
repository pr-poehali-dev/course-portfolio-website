import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Auth = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    terms: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Здесь будет логика авторизации
    setTimeout(() => {
      setIsLoading(false);
      // Перенаправление после успешной авторизации
    }, 2000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    if (!registerData.terms) {
      alert('Необходимо принять условия использования');
      return;
    }
    setIsLoading(true);
    // Здесь будет логика регистрации
    setTimeout(() => {
      setIsLoading(false);
      // Перенаправление после успешной регистрации
    }, 2000);
  };

  const socialProviders = [
    { name: 'GitHub', icon: 'Github', color: 'bg-foreground hover:bg-foreground/90 text-background' },
    { name: 'Google', icon: 'Mail', color: 'bg-red-500 hover:bg-red-600 text-white' },
    { name: 'Telegram', icon: 'MessageCircle', color: 'bg-blue-500 hover:bg-blue-600 text-white' }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-xl mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon name="Code2" size={20} className="text-primary" />
            </div>
            <span className="font-source-code">
              &lt;<span className="text-primary">курсы</span>&gt;
            </span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Добро пожаловать!</h1>
          <p className="text-muted-foreground">
            Войдите в аккаунт или создайте новый для доступа к курсам
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Вход в аккаунт</CardTitle>
                <CardDescription>
                  Введите ваши данные для входа в систему
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="ваш@email.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Пароль</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Введите пароль"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="remember"
                        checked={loginData.remember}
                        onCheckedChange={(checked) => setLoginData({...loginData, remember: !!checked})}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Запомнить меня
                      </Label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Забыли пароль?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                        Вход...
                      </>
                    ) : (
                      <>
                        <Icon name="LogIn" size={16} className="mr-2" />
                        Войти
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6">
                  <Separator className="my-4" />
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Или войдите через
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {socialProviders.map((provider) => (
                      <Button
                        key={provider.name}
                        variant="outline"
                        className={`p-3 ${provider.color}`}
                        onClick={() => {/* Логика авторизации через соц. сети */}}
                      >
                        <Icon name={provider.icon} size={18} />
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Register Form */}
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Создать аккаунт</CardTitle>
                <CardDescription>
                  Заполните форму для создания нового аккаунта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Имя</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Ваше имя"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="ваш@email.com"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="Создайте пароль"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Повторите пароль"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Роль</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant={registerData.role === 'student' ? 'default' : 'outline'}
                        className="justify-start"
                        onClick={() => setRegisterData({...registerData, role: 'student'})}
                      >
                        <Icon name="BookOpen" size={16} className="mr-2" />
                        Студент
                      </Button>
                      <Button
                        type="button"
                        variant={registerData.role === 'instructor' ? 'default' : 'outline'}
                        className="justify-start"
                        onClick={() => setRegisterData({...registerData, role: 'instructor'})}
                      >
                        <Icon name="GraduationCap" size={16} className="mr-2" />
                        Преподаватель
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms"
                      checked={registerData.terms}
                      onCheckedChange={(checked) => setRegisterData({...registerData, terms: !!checked})}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Я принимаю{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        условия использования
                      </Link>{' '}
                      и{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        политику конфиденциальности
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                        Создание аккаунта...
                      </>
                    ) : (
                      <>
                        <Icon name="UserPlus" size={16} className="mr-2" />
                        Создать аккаунт
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6">
                  <Separator className="my-4" />
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Или зарегистрируйтесь через
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {socialProviders.map((provider) => (
                      <Button
                        key={provider.name}
                        variant="outline"
                        className={`p-3 ${provider.color}`}
                        onClick={() => {/* Логика регистрации через соц. сети */}}
                      >
                        <Icon name={provider.icon} size={18} />
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Нужна помощь?{' '}
            <Link to="/contacts" className="text-primary hover:underline">
              Свяжитесь с нами
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;