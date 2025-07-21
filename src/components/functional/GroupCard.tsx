import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  DollarSign, 
  Calendar, 
  MapPin, 
  Star,
  Shield,
  Award,
  Clock
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { businessLogic } from '@/utils/dummyData';

interface GroupCardProps {
  group: {
    id: string;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    portal: string;
    country: string;
    budget: number;
    currency: string;
    members: number;
    maxMembers: number;
    status: string;
    createdBy: string;
    createdAt: string;
    endDate: string;
    requirements: string[];
    requirementsEn: string[];
    tags: string[];
    tagsEn: string[];
  };
  onJoin?: (groupId: string) => void;
  onSubmitOffer?: (groupId: string) => void;
}

export const GroupCard: React.FC<GroupCardProps> = ({ 
  group, 
  onJoin, 
  onSubmitOffer 
}) => {
  const { language, t } = useLanguage();

  const handleJoinGroup = () => {
    const result = businessLogic.joinGroup(group.id, 'current-user-id');
    if (result.success) {
      alert(language === 'ar' ? result.message : result.messageEn);
      onJoin?.(group.id);
    }
  };

  const handleSubmitOffer = () => {
    const result = businessLogic.submitOffer(group.id, {
      title: language === 'ar' ? 'عرض تجريبي' : 'Sample Offer',
      price: 1000,
      description: language === 'ar' ? 'وصف العرض' : 'Offer description'
    });
    if (result.success) {
      alert(language === 'ar' ? result.message : result.messageEn);
      onSubmitOffer?.(group.id);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'seeking-members':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'waiting-suppliers':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'seeking-members':
        return t('groups.seekingMembers');
      case 'waiting-suppliers':
        return t('groups.waitingSuppliers');
      case 'active':
        return t('groups.active');
      case 'completed':
        return t('groups.completed');
      default:
        return status;
    }
  };

  const title = language === 'ar' ? group.title : group.titleEn;
  const description = language === 'ar' ? group.description : group.descriptionEn;
  const requirements = language === 'ar' ? group.requirements : group.requirementsEn;
  const tags = language === 'ar' ? group.tags : group.tagsEn;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {group.country}
              </span>
            </div>
            <Badge className={getStatusColor(group.status)}>
              {getStatusText(group.status)}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {t('groups.members')}
              </div>
              <div className="text-xs text-gray-500">
                {group.members}/{group.maxMembers}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-500" />
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {t('groups.budget')}
              </div>
              <div className="text-xs text-gray-500">
                {group.budget.toLocaleString()} {group.currency}
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        {requirements.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {requirements.map((req, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {req.includes('KYC') && <Shield className="w-3 h-3 mr-1" />}
                  {req.includes('نقاط') || req.includes('Points') && <Award className="w-3 h-3 mr-1" />}
                  {req.includes('MCP') && <Star className="w-3 h-3 mr-1" />}
                  {req}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* End Date */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>
            {language === 'ar' ? 'ينتهي في' : 'Ends on'}: {new Date(group.endDate).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {group.status === 'seeking-members' && (
            <Button 
              onClick={handleJoinGroup}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Users className="w-4 h-4 mr-2" />
              {t('groups.join')}
            </Button>
          )}
          
          {(group.status === 'seeking-members' || group.status === 'waiting-suppliers') && (
            <Button 
              onClick={handleSubmitOffer}
              variant="outline" 
              className="flex-1 border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              {t('groups.submitOffer')}
            </Button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>{t('groups.members')}</span>
            <span>{Math.round((group.members / group.maxMembers) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(group.members / group.maxMembers) * 100}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;

