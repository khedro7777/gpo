import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translation keys
const translations = {
  ar: {
    // Header & Navigation
    'header.about': 'من نحن',
    'header.howItWorks': 'كيف يعمل',
    'header.support': 'الدعم',
    'header.login': 'تسجيل دخول',
    'header.register': 'إنشاء حساب',
    'header.language': 'العربية',
    'header.currency': 'ر.س',
    'nav.home': 'الرئيسية',
    'nav.groups': 'المجموعات',
    'nav.profile': 'ملفي الشخصي',
    'nav.wallet': 'المحفظة',
    'nav.dashboard': 'لوحة التحكم',
    'nav.logout': 'تسجيل خروج',
    
    // Home Page
    'home.title': 'مستقبل التعاون الذكي',
    'home.subtitle': 'منصة عالمية متطورة تجمع 12 بوابة تعاونية ذكية للشراء الجماعي، التسويق المشترك، تأسيس الشركات، إدارة الاستثمارات، والتحكيم الرقمي مع دعم الذكاء الاصطناعي',
    'home.startJourney': 'ابدأ رحلتك الآن',
    'home.interactiveTour': 'جولة تفاعلية',
    'home.searchTitle': 'البحث الذكي المتقدم',
    'home.searchSubtitle': 'ابحث عن المجموعات والفرص المناسبة لك باستخدام فلاتر متقدمة',
    'home.searchPlaceholder': 'ابحث عن المجموعات، المنتجات، الخدمات...',
    'home.advancedFilter': 'فلترة متقدمة',
    'home.search': 'بحث',
    
    // Stats
    'stats.portals': 'بوابة تعاونية',
    'stats.activeMembers': 'عضو نشط',
    'stats.successRate': 'معدل النجاح',
    'stats.countries': 'دولة',
    
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
    'portals.enterPortal': 'دخول البوابة',
    'portals.activeGroups': 'مجموعة نشطة',
    'portals.kycRequired': 'KYC مطلوب',
    'portals.pointsRequired': 'نقاط مطلوبة',
    'portals.mcpTest': 'اختبار MCP',
    
    // AI Agents
    'agents.title': '12 مساعد ذكي متخصص',
    'agents.subtitle': 'فريق من المساعدين الأذكياء يعمل على مدار الساعة لتحليل البيانات، تقديم التوصيات، وتحسين تجربتك',
    'agents.interact': 'تفاعل مع المساعدين الأذكياء',
    'agents.sami': 'سامي',
    'agents.sami.role': 'محلل الطلب',
    'agents.sami.desc': 'يحلل احتياجات المجموعات ويقترح المهارات المطلوبة',
    'agents.nour': 'نور',
    'agents.nour.role': 'باحث السوق',
    'agents.nour.desc': 'يبحث في اتجاهات السوق ويحدد الفرص الاستثمارية',
    
    // Groups
    'groups.title': 'المجموعات النشطة',
    'groups.subtitle': 'انضم إلى المجموعات المفتوحة أو قدم عروضك كمورد أو مستقل',
    'groups.members': 'الأعضاء',
    'groups.budget': 'الميزانية',
    'groups.stage': 'المرحلة',
    'groups.join': 'انضمام',
    'groups.submitOffer': 'تقديم عرض',
    'groups.seekingMembers': 'بحث عن أعضاء',
    'groups.waitingSuppliers': 'في انتظار الموردين',
    'groups.active': 'نشطة',
    'groups.completed': 'مكتملة',
    
    // Actions
    'actions.join': 'انضمام',
    'actions.leave': 'مغادرة',
    'actions.create': 'إنشاء',
    'actions.edit': 'تعديل',
    'actions.delete': 'حذف',
    'actions.save': 'حفظ',
    'actions.cancel': 'إلغاء',
    'actions.submit': 'إرسال',
    'actions.approve': 'موافقة',
    'actions.reject': 'رفض',
    'actions.negotiate': 'تفاوض',
    'actions.vote': 'تصويت',
    'actions.upload': 'رفع',
    'actions.download': 'تحميل',
    'actions.share': 'مشاركة',
    'actions.copy': 'نسخ',
    'actions.print': 'طباعة',
    
    // Forms
    'forms.name': 'الاسم',
    'forms.email': 'البريد الإلكتروني',
    'forms.password': 'كلمة المرور',
    'forms.confirmPassword': 'تأكيد كلمة المرور',
    'forms.country': 'الدولة',
    'forms.selectCountry': 'اختر الدولة',
    'forms.portal': 'البوابة',
    'forms.selectPortal': 'اختر البوابة',
    'forms.groupType': 'نوع المجموعة',
    'forms.selectType': 'اختر النوع',
    'forms.budget': 'الميزانية',
    'forms.selectBudget': 'اختر الميزانية',
    'forms.memberCount': 'عدد الأعضاء',
    'forms.selectCount': 'اختر العدد',
    'forms.sortBy': 'ترتيب حسب',
    'forms.newest': 'الأحدث',
    'forms.oldest': 'الأقدم',
    'forms.mostMembers': 'الأكثر أعضاء',
    'forms.highestBudget': 'أعلى ميزانية',
    'forms.endingSoon': 'ينتهي قريباً',
    
    // Filters
    'filters.activeFilters': 'الفلاتر النشطة:',
    'filters.clearAll': 'مسح الكل',
    'filters.country': 'الدولة',
    'filters.portal': 'البوابة',
    'filters.groupType': 'نوع المجموعة',
    'filters.budget': 'الميزانية',
    'filters.memberCount': 'عدد الأعضاء',
    'filters.sort': 'ترتيب',
    
    // Messages
    'messages.success': 'تم بنجاح',
    'messages.error': 'حدث خطأ',
    'messages.loading': 'جاري التحميل...',
    'messages.noData': 'لا توجد بيانات',
    'messages.confirmDelete': 'هل أنت متأكد من الحذف؟',
    'messages.operationSuccess': 'تمت العملية بنجاح',
    'messages.operationFailed': 'فشلت العملية',
    
    // Status
    'status.pending': 'قيد المراجعة',
    'status.approved': 'موافق عليه',
    'status.rejected': 'مرفوض',
    'status.active': 'نشط',
    'status.inactive': 'غير نشط',
    'status.completed': 'مكتمل',
    'status.draft': 'مسودة',
    'status.published': 'منشور',
    
    // Time
    'time.now': 'الآن',
    'time.today': 'اليوم',
    'time.yesterday': 'أمس',
    'time.week': 'أسبوع',
    'time.month': 'شهر',
    'time.year': 'سنة',
    'time.ago': 'منذ',
    
    // Common
    'common.yes': 'نعم',
    'common.no': 'لا',
    'common.ok': 'موافق',
    'common.close': 'إغلاق',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.finish': 'إنهاء',
    'common.continue': 'متابعة',
    'common.skip': 'تخطي',
    'common.required': 'مطلوب',
    'common.optional': 'اختياري',
    'common.all': 'الكل',
    'common.none': 'لا شيء',
    'common.other': 'أخرى',
    'common.more': 'المزيد',
    'common.less': 'أقل',
    'common.show': 'عرض',
    'common.hide': 'إخفاء',
    'common.expand': 'توسيع',
    'common.collapse': 'طي'
  },
  en: {
    // Header & Navigation
    'header.about': 'About Us',
    'header.howItWorks': 'How It Works',
    'header.support': 'Support',
    'header.login': 'Login',
    'header.register': 'Register',
    'header.language': 'English',
    'header.currency': 'USD',
    'nav.home': 'Home',
    'nav.groups': 'Groups',
    'nav.profile': 'Profile',
    'nav.wallet': 'Wallet',
    'nav.dashboard': 'Dashboard',
    'nav.logout': 'Logout',
    
    // Home Page
    'home.title': 'Future of Smart Cooperation',
    'home.subtitle': 'Advanced global platform bringing together 12 smart cooperative portals for group purchasing, joint marketing, company formation, investment management, and digital arbitration with AI support',
    'home.startJourney': 'Start Your Journey Now',
    'home.interactiveTour': 'Interactive Tour',
    'home.searchTitle': 'Advanced Smart Search',
    'home.searchSubtitle': 'Find the right groups and opportunities using advanced filters',
    'home.searchPlaceholder': 'Search for groups, products, services...',
    'home.advancedFilter': 'Advanced Filters',
    'home.search': 'Search',
    
    // Stats
    'stats.portals': 'Cooperative Portals',
    'stats.activeMembers': 'Active Members',
    'stats.successRate': 'Success Rate',
    'stats.countries': 'Countries',
    
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
    'portals.enterPortal': 'Enter Portal',
    'portals.activeGroups': 'Active Groups',
    'portals.kycRequired': 'KYC Required',
    'portals.pointsRequired': 'Points Required',
    'portals.mcpTest': 'MCP Test',
    
    // AI Agents
    'agents.title': '12 Specialized Smart Assistants',
    'agents.subtitle': 'A team of smart assistants working around the clock to analyze data, provide recommendations, and enhance your experience',
    'agents.interact': 'Interact with Smart Assistants',
    'agents.sami': 'Sami',
    'agents.sami.role': 'Demand Analyst',
    'agents.sami.desc': 'Analyzes group needs and suggests required skills',
    'agents.nour': 'Nour',
    'agents.nour.role': 'Market Researcher',
    'agents.nour.desc': 'Researches market trends and identifies investment opportunities',
    
    // Groups
    'groups.title': 'Active Groups',
    'groups.subtitle': 'Join open groups or submit your offers as a supplier or freelancer',
    'groups.members': 'Members',
    'groups.budget': 'Budget',
    'groups.stage': 'Stage',
    'groups.join': 'Join',
    'groups.submitOffer': 'Submit Offer',
    'groups.seekingMembers': 'Seeking Members',
    'groups.waitingSuppliers': 'Waiting for Suppliers',
    'groups.active': 'Active',
    'groups.completed': 'Completed',
    
    // Actions
    'actions.join': 'Join',
    'actions.leave': 'Leave',
    'actions.create': 'Create',
    'actions.edit': 'Edit',
    'actions.delete': 'Delete',
    'actions.save': 'Save',
    'actions.cancel': 'Cancel',
    'actions.submit': 'Submit',
    'actions.approve': 'Approve',
    'actions.reject': 'Reject',
    'actions.negotiate': 'Negotiate',
    'actions.vote': 'Vote',
    'actions.upload': 'Upload',
    'actions.download': 'Download',
    'actions.share': 'Share',
    'actions.copy': 'Copy',
    'actions.print': 'Print',
    
    // Forms
    'forms.name': 'Name',
    'forms.email': 'Email',
    'forms.password': 'Password',
    'forms.confirmPassword': 'Confirm Password',
    'forms.country': 'Country',
    'forms.selectCountry': 'Select Country',
    'forms.portal': 'Portal',
    'forms.selectPortal': 'Select Portal',
    'forms.groupType': 'Group Type',
    'forms.selectType': 'Select Type',
    'forms.budget': 'Budget',
    'forms.selectBudget': 'Select Budget',
    'forms.memberCount': 'Member Count',
    'forms.selectCount': 'Select Count',
    'forms.sortBy': 'Sort By',
    'forms.newest': 'Newest',
    'forms.oldest': 'Oldest',
    'forms.mostMembers': 'Most Members',
    'forms.highestBudget': 'Highest Budget',
    'forms.endingSoon': 'Ending Soon',
    
    // Filters
    'filters.activeFilters': 'Active Filters:',
    'filters.clearAll': 'Clear All',
    'filters.country': 'Country',
    'filters.portal': 'Portal',
    'filters.groupType': 'Group Type',
    'filters.budget': 'Budget',
    'filters.memberCount': 'Member Count',
    'filters.sort': 'Sort',
    
    // Messages
    'messages.success': 'Success',
    'messages.error': 'Error occurred',
    'messages.loading': 'Loading...',
    'messages.noData': 'No data available',
    'messages.confirmDelete': 'Are you sure you want to delete?',
    'messages.operationSuccess': 'Operation completed successfully',
    'messages.operationFailed': 'Operation failed',
    
    // Status
    'status.pending': 'Pending Review',
    'status.approved': 'Approved',
    'status.rejected': 'Rejected',
    'status.active': 'Active',
    'status.inactive': 'Inactive',
    'status.completed': 'Completed',
    'status.draft': 'Draft',
    'status.published': 'Published',
    
    // Time
    'time.now': 'Now',
    'time.today': 'Today',
    'time.yesterday': 'Yesterday',
    'time.week': 'Week',
    'time.month': 'Month',
    'time.year': 'Year',
    'time.ago': 'ago',
    
    // Common
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.ok': 'OK',
    'common.close': 'Close',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.finish': 'Finish',
    'common.continue': 'Continue',
    'common.skip': 'Skip',
    'common.required': 'Required',
    'common.optional': 'Optional',
    'common.all': 'All',
    'common.none': 'None',
    'common.other': 'Other',
    'common.more': 'More',
    'common.less': 'Less',
    'common.show': 'Show',
    'common.hide': 'Hide',
    'common.expand': 'Expand',
    'common.collapse': 'Collapse'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
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

