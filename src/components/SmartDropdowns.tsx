import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, Users, Briefcase } from 'lucide-react';

interface SmartDropdownsProps {
  onCountryChange: (country: string) => void;
  onPortalChange: (portal: string) => void;
  onGroupTypeChange: (groupType: string) => void;
  onServiceChange: (service: string) => void;
}

const SmartDropdowns: React.FC<SmartDropdownsProps> = ({
  onCountryChange,
  onPortalChange,
  onGroupTypeChange,
  onServiceChange
}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPortal, setSelectedPortal] = useState('');
  const [selectedGroupType, setSelectedGroupType] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const countries = [
    { value: 'SA', label: '🇸🇦 السعودية', groups: 245 },
    { value: 'AE', label: '🇦🇪 الإمارات', groups: 189 },
    { value: 'EG', label: '🇪🇬 مصر', groups: 156 },
    { value: 'QA', label: '🇶🇦 قطر', groups: 98 },
    { value: 'KW', label: '🇰🇼 الكويت', groups: 87 },
    { value: 'BH', label: '🇧🇭 البحرين', groups: 65 },
    { value: 'OM', label: '🇴🇲 عُمان', groups: 54 },
    { value: 'JO', label: '🇯🇴 الأردن', groups: 43 },
    { value: 'LB', label: '🇱🇧 لبنان', groups: 32 },
    { value: 'MA', label: '🇲🇦 المغرب', groups: 28 }
  ];

  const portals = [
    { value: 'cooperative-purchasing', label: 'الشراء التعاوني', groups: 45 },
    { value: 'cooperative-marketing', label: 'التسويق التعاوني', groups: 32 },
    { value: 'company-formation', label: 'تأسيس الشركات', groups: 18 },
    { value: 'investment-groups', label: 'مجموعات الاستثمار', groups: 12 },
    { value: 'suppliers', label: 'الموردون', groups: 67 },
    { value: 'freelancers', label: 'المستقلون', groups: 89 },
    { value: 'freelancer-groups', label: 'مجموعات المستقلين', groups: 24 },
    { value: 'service-providers', label: 'مقدمو الخدمات', groups: 156 },
    { value: 'product-listings', label: 'قوائم المنتجات', groups: 234 },
    { value: 'arbitration-documentation', label: 'التحكيم والتوثيق', groups: 8 },
    { value: 'arbitration-requests', label: 'طلبات التحكيم', groups: 15 },
    { value: 'smart-negotiation', label: 'حلول التفاوض الذكية', groups: 28 }
  ];

  const groupTypes = [
    { value: 'seeking-members', label: 'بحث عن أعضاء', count: 156 },
    { value: 'seeking-suppliers', label: 'بحث عن موردين', count: 89 },
    { value: 'seeking-freelancers', label: 'بحث عن مستقلين', count: 67 },
    { value: 'active-negotiation', label: 'مرحلة التفاوض', count: 45 },
    { value: 'voting-phase', label: 'مرحلة التصويت', count: 32 },
    { value: 'implementation', label: 'مرحلة التنفيذ', count: 28 }
  ];

  const platformServices = [
    { value: 'group-management', label: 'إدارة المجموعات', icon: Users },
    { value: 'contract-drafting', label: 'صياغة العقود', icon: Building },
    { value: 'arbitration-services', label: 'خدمات التحكيم', icon: Briefcase },
    { value: 'ai-assistance', label: 'المساعدة الذكية', icon: MapPin },
    { value: 'payment-processing', label: 'معالجة المدفوعات', icon: Building },
    { value: 'document-management', label: 'إدارة الوثائق', icon: Users }
  ];

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    onCountryChange(value);
  };

  const handlePortalChange = (value: string) => {
    setSelectedPortal(value);
    onPortalChange(value);
  };

  const handleGroupTypeChange = (value: string) => {
    setSelectedGroupType(value);
    onGroupTypeChange(value);
  };

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    onServiceChange(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Country Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          الدولة
        </label>
        <Select value={selectedCountry} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-full h-12 bg-white border-2 rounded-xl">
            <SelectValue placeholder="اختر الدولة" />
          </SelectTrigger>
          <SelectContent>
            {countries.map(country => (
              <SelectItem key={country.value} value={country.value}>
                <div className="flex items-center justify-between w-full">
                  <span>{country.label}</span>
                  <Badge variant="secondary" className="ml-2">
                    {country.groups}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Portal Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Building className="h-4 w-4" />
          البوابة
        </label>
        <Select value={selectedPortal} onValueChange={handlePortalChange}>
          <SelectTrigger className="w-full h-12 bg-white border-2 rounded-xl">
            <SelectValue placeholder="اختر البوابة" />
          </SelectTrigger>
          <SelectContent>
            {portals.map(portal => (
              <SelectItem key={portal.value} value={portal.value}>
                <div className="flex items-center justify-between w-full">
                  <span>{portal.label}</span>
                  <Badge variant="secondary" className="ml-2">
                    {portal.groups}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Group Type Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Users className="h-4 w-4" />
          نوع المجموعة
        </label>
        <Select value={selectedGroupType} onValueChange={handleGroupTypeChange}>
          <SelectTrigger className="w-full h-12 bg-white border-2 rounded-xl">
            <SelectValue placeholder="اختر النوع" />
          </SelectTrigger>
          <SelectContent>
            {groupTypes.map(type => (
              <SelectItem key={type.value} value={type.value}>
                <div className="flex items-center justify-between w-full">
                  <span>{type.label}</span>
                  <Badge variant="secondary" className="ml-2">
                    {type.count}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Platform Services Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          خدمات المنصة
        </label>
        <Select value={selectedService} onValueChange={handleServiceChange}>
          <SelectTrigger className="w-full h-12 bg-white border-2 rounded-xl">
            <SelectValue placeholder="اختر الخدمة" />
          </SelectTrigger>
          <SelectContent>
            {platformServices.map(service => (
              <SelectItem key={service.value} value={service.value}>
                <div className="flex items-center gap-2">
                  <service.icon className="h-4 w-4" />
                  <span>{service.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SmartDropdowns;

