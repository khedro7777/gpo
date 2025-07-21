import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  ar: {
    // Header
    'header.about': 'من نحن',
    'header.howItWorks': 'كيف يعمل',
    'header.support': 'الدعم',
    'header.login': 'تسجيل دخول',
    'header.register': 'إنشاء حساب',
    'header.language': 'العربية',
    'header.currency': 'ر.س',
    
    // Home Page
    'home.title': 'مستقبل التعاون الذكي',
    'home.subtitle': 'منصة عالمية متطورة تجمع 12 بوابة تعاونية ذكية للشراء الجماعي، التسويق المشترك، تأسيس الشركات، إدارة الاستثمارات، والتحكيم الرقمي مع دعم الذكاء الاصطناعي',
    'home.startJourney': 'ابدأ رحلتك الآن',
    'home.interactiveTour': 'جولة تفاعلية',
    'home.searchPlaceholder': 'ابحث في البوابات والمجموعات النشطة...',
    'home.advancedFilter': 'فلترة متقدمة',
    'home.search': 'بحث',
    
    // Stats
    'stats.portals': 'بوابة تعاونية',
    'stats.activeMembers': 'عضو نشط',
    'stats.successRate': 'معدل النجاح',
    'stats.countries': 'دولة',
    
    // Quick Filters
    'filters.highBudget': 'ميزانية عالية',
    'filters.newGroups': 'مجموعات جديدة',
    'filters.verifiedOnly': 'موثق فقط',
    'filters.premiumMembers': 'أعضاء مميزون',
    'filters.mcpCertified': 'معتمد MCP',
    'filters.largeGroups': 'مجموعات كبيرة',
    
    // Portals
    'portals.title': 'البوابات التعاونية الذكية',
    'portals.subtitle': '12 بوابة متخصصة تغطي جميع احتياجات التعاون الذكي من الشراء إلى الاستثمار والتحكيم',
    'portals.cooperativePurchasing': 'الشراء التعاوني',
    'portals.cooperativeMarketing': 'التسويق التعاوني',
    'portals.companyFormation': 'تأسيس الشركات',
    'portals.investmentGroups': 'مجموعات الاستثمار',
    'portals.suppliers': 'الموردون',
    'portals.freelancers': 'المستقلون',
    'portals.freelancerGroups': 'مجموعات المستقلين',
    'portals.serviceProviders': 'مقدمو الخدمات',
    'portals.productListings': 'قوائم المنتجات',
    'portals.arbitrationDocumentation': 'التحكيم والتوثيق',
    'portals.arbitrationRequests': 'طلبات التحكيم',
    'portals.smartNegotiation': 'حلول التفاوض الذكية',
    
    // Portal Descriptions
    'portals.cooperativePurchasing.desc': 'تجميع طلبات الشراء للحصول على أفضل الأسعار والخصومات',
    'portals.cooperativeMarketing.desc': 'حملات تسويقية مشتركة لتقليل التكاليف وزيادة الوصول',
    'portals.companyFormation.desc': 'خدمات تأسيس شركات احترافية في أفضل الولايات القضائية',
    'portals.investmentGroups.desc': 'تجميع المستثمرين للفرص الاستثمارية المتميزة',
    'portals.suppliers.desc': 'شبكة موردين موثوقة مع تقييمات ومقارنات شاملة',
    'portals.freelancers.desc': 'منصة متقدمة للمستقلين مع اختبارات مهارات وتقييمات',
    'portals.freelancerGroups.desc': 'تجميع المستقلين لمشاريع كبيرة ومعقدة',
    'portals.serviceProviders.desc': 'شبكة شاملة من مقدمي الخدمات المتخصصة',
    'portals.productListings.desc': 'عرض وتسويق المنتجات للمجموعات المختلفة',
    'portals.arbitrationDocumentation.desc': 'نظام ORDA لحل النزاعات والتحكيم الرقمي المتقدم',
    'portals.arbitrationRequests.desc': 'تقديم طلبات التحكيم وحل النزاعات',
    'portals.smartNegotiation.desc': 'أدوات ذكية لتسهيل التفاوض والتوصل لاتفاقات',
    
    // AI Agents
    'agents.title': '12 مساعد ذكي متخصص',
    'agents.subtitle': 'فريق من المساعدين الأذكياء يعمل على مدار الساعة لتحليل البيانات، تقديم التوصيات، وتحسين تجربتك',
    'agents.sami': 'سامي',
    'agents.nour': 'نور',
    'agents.lina': 'لينا',
    'agents.ziad': 'زياد',
    'agents.hani': 'هاني',
    'agents.dana': 'دانا',
    'agents.badr': 'بدر',
    'agents.tareq': 'طارق',
    'agents.amal': 'أمل',
    'agents.firas': 'فراس',
    'agents.mariam': 'مريم',
    'agents.rania': 'رانيا',
    
    // Agent Roles
    'agents.sami.role': 'محلل الطلب',
    'agents.nour.role': 'باحث السوق',
    'agents.lina.role': 'مساعد قانوني',
    'agents.ziad.role': 'مشرف التحكيم',
    'agents.hani.role': 'مدرب التفاوض',
    'agents.dana.role': 'مقيم المستقلين',
    'agents.badr.role': 'باحث الموردين',
    'agents.tareq.role': 'مقيم MCP',
    'agents.amal.role': 'متتبع السمعة',
    'agents.firas.role': 'محسن التصويت',
    'agents.mariam.role': 'مترجم ذكي',
    'agents.rania.role': 'حارس الأمان',
    
    // Agent Descriptions
    'agents.sami.desc': 'يحلل احتياجات المجموعات ويقترح المهارات المطلوبة',
    'agents.nour.desc': 'يبحث في اتجاهات السوق ويحدد الفرص الاستثمارية',
    'agents.lina.desc': 'يراجع العقود ويقدم المشورة القانونية',
    'agents.ziad.desc': 'يشرف على عمليات التحكيم وحل النزاعات',
    'agents.hani.desc': 'يقدم استراتيجيات التفاوض والصفقات',
    'agents.dana.desc': 'يقيم أداء المستقلين ويكشف السلوك المشبوه',
    'agents.badr.desc': 'يجد أفضل الموردين ويرسل الدعوات',
    'agents.tareq.desc': 'يقيم اختبارات المهارات ويقدم التلميحات',
    'agents.amal.desc': 'يتتبع سمعة المستخدمين ويحسب التقييمات',
    'agents.firas.desc': 'يحلل أنماط التصويت ويكشف التحيز',
    'agents.mariam.desc': 'يترجم المحتوى ويكيف الواجهات',
    'agents.rania.desc': 'يراقب الأمان ويكشف التهديدات',
    
    // Common
    'common.activeGroups': 'مجموعة نشطة',
    'common.enterPortal': 'دخول البوابة',
    'common.kycRequired': 'KYC مطلوب',
    'common.pointsRequired': 'نقاط مطلوبة',
    'common.mcpTest': 'اختبار MCP',
    'common.join': 'انضمام',
    'common.submitOffer': 'تقديم عرض',
    'common.members': 'الأعضاء',
    'common.budget': 'الميزانية',
    'common.phase': 'المرحلة',
    'common.lookingForMembers': 'بحث عن أعضاء',
    'common.waitingForSuppliers': 'في انتظار الموردين',
  },
  en: {
    // Header
    'header.about': 'About Us',
    'header.howItWorks': 'How It Works',
    'header.support': 'Support',
    'header.login': 'Login',
    'header.register': 'Sign Up',
    'header.language': 'English',
    'header.currency': 'USD',
    
    // Home Page
    'home.title': 'Future of Smart Cooperation',
    'home.subtitle': 'Advanced global platform combining 12 smart cooperative gateways for group purchasing, joint marketing, company formation, investment management, and digital arbitration with AI support',
    'home.startJourney': 'Start Your Journey',
    'home.interactiveTour': 'Interactive Tour',
    'home.searchPlaceholder': 'Search in active portals and groups...',
    'home.advancedFilter': 'Advanced Filter',
    'home.search': 'Search',
    
    // Stats
    'stats.portals': 'Cooperative Portals',
    'stats.activeMembers': 'Active Members',
    'stats.successRate': 'Success Rate',
    'stats.countries': 'Countries',
    
    // Quick Filters
    'filters.highBudget': 'High Budget',
    'filters.newGroups': 'New Groups',
    'filters.verifiedOnly': 'Verified Only',
    'filters.premiumMembers': 'Premium Members',
    'filters.mcpCertified': 'MCP Certified',
    'filters.largeGroups': 'Large Groups',
    
    // Portals
    'portals.title': 'Smart Cooperative Portals',
    'portals.subtitle': '12 specialized portals covering all smart cooperation needs from purchasing to investment and arbitration',
    'portals.cooperativePurchasing': 'Cooperative Purchasing',
    'portals.cooperativeMarketing': 'Cooperative Marketing',
    'portals.companyFormation': 'Company Formation',
    'portals.investmentGroups': 'Investment Groups',
    'portals.suppliers': 'Suppliers',
    'portals.freelancers': 'Freelancers',
    'portals.freelancerGroups': 'Freelancer Groups',
    'portals.serviceProviders': 'Service Providers',
    'portals.productListings': 'Product Listings',
    'portals.arbitrationDocumentation': 'Arbitration & Documentation',
    'portals.arbitrationRequests': 'Arbitration Requests',
    'portals.smartNegotiation': 'Smart Negotiation Solutions',
    
    // Portal Descriptions
    'portals.cooperativePurchasing.desc': 'Aggregate purchase orders to get the best prices and discounts',
    'portals.cooperativeMarketing.desc': 'Joint marketing campaigns to reduce costs and increase reach',
    'portals.companyFormation.desc': 'Professional company formation services in the best jurisdictions',
    'portals.investmentGroups.desc': 'Pool investors for outstanding investment opportunities',
    'portals.suppliers.desc': 'Trusted supplier network with comprehensive ratings and comparisons',
    'portals.freelancers.desc': 'Advanced freelancer platform with skill tests and evaluations',
    'portals.freelancerGroups.desc': 'Pool freelancers for large and complex projects',
    'portals.serviceProviders.desc': 'Comprehensive network of specialized service providers',
    'portals.productListings.desc': 'Display and market products to different groups',
    'portals.arbitrationDocumentation.desc': 'ORDA system for dispute resolution and advanced digital arbitration',
    'portals.arbitrationRequests.desc': 'Submit arbitration requests and resolve disputes',
    'portals.smartNegotiation.desc': 'Smart tools to facilitate negotiation and reach agreements',
    
    // AI Agents
    'agents.title': '12 Specialized AI Assistants',
    'agents.subtitle': 'A team of smart assistants working around the clock to analyze data, provide recommendations, and enhance your experience',
    'agents.sami': 'Sami',
    'agents.nour': 'Nour',
    'agents.lina': 'Lina',
    'agents.ziad': 'Ziad',
    'agents.hani': 'Hani',
    'agents.dana': 'Dana',
    'agents.badr': 'Badr',
    'agents.tareq': 'Tareq',
    'agents.amal': 'Amal',
    'agents.firas': 'Firas',
    'agents.mariam': 'Mariam',
    'agents.rania': 'Rania',
    
    // Agent Roles
    'agents.sami.role': 'Demand Analyst',
    'agents.nour.role': 'Market Researcher',
    'agents.lina.role': 'Legal Assistant',
    'agents.ziad.role': 'Arbitration Supervisor',
    'agents.hani.role': 'Negotiation Trainer',
    'agents.dana.role': 'Freelancer Evaluator',
    'agents.badr.role': 'Supplier Researcher',
    'agents.tareq.role': 'MCP Evaluator',
    'agents.amal.role': 'Reputation Tracker',
    'agents.firas.role': 'Voting Optimizer',
    'agents.mariam.role': 'Smart Translator',
    'agents.rania.role': 'Security Guardian',
    
    // Agent Descriptions
    'agents.sami.desc': 'Analyzes group needs and suggests required skills',
    'agents.nour.desc': 'Researches market trends and identifies investment opportunities',
    'agents.lina.desc': 'Reviews contracts and provides legal advice',
    'agents.ziad.desc': 'Supervises arbitration processes and dispute resolution',
    'agents.hani.desc': 'Provides negotiation strategies and deal-making',
    'agents.dana.desc': 'Evaluates freelancer performance and detects suspicious behavior',
    'agents.badr.desc': 'Finds the best suppliers and sends invitations',
    'agents.tareq.desc': 'Evaluates skill tests and provides hints',
    'agents.amal.desc': 'Tracks user reputation and calculates ratings',
    'agents.firas.desc': 'Analyzes voting patterns and detects bias',
    'agents.mariam.desc': 'Translates content and adapts interfaces',
    'agents.rania.desc': 'Monitors security and detects threats',
    
    // Common
    'common.activeGroups': 'Active Groups',
    'common.enterPortal': 'Enter Portal',
    'common.kycRequired': 'KYC Required',
    'common.pointsRequired': 'Points Required',
    'common.mcpTest': 'MCP Test',
    'common.join': 'Join',
    'common.submitOffer': 'Submit Offer',
    'common.members': 'Members',
    'common.budget': 'Budget',
    'common.phase': 'Phase',
    'common.lookingForMembers': 'Looking for Members',
    'common.waitingForSuppliers': 'Waiting for Suppliers',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

