import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const handleLanguageChange = (newLanguage: 'ar' | 'en') => {
    setLanguage(newLanguage);
  };

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-slate-900/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GPO</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 dark:text-white">
                {language === 'ar' ? 'GPO WORLD' : 'GPO WORLD'}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {language === 'ar' ? 'منصة التعاون الذكي' : 'Smart Cooperation Platform'}
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('header.about')}
            </Link>
            <Link to="/how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('header.howItWorks')}
            </Link>
            <Link to="/support" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('header.support')}
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{t('header.language')}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('ar')}
                  className={language === 'ar' ? 'bg-blue-50 dark:bg-blue-900' : ''}
                >
                  <span className="mr-2">🇸🇦</span>
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('en')}
                  className={language === 'en' ? 'bg-blue-50 dark:bg-blue-900' : ''}
                >
                  <span className="mr-2">🇺🇸</span>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Country & Currency */}
            <Button variant="outline" size="sm">
              <span className="mr-1">🇸🇦</span>
              SA
            </Button>
            
            <Button variant="outline" size="sm">
              {t('header.currency')}
            </Button>

            {/* Auth Buttons */}
            <Link to="/login">
              <Button variant="ghost" size="sm">
                {t('header.login')}
              </Button>
            </Link>
            
            <Link to="/register">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                {t('header.register')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

