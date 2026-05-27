import { Route, Routes } from 'react-router-dom'
import MarketingLayout from './layouts/MarketingLayout'
import PortalLayout from './layouts/PortalLayout'
import HomePage from './pages/marketing/HomePage'
import ProductsPage from './pages/marketing/ProductsPage'
import ProductDetailPage from './pages/marketing/ProductDetailPage'
import TeamPage from './pages/marketing/TeamPage'
import TestimonialsPage from './pages/marketing/TestimonialsPage'
import ContactPage from './pages/marketing/ContactPage'
import SignInPage from './pages/auth/SignInPage'
import SignUpPage from './pages/auth/SignUpPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import PortalDashboardPage from './pages/portal/DashboardPage'
import PortalTransactionsPage from './pages/portal/TransactionsPage'
import PortalLoansPage from './pages/portal/LoansPage'
import PortalTerminalsPage from './pages/portal/TerminalsPage'
import PortalSupportPage from './pages/portal/SupportPage'
import PortalProfilePage from './pages/portal/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route path="/portal" element={<PortalLayout />}>
        <Route index element={<PortalDashboardPage />} />
        <Route path="transactions" element={<PortalTransactionsPage />} />
        <Route path="loans" element={<PortalLoansPage />} />
        <Route path="terminals" element={<PortalTerminalsPage />} />
        <Route path="support" element={<PortalSupportPage />} />
        <Route path="profile" element={<PortalProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
