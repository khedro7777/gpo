import React from 'react';
import { useParams } from 'react-router-dom';
import GroupRoom from '@/components/GroupRoom';

const GroupRoomPage = () => {
  const { groupId } = useParams<{ groupId: string }>();
  
  // In a real app, you would fetch user role from context/API
  const userRole = 'member' as 'founder' | 'member' | 'moderator';

  if (!groupId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">خطأ</h1>
          <p className="text-gray-600">معرف المجموعة غير صحيح</p>
        </div>
      </div>
    );
  }

  return <GroupRoom groupId={groupId} userRole={userRole} />;
};

export default GroupRoomPage;

