import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  ShoppingCart,
  Megaphone,
  Building,
  PiggyBank,
  Truck,
  UserCheck,
  UsersIcon,
  Briefcase,
  Package,
  Scale,
  FileText,
  MessageSquare,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Bot,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedSearch } from '@/components/AdvancedSearch';
import GroupCard from '@/components/functional/GroupCard';
import AIAgentCard from '@/components/functional/AIAgentCard';
import { dummyGroups, dummyAIAgents, businessLogic } from '@/utils/dummyData';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGroups, setFilteredGroups] = useState(dummyGroups);

  // Portal configurations
  const portals = [
    {
      id: 'cooperative-purchasing',
      icon: ShoppingCart,
      color: 'from-blue-500 to-blue-600',
      activeGroups: 156,
      requirements: ['kycRequired', 'pointsRequired']
    },
    {
      id: 'cooperative-marketing',
      icon: Megaphone,
      color: 'from-purple-500 to-purple-600',
      activeGroups: 89,
      requirements: ['pointsRequired']
    },
    {
      id: 'company-formation',
      icon: Building,
      color: 'from-green-500 to-green-600',
      activeGroups: 67,
      requirements: ['kycRequired', 'mcpTest']
    },
    {
      id: 'investment-groups',
      icon: PiggyBank,
      color: 'from-yellow-500 to-yellow-600',
      activeGroups: 134,
      requirements: ['kycRequired', 'pointsRequired', 'mcpTest']
    },
    {
      id: 'suppliers',
      icon: Truck,
      color: 'from-red-500 to-red-600',
      activeGroups: 298,
      requirements: ['kycRequired']
    },
    {
      id: 'freelancers',
      icon: UserCheck,
      color: 'from-indigo-500 to-indigo-600',
      activeGroups: 445,
      requirements: ['mcpTest']
    },
    {
      id: 'freelancer-groups',
      icon: UsersIcon,
      color: 'from-pink-500 to-pink-600',
      activeGroups: 178,
      requirements: ['pointsRequired', 'mcpTest']
    },
    {
      id: 'service-providers',
      icon: Briefcase,
      color: 'from-teal-500 to-teal-600',
      activeGroups: 223,
      requirements: ['kycRequired', 'pointsRequired']
    },
    {
      id: 'product-listings',
      icon: Package,
      color: 'from-orange-500 to-orange-600',
      activeGroups: 167,
      requirements: ['pointsRequired']
    },
    {
      id: 'arbitration-documentation',
      icon: Scale,
      color: 'from-gray-500 to-gray-600',
      activeGroups: 45,
      requirements: ['kycRequired', 'mcpTest']
    },
    {
      id: 'arbitration-requests',
      icon: FileText,
      color: 'from-cyan-500 to-cyan-600',
      activeGroups: 23,
      requirements: ['kycRequired', 'pointsRequired', 'mcpTest']
    },
    {
      id: 'smart-negotiation',
      icon: MessageSquare,
      color: 'from-violet-500 to-violet-600',
      activeGroups: 78,
      requirements: ['mcpTest']
    }
  ];

  const handleSearch = (filters: any) => {
    const result = businessLogic.searchGroups(filters);
    if (result.success) {
      setFilteredGroups(result.results);
    }
  };

  const handleGroupJoin = (groupId: string) => {
    console.log('Group joined:', groupId);
    // Update UI or refresh data
  };

  const handleOfferSubmit = (groupId: string) => {
    console.log('Offer submitted for group:', groupId);
    // Update UI or refresh data
  };

  const handleAgentConsult = (agentId: string, query: string) => {
    console.log('Agent consulted:', agentId, query);
    // Update UI or refresh data
  };

  const getPortalTitle = (portalId: string) => {
    const titles = {
      ar: {
        'cooperative-purchasing': 'الشراء التعاوني',
        'cooperative-marketing': 'التسويق التعاوني',
        'company-formation': 'تأسيس الشركات',
        'investment-groups': 'مجموعات الاستثمار',
        'suppliers': 'الموردون',
        'freelancers': 'المستقلون',
        'freelancer-groups': 'مجموعات المستقلين',
        'service-providers': 'مقدمو الخدمات',
        'product-listings': 'قوائم المنتجات',
        'arbitration-documentation': 'التحكيم والتوثيق',
        'arbitration-requests': 'طلبات التحكيم',
        'smart-negotiation': 'حلول التفاوض الذكية'
      },
      en: {
        'cooperative-purchasing': 'Cooperative Purchasing',
        'cooperative-marketing': 'Cooperative Marketing',
        'company-formation': 'Company Formation',
        'investment-groups': 'Investment Groups',
        'suppliers': 'Suppliers',
        'freelancers': 'Freelancers',
        'freelancer-groups': 'Freelancer Groups',
        'service-providers': 'Service Providers',
        'product-listings': 'Product Listings',
        'arbitration-documentation': 'Arbitration & Documentation',
        'arbitration-requests': 'Arbitration Requests',
        'smart-negotiation': 'Smart Negotiation Solutions'
      }
    };
    return titles[language as keyof typeof titles]?.[portalId as keyof typeof titles.ar] || portalId;
  };

  const getRequirementText = (req: string) => {
    const requirements = {
      ar: {
        'kycRequired': 'KYC مطلوب',
        'pointsRequired': 'نقاط مطلوبة',
        'mcpTest': 'اختبار MCP'
      },
      en: {
        'kycRequired': 'KYC Required',
        'pointsRequired': 'Points Required',
        'mcpTest': 'MCP Test'
      }
    };
    return requirements[language as keyof typeof requirements]?.[req as keyof typeof requirements.ar] || req;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              <Zap className="w-5 h-5 mr-2" />
              {t('home.startJourney')}
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 text-lg">
              <Star className="w-5 h-5 mr-2" />
              {t('home.interactiveTour')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">12</div>
              <div className="text-gray-600 dark:text-gray-300">{t('stats.portals')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">{t('stats.activeMembers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">98%</div>
              <div className="text-gray-600 dark:text-gray-300">{t('stats.successRate')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">190</div>
              <div className="text-gray-600 dark:text-gray-300">{t('stats.countries')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Search Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.searchTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('home.searchSubtitle')}
            </p>
          </div>
          
          <AdvancedSearch onSearch={handleSearch} />
        </div>
      </section>

      {/* Smart Cooperative Portals */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('portals.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('portals.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portals.map((portal) => {
              const IconComponent = portal.icon;
              return (
                <Card key={portal.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${portal.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {portal.activeGroups} {t('portals.activeGroups')}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {getPortalTitle(portal.id)}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {portal.requirements.map((req) => (
                        <Badge key={req} variant="outline" className="text-xs">
                          {req === 'kycRequired' && <Shield className="w-3 h-3 mr-1" />}
                          {req === 'pointsRequired' && <Award className="w-3 h-3 mr-1" />}
                          {req === 'mcpTest' && <Star className="w-3 h-3 mr-1" />}
                          {getRequirementText(req)}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                      {t('portals.enterPortal')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('agents.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('agents.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {dummyAIAgents.slice(0, 6).map((agent) => (
              <AIAgentCard 
                key={agent.id} 
                agent={agent} 
                onConsult={handleAgentConsult}
              />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              <Bot className="w-5 h-5 mr-2" />
              {t('agents.interact')}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Active Groups Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('groups.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('groups.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.slice(0, 6).map((group) => (
              <GroupCard 
                key={group.id} 
                group={group} 
                onJoin={handleGroupJoin}
                onSubmitOffer={handleOfferSubmit}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20">
              <Users className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'عرض جميع المجموعات' : 'View All Groups'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

