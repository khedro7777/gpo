import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, Filter, SlidersHorizontal, X, Star, 
  Clock, DollarSign, Users, MapPin, Building,
  Zap, Shield, Award
} from 'lucide-react';
import SmartDropdowns from './SmartDropdowns';

interface AdvancedSearchProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  query: string;
  country: string;
  portal: string;
  groupType: string;
  service: string;
  priceRange: [number, number];
  memberRange: [number, number];
  requiresKYC: boolean;
  requiresPoints: boolean;
  requiresMCP: boolean;
  sortBy: string;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    country: '',
    portal: '',
    groupType: '',
    service: '',
    priceRange: [0, 1000000],
    memberRange: [1, 100],
    requiresKYC: false,
    requiresPoints: false,
    requiresMCP: false,
    sortBy: 'relevance'
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearch = () => {
    const searchFilters = { ...filters, query: searchQuery };
    onSearch(searchFilters);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const addActiveFilter = (filterName: string) => {
    if (!activeFilters.includes(filterName)) {
      setActiveFilters(prev => [...prev, filterName]);
    }
  };

  const removeActiveFilter = (filterName: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filterName));
    // Reset the filter value
    if (filterName === 'requiresKYC') handleFilterChange('requiresKYC', false);
    if (filterName === 'requiresPoints') handleFilterChange('requiresPoints', false);
    if (filterName === 'requiresMCP') handleFilterChange('requiresMCP', false);
  };

  const clearAllFilters = () => {
    setFilters({
      query: '',
      country: '',
      portal: '',
      groupType: '',
      service: '',
      priceRange: [0, 1000000],
      memberRange: [1, 100],
      requiresKYC: false,
      requiresPoints: false,
      requiresMCP: false,
      sortBy: 'relevance'
    });
    setActiveFilters([]);
    setSearchQuery('');
  };

  const quickFilters = [
    { 
      id: 'high-budget', 
      label: 'ميزانية عالية', 
      icon: DollarSign, 
      action: () => {
        handleFilterChange('priceRange', [100000, 1000000]);
        addActiveFilter('high-budget');
      }
    },
    { 
      id: 'new-groups', 
      label: 'مجموعات جديدة', 
      icon: Clock, 
      action: () => {
        handleFilterChange('sortBy', 'newest');
        addActiveFilter('new-groups');
      }
    },
    { 
      id: 'verified-only', 
      label: 'موثق فقط', 
      icon: Shield, 
      action: () => {
        handleFilterChange('requiresKYC', true);
        addActiveFilter('verified-only');
      }
    },
    { 
      id: 'premium-members', 
      label: 'أعضاء مميزون', 
      icon: Star, 
      action: () => {
        handleFilterChange('requiresPoints', true);
        addActiveFilter('premium-members');
      }
    },
    { 
      id: 'mcp-certified', 
      label: 'معتمد MCP', 
      icon: Award, 
      action: () => {
        handleFilterChange('requiresMCP', true);
        addActiveFilter('mcp-certified');
      }
    },
    { 
      id: 'large-groups', 
      label: 'مجموعات كبيرة', 
      icon: Users, 
      action: () => {
        handleFilterChange('memberRange', [50, 100]);
        addActiveFilter('large-groups');
      }
    }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'الأكثر صلة' },
    { value: 'newest', label: 'الأحدث' },
    { value: 'oldest', label: 'الأقدم' },
    { value: 'budget-high', label: 'الميزانية (عالي إلى منخفض)' },
    { value: 'budget-low', label: 'الميزانية (منخفض إلى عالي)' },
    { value: 'members-high', label: 'عدد الأعضاء (عالي إلى منخفض)' },
    { value: 'members-low', label: 'عدد الأعضاء (منخفض إلى عالي)' },
    { value: 'rating', label: 'التقييم' }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
      <CardContent className="p-6">
        {/* Main Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute right-4 top-4 h-6 w-6 text-muted-foreground" />
            <Input
              placeholder="ابحث في البوابات والمجموعات النشطة..."
              className="pr-14 h-14 text-lg bg-white border-2 shadow-sm rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              dir="rtl"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-6 rounded-xl"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              <SlidersHorizontal className="mr-2 h-5 w-5" />
              فلترة متقدمة
            </Button>
            
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-xl"
              onClick={handleSearch}
            >
              <Search className="mr-2 h-5 w-5" />
              بحث
            </Button>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-gray-700">فلاتر سريعة:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickFilters.map(filter => (
              <Button
                key={filter.id}
                variant={activeFilters.includes(filter.id) ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={filter.action}
              >
                <filter.icon className="mr-1 h-4 w-4" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Active Filters Display */}
        {activeFilters.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium text-gray-700">الفلاتر النشطة:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-red-600 hover:text-red-700"
              >
                مسح الكل
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map(filter => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1"
                >
                  {quickFilters.find(f => f.id === filter)?.label}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-red-600"
                    onClick={() => removeActiveFilter(filter)}
                  />
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="border-t pt-6 space-y-6">
            {/* Smart Dropdowns */}
            <SmartDropdowns
              onCountryChange={(country) => handleFilterChange('country', country)}
              onPortalChange={(portal) => handleFilterChange('portal', portal)}
              onGroupTypeChange={(groupType) => handleFilterChange('groupType', groupType)}
              onServiceChange={(service) => handleFilterChange('service', service)}
            />

            {/* Price Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  نطاق الميزانية
                </label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="من"
                    value={filters.priceRange[0]}
                    onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value) || 0, filters.priceRange[1]])}
                    className="rounded-xl"
                  />
                  <Input
                    type="number"
                    placeholder="إلى"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value) || 1000000])}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  عدد الأعضاء
                </label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="من"
                    value={filters.memberRange[0]}
                    onChange={(e) => handleFilterChange('memberRange', [parseInt(e.target.value) || 1, filters.memberRange[1]])}
                    className="rounded-xl"
                  />
                  <Input
                    type="number"
                    placeholder="إلى"
                    value={filters.memberRange[1]}
                    onChange={(e) => handleFilterChange('memberRange', [filters.memberRange[0], parseInt(e.target.value) || 100])}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Requirements Checkboxes */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">المتطلبات:</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.requiresKYC}
                    onChange={(e) => {
                      handleFilterChange('requiresKYC', e.target.checked);
                      if (e.target.checked) addActiveFilter('requiresKYC');
                      else removeActiveFilter('requiresKYC');
                    }}
                    className="rounded"
                  />
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">KYC مطلوب</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.requiresPoints}
                    onChange={(e) => {
                      handleFilterChange('requiresPoints', e.target.checked);
                      if (e.target.checked) addActiveFilter('requiresPoints');
                      else removeActiveFilter('requiresPoints');
                    }}
                    className="rounded"
                  />
                  <Star className="h-4 w-4" />
                  <span className="text-sm">نقاط مطلوبة</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.requiresMCP}
                    onChange={(e) => {
                      handleFilterChange('requiresMCP', e.target.checked);
                      if (e.target.checked) addActiveFilter('requiresMCP');
                      else removeActiveFilter('requiresMCP');
                    }}
                    className="rounded"
                  />
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">اختبار MCP</span>
                </label>
              </div>
            </div>

            {/* Sort Options */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">ترتيب النتائج:</label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full h-12 px-4 border-2 rounded-xl bg-white"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdvancedSearch;

