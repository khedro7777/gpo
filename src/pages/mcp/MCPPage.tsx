import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Bot, Brain, Sparkles, Target, TrendingUp, Scale, Gavel, 
  Handshake, UserCheck, Store, Award, Star, Globe, Shield,
  MessageSquare, Zap, Activity, BarChart3, Users, Clock,
  CheckCircle, AlertCircle, Lightbulb, Rocket
} from 'lucide-react';

const MCPPage = () => {
  const [selectedAgent, setSelectedAgent] = useState('sami');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, agent: 'سامي', message: 'مرحباً! أنا سامي، محلل الطلب. كيف يمكنني مساعدتك في تحليل احتياجات مجموعتك؟', timestamp: '10:30' },
  ]);

  const agents = [
    { 
      id: 'sami', 
      name: 'سامي', 
      role: 'محلل الطلب', 
      icon: Target, 
      color: 'from-blue-500 to-blue-600',
      status: 'online',
      expertise: ['تحليل الاحتياجات', 'مطابقة المهارات', 'تقدير الميزانية'],
      description: 'متخصص في تحليل احتياجات المجموعات وتحديد المهارات المطلوبة',
      performance: 95
    },
    { 
      id: 'nour', 
      name: 'نور', 
      role: 'باحث السوق', 
      icon: TrendingUp, 
      color: 'from-green-500 to-green-600',
      status: 'online',
      expertise: ['بحث السوق', 'تحليل الاتجاهات', 'تحديد الفرص'],
      description: 'خبير في أبحاث السوق وتحليل الاتجاهات الاستثمارية',
      performance: 92
    },
    { 
      id: 'lina', 
      name: 'لينا', 
      role: 'مساعد قانوني', 
      icon: Scale, 
      color: 'from-purple-500 to-purple-600',
      status: 'online',
      expertise: ['مراجعة العقود', 'الاستشارة القانونية', 'الامتثال'],
      description: 'مساعد قانوني ذكي لمراجعة العقود والمشورة القانونية',
      performance: 98
    },
    { 
      id: 'ziad', 
      name: 'زياد', 
      role: 'مشرف التحكيم', 
      icon: Gavel, 
      color: 'from-red-500 to-red-600',
      status: 'busy',
      expertise: ['حل النزاعات', 'التحكيم', 'التقييم المحايد'],
      description: 'مشرف على عمليات التحكيم وحل النزاعات الرقمية',
      performance: 96
    },
    { 
      id: 'hani', 
      name: 'هاني', 
      role: 'مدرب التفاوض', 
      icon: Handshake, 
      color: 'from-orange-500 to-orange-600',
      status: 'online',
      expertise: ['استراتيجيات التفاوض', 'تحليل العروض', 'تحسين الصفقات'],
      description: 'خبير في استراتيجيات التفاوض وتحسين الصفقات',
      performance: 94
    },
    { 
      id: 'dana', 
      name: 'دانا', 
      role: 'مقيم المستقلين', 
      icon: UserCheck, 
      color: 'from-pink-500 to-pink-600',
      status: 'online',
      expertise: ['تقييم الأداء', 'كشف الاحتيال', 'التوصيات'],
      description: 'متخصص في تقييم المستقلين وكشف السلوك المشبوه',
      performance: 97
    }
  ];

  const currentAgent = agents.find(agent => agent.id === selectedAgent) || agents[0];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'متاح';
      case 'busy': return 'مشغول';
      case 'offline': return 'غير متاح';
      default: return 'غير معروف';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                مركز المساعدين الأذكياء
              </h1>
              <p className="text-muted-foreground">تفاعل مع 12 مساعد ذكي متخصص لتحسين تجربتك</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Agents List */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  المساعدين المتاحين
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedAgent === agent.id 
                        ? 'bg-primary/10 border-2 border-primary' 
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                    onClick={() => setSelectedAgent(agent.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${agent.color}`}>
                        <agent.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{agent.name}</span>
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`}></div>
                        </div>
                        <div className="text-xs text-muted-foreground">{agent.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="chat" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="chat">المحادثة</TabsTrigger>
                <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
                <TabsTrigger value="analytics">التحليلات</TabsTrigger>
                <TabsTrigger value="settings">الإعدادات</TabsTrigger>
              </TabsList>

              {/* Chat Tab */}
              <TabsContent value="chat">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${currentAgent.color} shadow-lg`}>
                          <currentAgent.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{currentAgent.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            {currentAgent.role}
                            <Badge variant="outline" className={`text-xs ${getStatusColor(currentAgent.status)} text-white`}>
                              {getStatusText(currentAgent.status)}
                            </Badge>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{currentAgent.performance}%</div>
                        <div className="text-xs text-muted-foreground">معدل الأداء</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Chat Messages */}
                    <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto mb-4">
                      {chatMessages.map((message) => (
                        <div key={message.id} className="mb-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary rounded-lg">
                              <Bot className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm">{message.agent}</span>
                                <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                              </div>
                              <div className="bg-white p-3 rounded-lg shadow-sm">
                                {message.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chat Input */}
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder={`اكتب رسالتك إلى ${currentAgent.name}...`}
                        className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        dir="rtl"
                      />
                      <Button>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        إرسال
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>ملف {currentAgent.name} الشخصي</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${currentAgent.color} shadow-lg`}>
                        <currentAgent.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{currentAgent.name}</h3>
                        <p className="text-muted-foreground">{currentAgent.role}</p>
                        <p className="text-sm mt-2">{currentAgent.description}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">مجالات الخبرة</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentAgent.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">معدل الأداء</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>الأداء العام</span>
                          <span className="font-semibold">{currentAgent.performance}%</span>
                        </div>
                        <Progress value={currentAgent.performance} className="h-2" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">1,247</div>
                        <div className="text-sm text-muted-foreground">مهمة مكتملة</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">98.5%</div>
                        <div className="text-sm text-muted-foreground">معدل النجاح</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-600">2.3 ثانية</div>
                        <div className="text-sm text-muted-foreground">متوسط الاستجابة</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>إحصائيات الاستخدام</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>المحادثات اليوم</span>
                          <span className="font-bold">23</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>المهام المكتملة</span>
                          <span className="font-bold">18</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>معدل الرضا</span>
                          <span className="font-bold">4.8/5</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>التوصيات الذكية</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-semibold text-sm">تحسين الاستراتيجية</div>
                            <div className="text-xs text-muted-foreground">يمكن تحسين نتائج التفاوض بنسبة 15%</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <Rocket className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <div className="font-semibold text-sm">فرصة جديدة</div>
                            <div className="text-xs text-muted-foreground">مجموعة شراء جديدة تناسب اهتماماتك</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>إعدادات المساعد الذكي</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">تفضيلات التفاعل</h4>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span>إشعارات فورية للتوصيات المهمة</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span>تحليل تلقائي للفرص الجديدة</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="rounded" />
                          <span>تقارير أسبوعية مفصلة</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">مستوى التفصيل</h4>
                      <select className="w-full p-3 border rounded-lg">
                        <option>مبسط - توصيات أساسية</option>
                        <option selected>متوسط - تحليل متوازن</option>
                        <option>متقدم - تحليل شامل ومفصل</option>
                      </select>
                    </div>

                    <Button className="w-full">
                      حفظ الإعدادات
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCPPage;

