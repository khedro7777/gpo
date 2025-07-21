import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Inbox, Send, Archive, Users, MessageSquare, FileText, 
  Clock, CheckCircle, AlertCircle, Mail, Download, Upload,
  Eye, ThumbsUp, ThumbsDown, Minus, Vote, Shield, Bell,
  UserPlus, ExternalLink, Copy, Calendar, Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GroupRoomProps {
  groupId: string;
  userRole: 'founder' | 'member' | 'moderator';
}

interface InboxItem {
  id: string;
  source: 'supplier' | 'freelancer' | 'visitor' | 'system';
  type: 'offer' | 'inquiry' | 'application' | 'notification';
  sender: string;
  subject: string;
  content: string;
  attachments: string[];
  receivedAt: Date;
  processed: boolean;
  priority: 'high' | 'medium' | 'low';
}

interface OutboxItem {
  id: string;
  recipient: string;
  type: 'invitation' | 'response' | 'notification' | 'decision';
  subject: string;
  content: string;
  sentBy: string;
  sentAt: Date;
  delivered: boolean;
  readReceipt: boolean;
}

interface ArchiveItem {
  id: string;
  type: 'decision' | 'minutes' | 'accepted_offer' | 'contract' | 'vote_result';
  title: string;
  content: string;
  createdAt: Date;
  createdBy: string;
  category: string;
  tags: string[];
}

interface VotingSession {
  id: string;
  title: string;
  description: string;
  type: 'supplier_selection' | 'freelancer_selection' | 'internal_decision';
  options: VotingOption[];
  deadline: Date;
  initiatedBy: string;
  status: 'active' | 'completed' | 'cancelled';
  eligibleVoters: string[];
  votes: Vote[];
}

interface VotingOption {
  id: string;
  label: string;
  description: string;
}

interface Vote {
  voterId: string;
  optionId: string;
  timestamp: Date;
}

const GroupRoom: React.FC<GroupRoomProps> = ({ groupId, userRole }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [inboxItems, setInboxItems] = useState<InboxItem[]>([]);
  const [outboxItems, setOutboxItems] = useState<OutboxItem[]>([]);
  const [archiveItems, setArchiveItems] = useState<ArchiveItem[]>([]);
  const [votingSessions, setVotingSessions] = useState<VotingSession[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');

  // Sample data
  useEffect(() => {
    setInboxItems([
      {
        id: '1',
        source: 'supplier',
        type: 'offer',
        sender: 'شركة التقنية المتقدمة',
        subject: 'عرض أسعار أجهزة اللابتوب',
        content: 'نتشرف بتقديم عرضنا لتوريد 50 جهاز لابتوب بمواصفات عالية...',
        attachments: ['offer_details.pdf', 'price_list.xlsx'],
        receivedAt: new Date('2024-01-15T10:30:00'),
        processed: false,
        priority: 'high'
      },
      {
        id: '2',
        source: 'freelancer',
        type: 'application',
        sender: 'أحمد محمد - مطور ويب',
        subject: 'طلب انضمام لمشروع التطوير',
        content: 'أرغب في الانضمام لمشروع تطوير الموقع الإلكتروني...',
        attachments: ['portfolio.pdf'],
        receivedAt: new Date('2024-01-14T14:20:00'),
        processed: false,
        priority: 'medium'
      }
    ]);

    setOutboxItems([
      {
        id: '1',
        recipient: 'supplier@techcompany.com',
        type: 'invitation',
        subject: 'دعوة لتقديم عرض - مشروع أجهزة اللابتوب',
        content: 'ندعوكم لتقديم عرض أسعار لتوريد أجهزة لابتوب...',
        sentBy: 'مؤسس المجموعة',
        sentAt: new Date('2024-01-10T09:00:00'),
        delivered: true,
        readReceipt: true
      }
    ]);

    setArchiveItems([
      {
        id: '1',
        type: 'decision',
        title: 'قرار اختيار المورد الرئيسي',
        content: 'تم اتخاذ قرار باختيار شركة التقنية المتقدمة كمورد رئيسي...',
        createdAt: new Date('2024-01-12T16:00:00'),
        createdBy: 'مؤسس المجموعة',
        category: 'قرارات',
        tags: ['مورد', 'اختيار', 'تصويت']
      }
    ]);

    setVotingSessions([
      {
        id: '1',
        title: 'اختيار المورد النهائي',
        description: 'التصويت على اختيار المورد النهائي لمشروع أجهزة اللابتوب',
        type: 'supplier_selection',
        options: [
          { id: 'opt1', label: 'شركة التقنية المتقدمة', description: 'عرض شامل بسعر تنافسي' },
          { id: 'opt2', label: 'مؤسسة الحلول الذكية', description: 'جودة عالية مع ضمان ممتد' },
          { id: 'opt3', label: 'الامتناع عن التصويت', description: 'عدم اتخاذ قرار في الوقت الحالي' }
        ],
        deadline: new Date('2024-01-20T23:59:59'),
        initiatedBy: 'مؤسس المجموعة',
        status: 'active',
        eligibleVoters: ['user1', 'user2', 'user3'],
        votes: []
      }
    ]);
  }, []);

  const handleSendInvitation = () => {
    if (!inviteEmail) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال البريد الإلكتروني",
        variant: "destructive"
      });
      return;
    }

    // Simulate sending invitation
    const newOutboxItem: OutboxItem = {
      id: Date.now().toString(),
      recipient: inviteEmail,
      type: 'invitation',
      subject: 'دعوة لتقديم عرض',
      content: newMessage || 'ندعوكم لتقديم عرض لمجموعتنا...',
      sentBy: 'المستخدم الحالي',
      sentAt: new Date(),
      delivered: false,
      readReceipt: false
    };

    setOutboxItems(prev => [newOutboxItem, ...prev]);
    setInviteEmail('');
    setNewMessage('');

    toast({
      title: "تم إرسال الدعوة",
      description: `تم إرسال دعوة إلى ${inviteEmail} مع نسخة إلى بريدك الإلكتروني للتوثيق`,
    });
  };

  const handleVote = (sessionId: string, optionId: string) => {
    setVotingSessions(prev => prev.map(session => {
      if (session.id === sessionId) {
        const newVote: Vote = {
          voterId: 'current_user',
          optionId,
          timestamp: new Date()
        };
        return {
          ...session,
          votes: [...session.votes.filter(v => v.voterId !== 'current_user'), newVote]
        };
      }
      return session;
    }));

    toast({
      title: "تم تسجيل التصويت",
      description: "تم تسجيل صوتك بنجاح. التصويت مجهول ولا يمكن تغييره.",
    });
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'supplier': return <Users className="h-4 w-4 text-blue-600" />;
      case 'freelancer': return <UserPlus className="h-4 w-4 text-green-600" />;
      case 'visitor': return <Eye className="h-4 w-4 text-gray-600" />;
      case 'system': return <Bell className="h-4 w-4 text-orange-600" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">غرفة المجموعة</h1>
              <p className="text-gray-600">إدارة شاملة للتواصل والقرارات والتوثيق</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="px-3 py-1">
                <Shield className="mr-1 h-4 w-4" />
                {userRole === 'founder' ? 'مؤسس' : userRole === 'moderator' ? 'مشرف' : 'عضو'}
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                إعدادات
              </Button>
            </div>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white shadow-lg rounded-xl p-2">
            <TabsTrigger value="overview" className="rounded-lg">نظرة عامة</TabsTrigger>
            <TabsTrigger value="inbox" className="rounded-lg">صندوق الوارد</TabsTrigger>
            <TabsTrigger value="outbox" className="rounded-lg">صندوق الصادر</TabsTrigger>
            <TabsTrigger value="archive" className="rounded-lg">الأرشيف</TabsTrigger>
            <TabsTrigger value="voting" className="rounded-lg">التصويت</TabsTrigger>
            <TabsTrigger value="invitations" className="rounded-lg">الدعوات</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Inbox className="h-8 w-8 text-blue-600" />
                    <Badge className="bg-blue-600">{inboxItems.filter(item => !item.processed).length}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900 mb-1">
                    {inboxItems.length}
                  </div>
                  <p className="text-sm text-blue-700">رسائل واردة</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Send className="h-8 w-8 text-green-600" />
                    <Badge className="bg-green-600">{outboxItems.length}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-900 mb-1">
                    {outboxItems.filter(item => item.delivered).length}
                  </div>
                  <p className="text-sm text-green-700">رسائل مُرسلة</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Archive className="h-8 w-8 text-purple-600" />
                    <Badge className="bg-purple-600">{archiveItems.length}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-900 mb-1">
                    {archiveItems.length}
                  </div>
                  <p className="text-sm text-purple-700">مستندات مؤرشفة</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Vote className="h-8 w-8 text-orange-600" />
                    <Badge className="bg-orange-600">{votingSessions.filter(v => v.status === 'active').length}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-900 mb-1">
                    {votingSessions.length}
                  </div>
                  <p className="text-sm text-orange-700">جلسات تصويت</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  النشاط الأخير
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...inboxItems, ...outboxItems].slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      {getSourceIcon('source' in item ? item.source : 'system')}
                      <div className="flex-1">
                        <p className="font-medium text-sm">
                          {'sender' in item ? item.sender : item.recipient}
                        </p>
                        <p className="text-xs text-gray-600">
                          {'subject' in item ? item.subject : item.subject}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500">
                        {'receivedAt' in item ? 
                          item.receivedAt.toLocaleDateString('ar-SA') : 
                          item.sentAt.toLocaleDateString('ar-SA')
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inbox Tab */}
          <TabsContent value="inbox" className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Inbox className="h-5 w-5" />
                  صندوق الوارد ({inboxItems.length})
                </CardTitle>
                <CardDescription>
                  الرسائل الواردة من الموردين والمستقلين والزوار
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inboxItems.map((item) => (
                    <Card key={item.id} className={`border-l-4 ${item.processed ? 'border-l-green-500 bg-green-50' : 'border-l-blue-500 bg-blue-50'}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {getSourceIcon(item.source)}
                            <div>
                              <h4 className="font-semibold">{item.sender}</h4>
                              <p className="text-sm text-gray-600">{item.subject}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(item.priority)}>
                              {item.priority === 'high' ? 'عالي' : item.priority === 'medium' ? 'متوسط' : 'منخفض'}
                            </Badge>
                            <Badge variant={item.processed ? "default" : "secondary"}>
                              {item.processed ? 'تم المعالجة' : 'جديد'}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-4">{item.content}</p>
                        
                        {item.attachments.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2">المرفقات:</p>
                            <div className="flex flex-wrap gap-2">
                              {item.attachments.map((attachment, index) => (
                                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                                  <Download className="mr-1 h-3 w-3" />
                                  {attachment}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            {item.receivedAt.toLocaleString('ar-SA')}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="mr-1 h-4 w-4" />
                              عرض
                            </Button>
                            <Button size="sm">
                              <MessageSquare className="mr-1 h-4 w-4" />
                              رد
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Voting Tab */}
          <TabsContent value="voting" className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Vote className="h-5 w-5" />
                  جلسات التصويت النشطة
                </CardTitle>
                <CardDescription>
                  التصويت على القرارات المهمة للمجموعة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {votingSessions.filter(session => session.status === 'active').map((session) => (
                    <Card key={session.id} className="border-l-4 border-l-orange-500 bg-orange-50">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-lg">{session.title}</h4>
                            <p className="text-sm text-gray-600">{session.description}</p>
                          </div>
                          <Badge className="bg-orange-600">
                            <Clock className="mr-1 h-3 w-3" />
                            ينتهي في {Math.ceil((session.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} أيام
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-sm text-gray-600 mb-4">
                            <strong>نوع القرار:</strong> {
                              session.type === 'supplier_selection' ? 'اختيار مورد' :
                              session.type === 'freelancer_selection' ? 'اختيار مستقل' :
                              'قرار داخلي'
                            }
                          </div>
                          
                          <div className="space-y-3">
                            {session.options.map((option) => {
                              const hasVoted = session.votes.some(vote => vote.voterId === 'current_user');
                              const userVote = session.votes.find(vote => vote.voterId === 'current_user');
                              const isSelected = userVote?.optionId === option.id;
                              
                              return (
                                <div key={option.id} className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                  isSelected ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                                }`}>
                                  <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                      <h5 className="font-semibold">{option.label}</h5>
                                      <p className="text-sm text-gray-600">{option.description}</p>
                                    </div>
                                    <Button
                                      size="sm"
                                      variant={isSelected ? "default" : "outline"}
                                      onClick={() => !hasVoted && handleVote(session.id, option.id)}
                                      disabled={hasVoted}
                                    >
                                      {isSelected ? (
                                        <>
                                          <CheckCircle className="mr-1 h-4 w-4" />
                                          تم التصويت
                                        </>
                                      ) : hasVoted ? (
                                        'تم التصويت'
                                      ) : (
                                        'صوت'
                                      )}
                                    </Button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {session.votes.some(vote => vote.voterId === 'current_user') && (
                            <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                              <div className="flex items-center gap-2 text-green-800">
                                <CheckCircle className="h-5 w-5" />
                                <span className="font-medium">تم تسجيل صوتك بنجاح</span>
                              </div>
                              <p className="text-sm text-green-700 mt-1">
                                التصويت مجهول ولا يمكن تغييره. سيتم إرسال نسخة من قرارك إلى بريدك الإلكتروني للتوثيق.
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Invitations Tab */}
          <TabsContent value="invitations" className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  إرسال دعوات
                </CardTitle>
                <CardDescription>
                  دعوة موردين أو مستقلين خارجيين لتقديم عروض
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">البريد الإلكتروني</label>
                        <Input
                          placeholder="supplier@company.com"
                          value={inviteEmail}
                          onChange={(e) => setInviteEmail(e.target.value)}
                          className="rounded-xl"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">رسالة الدعوة</label>
                        <Textarea
                          placeholder="اكتب رسالة الدعوة هنا..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          className="rounded-xl min-h-32"
                        />
                      </div>

                      <Button onClick={handleSendInvitation} className="w-full rounded-xl">
                        <Mail className="mr-2 h-4 w-4" />
                        إرسال الدعوة
                      </Button>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-blue-900 mb-3">ملاحظات مهمة:</h4>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 text-blue-600" />
                          سيتم إرسال نسخة من الدعوة إلى بريدك الإلكتروني للتوثيق
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 text-blue-600" />
                          المدعو لا يحتاج لتسجيل كامل، فقط صفحة تقديم العرض
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 text-blue-600" />
                          سيتم حفظ جميع التفاصيل في صندوق الصادر
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GroupRoom;

