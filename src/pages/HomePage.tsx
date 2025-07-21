import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Users, TrendingUp, Shield, Globe, Zap, Brain, MessageSquare, BarChart3, FileText, Gavel, Handshake, Target } from 'lucide-react';
import { AdvancedSearch } from '@/components/AdvancedSearch';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  const { t, isRTL, language } = useLanguage();
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const stats = [
    { number: '12', label: t('stats.portals') },
    { number: '50K+', label: t('stats.activeMembers') },
    { number: '95%', label: t('stats.successRate') },
    { number: '22', label: t('stats.countries') }
  ];

  const portals = [
    {
      title: t('portals.cooperativePurchasing'),
      description: t('portals.cooperativePurchasing.desc'),
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      activeGroups: 45,
      requirements: ['kycRequired', 'pointsRequired']
    },
    {
      title: t('portals.cooperativeMarketing'),
      description: t('portals.cooperativeMarketing.desc'),
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      activeGroups: 32,
      requirements: ['kycRequired', 'pointsRequired']
    },
    {
      title: t('portals.companyFormation'),
      description: t('portals.companyFormation.desc'),
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      activeGroups: 18,
      requirements: []
    },
    {
      title: t('portals.investmentGroups'),
      description: t('portals.investmentGroups.desc'),
      icon: BarChart3,
      color: 'from-orange-500 to-orange-600',
      activeGroups: 12,
      requirements: ['kycRequired', 'pointsRequired']
    },
    {
      title: t('portals.suppliers'),
      description: t('portals.suppliers.desc'),
      icon: Globe,
      color: 'from-teal-500 to-teal-600',
      activeGroups: 67,
      requirements: ['kycRequired', 'pointsRequired']
    },
    {
      title: t('portals.freelancers'),
      description: t('portals.freelancers.desc'),
      icon: Zap,
      color: 'from-indigo-500 to-indigo-600',
      activeGroups: 89,
      requirements: ['mcpTest']
    },
    {
      title: t('portals.freelancerGroups'),
      description: t('portals.freelancerGroups.desc'),
      icon: Users,
      color: 'from-pink-500 to-pink-600',
      activeGroups: 24,
      requirements: ['mcpTest']
    },
    {
      title: t('portals.serviceProviders'),
      description: t('portals.serviceProviders.desc'),
      icon: Target,
      color: 'from-cyan-500 to-cyan-600',
      activeGroups: 156,
      requirements: []
    },
    {
      title: t('portals.productListings'),
      description: t('portals.productListings.desc'),
      icon: FileText,
      color: 'from-yellow-500 to-yellow-600',
      activeGroups: 234,
      requirements: []
    },
    {
      title: t('portals.arbitrationDocumentation'),
      description: t('portals.arbitrationDocumentation.desc'),
      icon: Gavel,
      color: 'from-red-500 to-red-600',
      activeGroups: 8,
      requirements: []
    },
    {
      title: t('portals.arbitrationRequests'),
      description: t('portals.arbitrationRequests.desc'),
      icon: FileText,
      color: 'from-slate-500 to-slate-600',
      activeGroups: 15,
      requirements: []
    },
    {
      title: t('portals.smartNegotiation'),
      description: t('portals.smartNegotiation.desc'),
      icon: Handshake,
      color: 'from-emerald-500 to-emerald-600',
      activeGroups: 28,
      requirements: []
    }
  ];

  const agents = [
    { name: t('agents.sami'), role: t('agents.sami.role'), description: t('agents.sami.desc'), color: 'from-blue-500 to-blue-600' },
    { name: t('agents.nour'), role: t('agents.nour.role'), description: t('agents.nour.desc'), color: 'from-green-500 to-green-600' },
    { name: t('agents.lina'), role: t('agents.lina.role'), description: t('agents.lina.desc'), color: 'from-purple-500 to-purple-600' },
    { name: t('agents.ziad'), role: t('agents.ziad.role'), description: t('agents.ziad.desc'), color: 'from-orange-500 to-orange-600' },
    { name: t('agents.hani'), role: t('agents.hani.role'), description: t('agents.hani.desc'), color: 'from-teal-500 to-teal-600' },
    { name: t('agents.dana'), role: t('agents.dana.role'), description: t('agents.dana.desc'), color: 'from-indigo-500 to-indigo-600' },
    { name: t('agents.badr'), role: t('agents.badr.role'), description: t('agents.badr.desc'), color: 'from-pink-500 to-pink-600' },
    { name: t('agents.tareq'), role: t('agents.tareq.role'), description: t('agents.tareq.desc'), color: 'from-cyan-500 to-cyan-600' },
    { name: t('agents.amal'), role: t('agents.amal.role'), description: t('agents.amal.desc'), color: 'from-yellow-500 to-yellow-600' },
    { name: t('agents.firas'), role: t('agents.firas.role'), description: t('agents.firas.desc'), color: 'from-red-500 to-red-600' },
    { name: t('agents.mariam'), role: t('agents.mariam.role'), description: t('agents.mariam.desc'), color: 'from-slate-500 to-slate-600' },
    { name: t('agents.rania'), role: t('agents.rania.role'), description: t('agents.rania.desc'), color: 'from-emerald-500 to-emerald-600' }
  ];

  const activeGroups = [
    {
      title: language === 'ar' ? 'مجموعة شراء أجهزة لابتوب للشركات' : 'Corporate Laptop Purchase Group',
      description: language === 'ar' ? 'شراء جماعي لأجهزة لابتوب عالية الأداء بخصم 40%' : 'Group purchase of high-performance laptops with 40% discount',
      members: '24/50',
      budget: language === 'ar' ? '150,000 ر.س' : '$40,000',
      phase: t('common.lookingForMembers'),
      country: language === 'ar' ? 'السعودية' : 'Saudi Arabia',
      flag: '🇸🇦'
    },
    {
      title: language === 'ar' ? 'حملة تسويقية للمنتجات الصحية' : 'Health Products Marketing Campaign',
      description: language === 'ar' ? 'حملة تسويق رقمي مشتركة للمنتجات الصحية والعضوية' : 'Joint digital marketing campaign for health and organic products',
      members: '18/30',
      budget: language === 'ar' ? '75,000 د.إ' : '$20,000',
      phase: t('common.waitingForSuppliers'),
      country: language === 'ar' ? 'الإمارات' : 'UAE',
      flag: '🇦🇪'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'منصة ذكية متكاملة • 12 بوابة تعاونية • نظام MCP متقدم' : 'Integrated Smart Platform • 12 Cooperative Portals • Advanced MCP System'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {t('home.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {t('home.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                {t('home.startJourney')}
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                {t('home.interactiveTour')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Search Section */}
      <AdvancedSearch />

      {/* Portals Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('portals.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('portals.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portals.map((portal, index) => {
              const IconComponent = portal.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${portal.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {portal.activeGroups} {t('common.activeGroups')}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {portal.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {portal.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {portal.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="outline" className="text-xs">
                          {t(`common.${req}`)}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                      {t('common.enterPortal')}
                      <ArrowIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'الذكاء الاصطناعي المتقدم' : 'Advanced Artificial Intelligence'}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('agents.title')}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('agents.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${agent.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {agent.name}
                  </h3>
                  
                  <p className="text-blue-200 font-medium mb-3">
                    {agent.role}
                  </p>
                  
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {agent.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'تفاعل مع المساعدين الأذكياء' : 'Interact with AI Assistants'}
            </Button>
          </div>
        </div>
      </section>

      {/* Active Groups Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'ar' ? 'المجموعات النشطة' : 'Active Groups'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'ar' ? 'انضم إلى المجموعات المفتوحة أو قدم عروضك كمورد أو مستقل' : 'Join open groups or submit your offers as a supplier or freelancer'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {group.phase}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span>{group.flag}</span>
                      <span>{group.country}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {group.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {group.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{t('common.members')}</div>
                      <div className="font-bold text-gray-900 dark:text-white">{group.members}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{t('common.budget')}</div>
                      <div className="font-bold text-gray-900 dark:text-white">{group.budget}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{t('common.phase')}</div>
                      <div className="font-bold text-gray-900 dark:text-white">{group.phase}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      {t('common.join')}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      {t('common.submitOffer')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

