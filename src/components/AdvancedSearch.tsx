import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  X, 
  ChevronDown,
  MapPin,
  Users,
  DollarSign,
  Calendar
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { countries } from '@/data/countries';

export const AdvancedSearch = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const [filters, setFilters] = useState({
    country: '',
    portal: '',
    groupType: '',
    budget: '',
    memberCount: '',
    sortBy: 'newest'
  });

  const portals = [
    { value: 'cooperative-purchasing', label: t('portals.cooperativePurchasing') },
    { value: 'cooperative-marketing', label: t('portals.cooperativeMarketing') },
    { value: 'company-formation', label: t('portals.companyFormation') },
    { value: 'investment-groups', label: t('portals.investmentGroups') },
    { value: 'suppliers', label: t('portals.suppliers') },
    { value: 'freelancers', label: t('portals.freelancers') },
    { value: 'freelancer-groups', label: t('portals.freelancerGroups') },
    { value: 'service-providers', label: t('portals.serviceProviders') },
    { value: 'product-listings', label: t('portals.productListings') },
    { value: 'arbitration-documentation', label: t('portals.arbitrationDocumentation') },
    { value: 'arbitration-requests', label: t('portals.arbitrationRequests') },
    { value: 'smart-negotiation', label: t('portals.smartNegotiation') }
  ];

  const groupTypes = [
    { value: 'open', label: language === 'ar' ? 'مفتوحة للجميع' : 'Open to All' },
    { value: 'invite-only', label: language === 'ar' ? 'بدعوة فقط' : 'Invite Only' },
    { value: 'verified-only', label: language === 'ar' ? 'للمتحققين فقط' : 'Verified Only' },
    { value: 'premium', label: language === 'ar' ? 'مميزة' : 'Premium' }
  ];

  const budgetRanges = [
    { value: '0-1000', label: language === 'ar' ? 'أقل من 1,000' : 'Under $1,000' },
    { value: '1000-5000', label: language === 'ar' ? '1,000 - 5,000' : '$1,000 - $5,000' },
    { value: '5000-10000', label: language === 'ar' ? '5,000 - 10,000' : '$5,000 - $10,000' },
    { value: '10000-50000', label: language === 'ar' ? '10,000 - 50,000' : '$10,000 - $50,000' },
    { value: '50000+', label: language === 'ar' ? 'أكثر من 50,000' : 'Over $50,000' }
  ];

  const memberCounts = [
    { value: '1-10', label: language === 'ar' ? '1-10 أعضاء' : '1-10 Members' },
    { value: '11-25', label: language === 'ar' ? '11-25 عضو' : '11-25 Members' },
    { value: '26-50', label: language === 'ar' ? '26-50 عضو' : '26-50 Members' },
    { value: '51-100', label: language === 'ar' ? '51-100 عضو' : '51-100 Members' },
    { value: '100+', label: language === 'ar' ? 'أكثر من 100' : '100+ Members' }
  ];

  const sortOptions = [
    { value: 'newest', label: language === 'ar' ? 'الأحدث' : 'Newest' },
    { value: 'oldest', label: language === 'ar' ? 'الأقدم' : 'Oldest' },
    { value: 'most-members', label: language === 'ar' ? 'الأكثر أعضاء' : 'Most Members' },
    { value: 'highest-budget', label: language === 'ar' ? 'أعلى ميزانية' : 'Highest Budget' },
    { value: 'ending-soon', label: language === 'ar' ? 'ينتهي قريباً' : 'Ending Soon' }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    
    if (value && !activeFilters.includes(key)) {
      setActiveFilters(prev => [...prev, key]);
    } else if (!value && activeFilters.includes(key)) {
      setActiveFilters(prev => prev.filter(f => f !== key));
    }
  };

  const removeFilter = (key: string) => {
    setFilters(prev => ({ ...prev, [key]: '' }));
    setActiveFilters(prev => prev.filter(f => f !== key));
  };

  const clearAllFilters = () => {
    setFilters({
      country: '',
      portal: '',
      groupType: '',
      budget: '',
      memberCount: '',
      sortBy: 'newest'
    });
    setActiveFilters([]);
  };

  const handleSearch = () => {
    // Dummy search logic - في التطبيق الحقيقي سيتم ربطه بقاعدة البيانات
    console.log('Searching with:', { searchQuery, filters });
    alert(language === 'ar' ? 
      `البحث عن: "${searchQuery}" مع الفلاتر المحددة` : 
      `Searching for: "${searchQuery}" with selected filters`
    );
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'ar' ? 'البحث الذكي المتقدم' : 'Advanced Smart Search'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'ar' ? 
                'ابحث عن المجموعات والفرص المناسبة لك باستخدام فلاتر متقدمة' : 
                'Find the right groups and opportunities using advanced filters'
              }
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700">
            <CardContent className="p-6">
              {/* Main Search Bar */}
              <div className="flex gap-3 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder={language === 'ar' ? 
                      'ابحث عن المجموعات، المنتجات، الخدمات...' : 
                      'Search for groups, products, services...'
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <Button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  variant="outline"
                  className="h-12 px-6 border-2 border-gray-200 hover:border-blue-500"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'فلترة متقدمة' : 'Advanced Filters'}
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showAdvancedFilters ? 'rotate-180' : ''}`} />
                </Button>
                <Button
                  onClick={handleSearch}
                  className="h-12 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <Search className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'بحث' : 'Search'}
                </Button>
              </div>

              {/* Advanced Filters */}
              {showAdvancedFilters && (
                <div className="border-t pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Country Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        {language === 'ar' ? 'الدولة' : 'Country'}
                      </label>
                      <Select value={filters.country} onValueChange={(value) => handleFilterChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'ar' ? 'اختر الدولة' : 'Select Country'} />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <div className="flex items-center gap-2">
                                <span>{country.flag}</span>
                                <span>{language === 'ar' ? country.name : country.nameEn}</span>
                                <Badge variant="secondary" className="text-xs">
                                  {country.activeGroups}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Portal Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {language === 'ar' ? 'البوابة' : 'Portal'}
                      </label>
                      <Select value={filters.portal} onValueChange={(value) => handleFilterChange('portal', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'ar' ? 'اختر البوابة' : 'Select Portal'} />
                        </SelectTrigger>
                        <SelectContent>
                          {portals.map((portal) => (
                            <SelectItem key={portal.value} value={portal.value}>
                              {portal.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Group Type Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        {language === 'ar' ? 'نوع المجموعة' : 'Group Type'}
                      </label>
                      <Select value={filters.groupType} onValueChange={(value) => handleFilterChange('groupType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'ar' ? 'اختر النوع' : 'Select Type'} />
                        </SelectTrigger>
                        <SelectContent>
                          {groupTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <DollarSign className="w-4 h-4 inline mr-1" />
                        {language === 'ar' ? 'الميزانية' : 'Budget'}
                      </label>
                      <Select value={filters.budget} onValueChange={(value) => handleFilterChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'ar' ? 'اختر الميزانية' : 'Select Budget'} />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Member Count Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        {language === 'ar' ? 'عدد الأعضاء' : 'Member Count'}
                      </label>
                      <Select value={filters.memberCount} onValueChange={(value) => handleFilterChange('memberCount', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'ar' ? 'اختر العدد' : 'Select Count'} />
                        </SelectTrigger>
                        <SelectContent>
                          {memberCounts.map((count) => (
                            <SelectItem key={count.value} value={count.value}>
                              {count.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sort By Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {language === 'ar' ? 'ترتيب حسب' : 'Sort By'}
                      </label>
                      <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange('sortBy', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {sortOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Active Filters */}
                  {activeFilters.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
                        {language === 'ar' ? 'الفلاتر النشطة:' : 'Active Filters:'}
                      </span>
                      {activeFilters.map((filterKey) => (
                        <Badge key={filterKey} variant="secondary" className="flex items-center gap-1">
                          {language === 'ar' ? 
                            (filterKey === 'country' ? 'الدولة' :
                             filterKey === 'portal' ? 'البوابة' :
                             filterKey === 'groupType' ? 'نوع المجموعة' :
                             filterKey === 'budget' ? 'الميزانية' :
                             filterKey === 'memberCount' ? 'عدد الأعضاء' : 'ترتيب') :
                            (filterKey === 'country' ? 'Country' :
                             filterKey === 'portal' ? 'Portal' :
                             filterKey === 'groupType' ? 'Group Type' :
                             filterKey === 'budget' ? 'Budget' :
                             filterKey === 'memberCount' ? 'Member Count' : 'Sort')
                          }
                          <X 
                            className="w-3 h-3 cursor-pointer hover:text-red-500" 
                            onClick={() => removeFilter(filterKey)}
                          />
                        </Badge>
                      ))}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllFilters}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        {language === 'ar' ? 'مسح الكل' : 'Clear All'}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSearch;

