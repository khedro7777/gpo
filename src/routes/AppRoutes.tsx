
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

// Pages
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import About from '@/pages/About';
import Support from '@/pages/Support';
import HowItWorks from '@/pages/HowItWorks';
import CreateGroup from '@/pages/groups/CreateGroup';
import GroupDetails from '@/pages/groups/GroupDetails';
import MyGroups from '@/pages/groups/MyGroups';
import Groups from '@/pages/Groups';
import Suppliers from '@/pages/suppliers/Suppliers';
import Services from '@/pages/Services';
import Arbitration from '@/pages/arbitration/Arbitration';
import CompanyIncorporation from '@/pages/gateways/CompanyIncorporation';
import CompanyFormation from '@/pages/formation/CompanyFormation';
import DocumentManagement from '@/pages/documents/DocumentManagement';
import Freelance from '@/pages/freelance/Freelance';
import Governance from '@/pages/governance/Governance';
import Contracts from '@/pages/contracts/Contracts';
import Notifications from '@/pages/notifications/Notifications';
import Offers from '@/pages/offers/Offers';
import Wallet from '@/pages/Wallet';
import Investment from '@/pages/investment/Investment';

// Auth Routes
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import RoleSelection from '@/pages/auth/RoleSelection';

// Service Routes
import { ServiceRoutes } from './ServiceRoutes';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes - Accessible without authentication */}
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/support" element={<Layout><Support /></Layout>} />
        <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/role-selection" element={<Layout><RoleSelection /></Layout>} />
        
        {/* Protected Routes - Require authentication */}
        <Route path="/dashboard" element={
          <Layout>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </Layout>
        } />
        
        <Route path="/profile" element={
          <Layout>
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          </Layout>
        } />

        {/* MCP Smart Box */}
        <Route path="/mcp" element={
          <Layout>
            <ProtectedRoute>
              {React.createElement(React.lazy(() => import('@/pages/mcp/MCPPage')))}
            </ProtectedRoute>
          </Layout>
        } />

        {/* Group Management Routes */}
        <Route path="/groups" element={
          <Layout>
            <ProtectedRoute>
              <Groups />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/my-groups" element={
          <Layout>
            <ProtectedRoute>
              <MyGroups />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/groups/:id" element={
          <Layout>
            <ProtectedRoute>
              <GroupDetails />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/groups/:groupId/room" element={
          <Layout>
            <ProtectedRoute>
              {React.createElement(React.lazy(() => import('@/pages/groups/GroupRoomPage')))}
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/create-group" element={
          <Layout>
            <ProtectedRoute>
              <CreateGroup />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/create-group/:type" element={
          <Layout>
            <ProtectedRoute>
              <CreateGroup />
            </ProtectedRoute>
          </Layout>
        } />

        {/* Business Function Routes */}
        <Route path="/suppliers" element={<Layout><Suppliers /></Layout>} />
        <Route path="/suppliers/register" element={
          <Layout>
            <ProtectedRoute>
              <div className="min-h-screen bg-background py-8">
                <div className="container mx-auto px-4">
                  <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">تسجيل كمورد معتمد</h1>
                    <Suspense fallback={<LoadingSpinner />}>
                      {React.createElement(React.lazy(() => import('@/components/suppliers/SupplierRegistration')))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/freelance" element={<Layout><Freelance /></Layout>} />
        <Route path="/governance" element={
          <Layout>
            <ProtectedRoute>
              <Governance />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/investment" element={
          <Layout>
            <ProtectedRoute>
              <Investment />
            </ProtectedRoute>
          </Layout>
        } />
        
        {/* Company Formation Routes */}
        <Route path="/company-incorporation" element={
          <Layout>
            <ProtectedRoute>
              <CompanyIncorporation />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/company-formation" element={
          <Layout>
            <ProtectedRoute>
              <CompanyFormation />
            </ProtectedRoute>
          </Layout>
        } />
        
        {/* Service and Management Routes */}
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contracts" element={
          <Layout>
            <ProtectedRoute>
              <Contracts />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/offers" element={
          <Layout>
            <ProtectedRoute>
              <Offers />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/offers/sent" element={
          <Layout>
            <ProtectedRoute>
              <div className="min-h-screen bg-background py-8">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold mb-8">العروض المرسلة</h1>
                  <p className="text-muted-foreground">عرض جميع العروض التي قمت بإرسالها</p>
                </div>
              </div>
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/offers/received" element={
          <Layout>
            <ProtectedRoute>
              <div className="min-h-screen bg-background py-8">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold mb-8">العروض المستلمة</h1>
                  <p className="text-muted-foreground">عرض جميع العروض التي تلقيتها</p>
                </div>
              </div>
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/wallet" element={
          <Layout>
            <ProtectedRoute>
              <Wallet />
            </ProtectedRoute>
          </Layout>
        } />
        
        {/* Communication and Support Routes */}
        <Route path="/notifications" element={
          <Layout>
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/arbitration" element={
          <Layout>
            <ProtectedRoute>
              <Arbitration />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/disputes" element={
          <Layout>
            <ProtectedRoute>
              <div className="min-h-screen bg-background py-8">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold mb-8">إدارة النزاعات - ORDA</h1>
                  <p className="text-muted-foreground">نظام حل النزاعات الرقمي المتقدم</p>
                </div>
              </div>
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/documents" element={
          <Layout>
            <ProtectedRoute>
              <DocumentManagement />
            </ProtectedRoute>
          </Layout>
        } />

        {/* Additional Portal Routes */}
        <Route path="/products" element={
          <Layout>
            <ProtectedRoute>
              <div className="min-h-screen bg-background py-8">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold mb-8">قوائم المنتجات</h1>
                  <p className="text-muted-foreground">عرض وتسويق المنتجات للمجموعات المختلفة</p>
                </div>
              </div>
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/negotiation" element={
          <Layout>
            <ProtectedRoute>
              <div className="min-h-screen bg-background py-8">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold mb-8">حلول التفاوض الذكية</h1>
                  <p className="text-muted-foreground">أدوات ذكية لتسهيل التفاوض والتوصل لاتفاقات</p>
                </div>
              </div>
            </ProtectedRoute>
          </Layout>
        } />

        {/* Verification and Settings */}
        <Route path="/verification" element={
          <Layout>
            <ProtectedRoute>
              <div className="min-h-screen bg-background py-8">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold mb-8">التحقق من الهوية</h1>
                  <p className="text-muted-foreground">أكمل عملية التحقق من هويتك لتفعيل جميع المزايا</p>
                </div>
              </div>
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/settings" element={
          <Layout>
            <ProtectedRoute>
              <div className="min-h-screen bg-background py-8">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold mb-8">إعدادات الحساب</h1>
                  <p className="text-muted-foreground">إدارة إعدادات حسابك وتفضيلاتك</p>
                </div>
              </div>
            </ProtectedRoute>
          </Layout>
        } />

        {/* Service-specific routes */}
        <Route path="/services/*" element={<Layout><ServiceRoutes /></Layout>} />

        {/* Admin Monitor Access - Hidden route */}
        <Route path="/admin-monitor-access" element={
          <Layout>
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="max-w-md mx-auto text-center p-8">
                <h1 className="text-2xl font-bold mb-4">GPO Admin Access Portal</h1>
                <p className="text-muted-foreground mb-6">
                  This area is reserved for internal governance, observation, and content control.
                </p>
                <Button 
                  onClick={() => window.open('https://cms.gpo.example.com/admin', '_blank')}
                  className="w-full"
                >
                  Enter Admin Dashboard
                </Button>
              </div>
            </div>
          </Layout>
        } />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={
          <Layout>
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
                <p className="text-muted-foreground mb-6">الصفحة غير موجودة</p>
                <Button
                  onClick={() => window.location.href = '/'}
                  className="text-primary hover:underline inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors"
                >
                  العودة للصفحة الرئيسية
                </Button>
              </div>
            </div>
          </Layout>
        } />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
