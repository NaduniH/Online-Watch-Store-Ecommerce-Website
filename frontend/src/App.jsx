import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./pages/Homepage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPage from "./pages/Loginpage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import PlaceOrderForm from "./pages/PlaceOrderForm.jsx";
import AboutUsPage from "./pages/AboutusPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ManageItemsPage from "./pages/ManageItems.jsx";
import ViewOrdersPage from "./pages/ViewOrders.jsx";

function AppLayout({ children }) {
  const location = useLocation();
  const isLoginOrRegisterPageOrForgotPasswordPageOrAdminDashboard =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgotPassword"||
    location.pathname === "/admin";

  return (
    <>
      {!isLoginOrRegisterPageOrForgotPasswordPageOrAdminDashboard && <Navbar />}
      {children}
      {!isLoginOrRegisterPageOrForgotPasswordPageOrAdminDashboard && <Footer />}
    </>
  );
}
function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
        <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/placeOrderForm" element={<PlaceOrderForm />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/manageItems" element={<ManageItemsPage />} />
          <Route path="/viewOrders" element={<ViewOrdersPage />} />

          
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
