// Dummy data for testing all platform functionalities

export const dummyUsers = [
  {
    id: '1',
    name: 'أحمد محمد',
    nameEn: 'Ahmed Mohammed',
    email: 'ahmed@example.com',
    role: 'buyer',
    country: 'SA',
    verified: true,
    points: 1250,
    rating: 4.8,
    avatar: '/avatars/ahmed.jpg'
  },
  {
    id: '2',
    name: 'فاطمة علي',
    nameEn: 'Fatima Ali',
    email: 'fatima@example.com',
    role: 'supplier',
    country: 'AE',
    verified: true,
    points: 2100,
    rating: 4.9,
    avatar: '/avatars/fatima.jpg'
  },
  {
    id: '3',
    name: 'محمد الأحمد',
    nameEn: 'Mohammed Al-Ahmad',
    email: 'mohammed@example.com',
    role: 'freelancer',
    country: 'KW',
    verified: true,
    points: 1800,
    rating: 4.7,
    avatar: '/avatars/mohammed.jpg'
  }
];

export const dummyGroups = [
  {
    id: '1',
    title: 'مجموعة شراء أجهزة لابتوب للشركات',
    titleEn: 'Corporate Laptop Purchasing Group',
    description: 'شراء جماعي لأجهزة لابتوب عالية الأداء بخصم 40%',
    descriptionEn: 'Bulk purchase of high-performance laptops with 40% discount',
    portal: 'cooperative-purchasing',
    country: 'SA',
    budget: 150000,
    currency: 'SAR',
    members: 24,
    maxMembers: 50,
    status: 'seeking-members',
    createdBy: '1',
    createdAt: '2024-01-15',
    endDate: '2024-02-15',
    requirements: ['KYC مطلوب', 'نقاط مطلوبة'],
    requirementsEn: ['KYC Required', 'Points Required'],
    tags: ['تقنية', 'أجهزة', 'شركات'],
    tagsEn: ['Technology', 'Hardware', 'Corporate']
  },
  {
    id: '2',
    title: 'حملة تسويقية للمنتجات الصحية',
    titleEn: 'Health Products Marketing Campaign',
    description: 'حملة تسويق رقمي مشتركة للمنتجات الصحية والعضوية',
    descriptionEn: 'Joint digital marketing campaign for health and organic products',
    portal: 'cooperative-marketing',
    country: 'AE',
    budget: 75000,
    currency: 'AED',
    members: 18,
    maxMembers: 30,
    status: 'waiting-suppliers',
    createdBy: '2',
    createdAt: '2024-01-20',
    endDate: '2024-03-01',
    requirements: ['KYC مطلوب', 'نقاط مطلوبة'],
    requirementsEn: ['KYC Required', 'Points Required'],
    tags: ['تسويق', 'صحة', 'عضوي'],
    tagsEn: ['Marketing', 'Health', 'Organic']
  },
  {
    id: '3',
    title: 'تأسيس شركة تقنية في دبي',
    titleEn: 'Tech Company Formation in Dubai',
    description: 'تأسيس شركة تقنية متخصصة في الذكاء الاصطناعي',
    descriptionEn: 'Establishing a tech company specialized in artificial intelligence',
    portal: 'company-formation',
    country: 'AE',
    budget: 50000,
    currency: 'AED',
    members: 5,
    maxMembers: 10,
    status: 'active',
    createdBy: '3',
    createdAt: '2024-01-25',
    endDate: '2024-04-01',
    requirements: [],
    requirementsEn: [],
    tags: ['تأسيس', 'تقنية', 'ذكاء اصطناعي'],
    tagsEn: ['Formation', 'Technology', 'AI']
  }
];

export const dummyOffers = [
  {
    id: '1',
    groupId: '1',
    supplierId: '2',
    supplierName: 'شركة التقنية المتقدمة',
    supplierNameEn: 'Advanced Tech Company',
    title: 'عرض أجهزة لابتوب Dell Latitude',
    titleEn: 'Dell Latitude Laptop Offer',
    description: 'أجهزة لابتوب Dell Latitude 7420 بمعالج Intel i7 وذاكرة 16GB',
    descriptionEn: 'Dell Latitude 7420 laptops with Intel i7 processor and 16GB RAM',
    price: 4500,
    currency: 'SAR',
    quantity: 50,
    deliveryTime: '2-3 أسابيع',
    deliveryTimeEn: '2-3 weeks',
    warranty: 'ضمان 3 سنوات',
    warrantyEn: '3 years warranty',
    status: 'pending',
    submittedAt: '2024-01-16',
    validUntil: '2024-02-01'
  },
  {
    id: '2',
    groupId: '1',
    supplierId: '3',
    supplierName: 'مؤسسة الحاسوب الذكي',
    supplierNameEn: 'Smart Computer Enterprise',
    title: 'عرض أجهزة لابتوب HP EliteBook',
    titleEn: 'HP EliteBook Laptop Offer',
    description: 'أجهزة لابتوب HP EliteBook 840 G8 بمعالج Intel i7 وذاكرة 16GB',
    descriptionEn: 'HP EliteBook 840 G8 laptops with Intel i7 processor and 16GB RAM',
    price: 4200,
    currency: 'SAR',
    quantity: 50,
    deliveryTime: '1-2 أسابيع',
    deliveryTimeEn: '1-2 weeks',
    warranty: 'ضمان 3 سنوات',
    warrantyEn: '3 years warranty',
    status: 'approved',
    submittedAt: '2024-01-17',
    validUntil: '2024-02-05'
  }
];

export const dummyContracts = [
  {
    id: '1',
    groupId: '1',
    offerId: '2',
    title: 'عقد شراء أجهزة لابتوب HP EliteBook',
    titleEn: 'HP EliteBook Laptop Purchase Contract',
    status: 'draft',
    createdAt: '2024-01-18',
    terms: [
      'التسليم خلال 1-2 أسابيع من تاريخ التوقيع',
      'الدفع 50% مقدم و50% عند التسليم',
      'ضمان 3 سنوات شامل الصيانة',
      'إمكانية الإرجاع خلال 30 يوم'
    ],
    termsEn: [
      'Delivery within 1-2 weeks from signing date',
      'Payment 50% advance and 50% on delivery',
      '3 years warranty including maintenance',
      'Return option within 30 days'
    ]
  }
];

export const dummyVotes = [
  {
    id: '1',
    groupId: '1',
    title: 'التصويت على أفضل عرض لأجهزة اللابتوب',
    titleEn: 'Vote for Best Laptop Offer',
    description: 'يرجى التصويت على أفضل عرض من العروض المقدمة',
    descriptionEn: 'Please vote for the best offer from submitted proposals',
    type: 'offer-selection',
    status: 'active',
    startDate: '2024-01-18',
    endDate: '2024-01-25',
    options: [
      {
        id: '1',
        title: 'عرض شركة التقنية المتقدمة - Dell Latitude',
        titleEn: 'Advanced Tech Company Offer - Dell Latitude',
        votes: 15
      },
      {
        id: '2',
        title: 'عرض مؤسسة الحاسوب الذكي - HP EliteBook',
        titleEn: 'Smart Computer Enterprise Offer - HP EliteBook',
        votes: 18
      }
    ],
    totalVotes: 33,
    eligibleVoters: 24
  }
];

export const dummyMessages = [
  {
    id: '1',
    groupId: '1',
    senderId: '1',
    senderName: 'أحمد محمد',
    senderNameEn: 'Ahmed Mohammed',
    message: 'مرحباً جميعاً، متى سيتم اتخاذ القرار النهائي؟',
    messageEn: 'Hello everyone, when will the final decision be made?',
    timestamp: '2024-01-18T10:30:00Z',
    type: 'text'
  },
  {
    id: '2',
    groupId: '1',
    senderId: '2',
    senderName: 'فاطمة علي',
    senderNameEn: 'Fatima Ali',
    message: 'بعد انتهاء فترة التصويت يوم الجمعة القادم',
    messageEn: 'After the voting period ends next Friday',
    timestamp: '2024-01-18T10:35:00Z',
    type: 'text'
  }
];

export const dummyFiles = [
  {
    id: '1',
    groupId: '1',
    name: 'مواصفات أجهزة اللابتوب المطلوبة.pdf',
    nameEn: 'Required Laptop Specifications.pdf',
    type: 'pdf',
    size: '2.5 MB',
    uploadedBy: '1',
    uploadedAt: '2024-01-15T14:20:00Z',
    url: '/files/laptop-specs.pdf'
  },
  {
    id: '2',
    groupId: '1',
    name: 'مقارنة العروض.xlsx',
    nameEn: 'Offers Comparison.xlsx',
    type: 'excel',
    size: '1.8 MB',
    uploadedBy: '2',
    uploadedAt: '2024-01-17T16:45:00Z',
    url: '/files/offers-comparison.xlsx'
  }
];

export const dummyAIAgents = [
  {
    id: 'sami',
    name: 'سامي',
    nameEn: 'Sami',
    role: 'محلل الطلب',
    roleEn: 'Demand Analyst',
    description: 'يحلل احتياجات المجموعات ويقترح المهارات المطلوبة',
    descriptionEn: 'Analyzes group needs and suggests required skills',
    avatar: '/agents/sami.jpg',
    status: 'online',
    specialties: ['تحليل البيانات', 'دراسة السوق', 'التنبؤ'],
    specialtiesEn: ['Data Analysis', 'Market Research', 'Forecasting']
  },
  {
    id: 'nour',
    name: 'نور',
    nameEn: 'Nour',
    role: 'باحث السوق',
    roleEn: 'Market Researcher',
    description: 'يبحث في اتجاهات السوق ويحدد الفرص الاستثمارية',
    descriptionEn: 'Researches market trends and identifies investment opportunities',
    avatar: '/agents/nour.jpg',
    status: 'online',
    specialties: ['بحث السوق', 'تحليل المنافسين', 'الفرص الاستثمارية'],
    specialtiesEn: ['Market Research', 'Competitor Analysis', 'Investment Opportunities']
  }
];

export const dummyNotifications = [
  {
    id: '1',
    userId: '1',
    title: 'عرض جديد في مجموعة أجهزة اللابتوب',
    titleEn: 'New offer in Laptop Group',
    message: 'تم تقديم عرض جديد من شركة التقنية المتقدمة',
    messageEn: 'A new offer has been submitted by Advanced Tech Company',
    type: 'offer',
    read: false,
    createdAt: '2024-01-18T09:15:00Z'
  },
  {
    id: '2',
    userId: '1',
    title: 'بدء التصويت على العروض',
    titleEn: 'Voting on offers has started',
    message: 'يمكنك الآن التصويت على أفضل عرض لأجهزة اللابتوب',
    messageEn: 'You can now vote for the best laptop offer',
    type: 'voting',
    read: false,
    createdAt: '2024-01-18T08:00:00Z'
  }
];

export const dummyTransactions = [
  {
    id: '1',
    userId: '1',
    type: 'payment',
    amount: 2250,
    currency: 'SAR',
    description: 'دفعة مقدمة لمجموعة أجهزة اللابتوب',
    descriptionEn: 'Advance payment for laptop group',
    status: 'completed',
    date: '2024-01-18T12:00:00Z',
    reference: 'TXN-001'
  },
  {
    id: '2',
    userId: '1',
    type: 'points',
    amount: 50,
    description: 'نقاط مكافأة للمشاركة النشطة',
    descriptionEn: 'Reward points for active participation',
    status: 'completed',
    date: '2024-01-17T15:30:00Z',
    reference: 'PTS-001'
  }
];

// Business Logic Functions
export const businessLogic = {
  // Group Management
  joinGroup: (groupId: string, userId: string) => {
    console.log(`User ${userId} joining group ${groupId}`);
    return {
      success: true,
      message: 'تم الانضمام للمجموعة بنجاح',
      messageEn: 'Successfully joined the group'
    };
  },

  leaveGroup: (groupId: string, userId: string) => {
    console.log(`User ${userId} leaving group ${groupId}`);
    return {
      success: true,
      message: 'تم مغادرة المجموعة بنجاح',
      messageEn: 'Successfully left the group'
    };
  },

  createGroup: (groupData: any) => {
    console.log('Creating new group:', groupData);
    return {
      success: true,
      groupId: `group-${Date.now()}`,
      message: 'تم إنشاء المجموعة بنجاح',
      messageEn: 'Group created successfully'
    };
  },

  // Offer Management
  submitOffer: (groupId: string, offerData: any) => {
    console.log(`Submitting offer for group ${groupId}:`, offerData);
    return {
      success: true,
      offerId: `offer-${Date.now()}`,
      message: 'تم تقديم العرض بنجاح',
      messageEn: 'Offer submitted successfully'
    };
  },

  approveOffer: (offerId: string) => {
    console.log(`Approving offer ${offerId}`);
    return {
      success: true,
      message: 'تم قبول العرض',
      messageEn: 'Offer approved'
    };
  },

  rejectOffer: (offerId: string, reason: string) => {
    console.log(`Rejecting offer ${offerId} with reason: ${reason}`);
    return {
      success: true,
      message: 'تم رفض العرض',
      messageEn: 'Offer rejected'
    };
  },

  // Voting System
  castVote: (voteId: string, optionId: string, userId: string) => {
    console.log(`User ${userId} voting for option ${optionId} in vote ${voteId}`);
    return {
      success: true,
      message: 'تم تسجيل صوتك بنجاح',
      messageEn: 'Your vote has been recorded successfully'
    };
  },

  // Contract Management
  generateContract: (groupId: string, offerId: string) => {
    console.log(`Generating contract for group ${groupId} and offer ${offerId}`);
    return {
      success: true,
      contractId: `contract-${Date.now()}`,
      message: 'تم إنشاء العقد بنجاح',
      messageEn: 'Contract generated successfully'
    };
  },

  signContract: (contractId: string, userId: string) => {
    console.log(`User ${userId} signing contract ${contractId}`);
    return {
      success: true,
      message: 'تم توقيع العقد بنجاح',
      messageEn: 'Contract signed successfully'
    };
  },

  // Payment System
  processPayment: (amount: number, currency: string, userId: string) => {
    console.log(`Processing payment of ${amount} ${currency} for user ${userId}`);
    return {
      success: true,
      transactionId: `txn-${Date.now()}`,
      message: 'تم الدفع بنجاح',
      messageEn: 'Payment processed successfully'
    };
  },

  // AI Agent Interaction
  consultAgent: (agentId: string, query: string, language: string) => {
    console.log(`Consulting agent ${agentId} with query: ${query} in ${language}`);
    const responses = {
      ar: {
        sami: 'بناءً على تحليل البيانات، أنصح بالتركيز على المواصفات التقنية والسعر',
        nour: 'السوق يتجه نحو الأجهزة المحمولة عالية الأداء، هذا وقت مناسب للشراء'
      },
      en: {
        sami: 'Based on data analysis, I recommend focusing on technical specifications and price',
        nour: 'The market is trending towards high-performance portable devices, this is a good time to buy'
      }
    };
    
    return {
      success: true,
      response: responses[language as keyof typeof responses]?.[agentId as keyof typeof responses.ar] || 'Agent response not available',
      agentName: agentId,
      timestamp: new Date().toISOString()
    };
  },

  // Search and Filter
  searchGroups: (filters: any) => {
    console.log('Searching groups with filters:', filters);
    return {
      success: true,
      results: dummyGroups.filter(group => {
        if (filters.country && group.country !== filters.country) return false;
        if (filters.portal && group.portal !== filters.portal) return false;
        return true;
      }),
      total: dummyGroups.length
    };
  },

  // Notification System
  markNotificationRead: (notificationId: string) => {
    console.log(`Marking notification ${notificationId} as read`);
    return {
      success: true,
      message: 'تم تحديث الإشعار',
      messageEn: 'Notification updated'
    };
  },

  // File Management
  uploadFile: (groupId: string, file: any) => {
    console.log(`Uploading file to group ${groupId}:`, file);
    return {
      success: true,
      fileId: `file-${Date.now()}`,
      url: `/files/${file.name}`,
      message: 'تم رفع الملف بنجاح',
      messageEn: 'File uploaded successfully'
    };
  },

  downloadFile: (fileId: string) => {
    console.log(`Downloading file ${fileId}`);
    return {
      success: true,
      message: 'جاري تحميل الملف',
      messageEn: 'File download started'
    };
  }
};

export default {
  dummyUsers,
  dummyGroups,
  dummyOffers,
  dummyContracts,
  dummyVotes,
  dummyMessages,
  dummyFiles,
  dummyAIAgents,
  dummyNotifications,
  dummyTransactions,
  businessLogic
};

