import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Bot, 
  MessageCircle, 
  Zap, 
  Brain,
  Send,
  Mic,
  Settings,
  Star,
  Activity
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { businessLogic } from '@/utils/dummyData';

interface AIAgentCardProps {
  agent: {
    id: string;
    name: string;
    nameEn: string;
    role: string;
    roleEn: string;
    description: string;
    descriptionEn: string;
    avatar: string;
    status: string;
    specialties: string[];
    specialtiesEn: string[];
  };
  onConsult?: (agentId: string, query: string) => void;
}

export const AIAgentCard: React.FC<AIAgentCardProps> = ({ 
  agent, 
  onConsult 
}) => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [isConsulting, setIsConsulting] = useState(false);
  const [lastResponse, setLastResponse] = useState('');

  const handleConsult = async () => {
    if (!query.trim()) return;
    
    setIsConsulting(true);
    
    try {
      const result = businessLogic.consultAgent(agent.id, query, language);
      if (result.success) {
        setLastResponse(result.response);
        onConsult?.(agent.id, query);
        setQuery('');
      }
    } catch (error) {
      console.error('Error consulting agent:', error);
    } finally {
      setIsConsulting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'busy':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const name = language === 'ar' ? agent.name : agent.nameEn;
  const role = language === 'ar' ? agent.role : agent.roleEn;
  const description = language === 'ar' ? agent.description : agent.descriptionEn;
  const specialties = language === 'ar' ? agent.specialties : agent.specialtiesEn;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(agent.status)}`}></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="p-1">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                <Brain className="w-3 h-3 mr-1" />
                {specialty}
              </Badge>
            ))}
            {specialties.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{specialties.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              98%
            </div>
            <div className="text-xs text-gray-500">
              {language === 'ar' ? 'دقة' : 'Accuracy'}
            </div>
          </div>
          <div className="text-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              2.1s
            </div>
            <div className="text-xs text-gray-500">
              {language === 'ar' ? 'استجابة' : 'Response'}
            </div>
          </div>
          <div className="text-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
              4.9
            </div>
            <div className="text-xs text-gray-500">
              <Star className="w-3 h-3 inline mr-1" />
              {language === 'ar' ? 'تقييم' : 'Rating'}
            </div>
          </div>
        </div>

        {/* Last Response */}
        {lastResponse && (
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Bot className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800 dark:text-blue-300">
                {lastResponse}
              </p>
            </div>
          </div>
        )}

        {/* Consultation Input */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder={language === 'ar' ? 'اسأل المساعد الذكي...' : 'Ask the AI assistant...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleConsult()}
              className="flex-1"
              disabled={isConsulting}
            />
            <Button 
              onClick={handleConsult}
              disabled={!query.trim() || isConsulting}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {isConsulting ? (
                <Activity className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs"
              onClick={() => setQuery(language === 'ar' ? 'ما هي أفضل استراتيجية؟' : 'What is the best strategy?')}
            >
              <Zap className="w-3 h-3 mr-1" />
              {language === 'ar' ? 'استراتيجية' : 'Strategy'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs"
              onClick={() => setQuery(language === 'ar' ? 'حلل السوق الحالي' : 'Analyze current market')}
            >
              <Brain className="w-3 h-3 mr-1" />
              {language === 'ar' ? 'تحليل' : 'Analysis'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs"
              onClick={() => setQuery(language === 'ar' ? 'اقترح حلول' : 'Suggest solutions')}
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              {language === 'ar' ? 'حلول' : 'Solutions'}
            </Button>
          </div>
        </div>

        {/* Activity Indicator */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Activity className="w-3 h-3" />
            <span>
              {language === 'ar' ? 'نشط منذ' : 'Active since'} 2 {language === 'ar' ? 'دقائق' : 'minutes'}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              {language === 'ar' ? 'استشارات اليوم:' : 'Today consultations:'} 47
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAgentCard;

