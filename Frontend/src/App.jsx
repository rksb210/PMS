// import SuperAdminRegistrationForm from "./components/SuperAdminRegistrationForm";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';//importing BrowserRouter, Routes, Route from react-router-dom

import BillingForm from './components/BillingForm';
// import GoldPage from './pages/GoldPage';
// import PlatinumPage from './pages/PlatinumPage';
// import FreePage from './pages/FreePage';
import PricingPage from './components/PricingPage';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route element={<RegistrationForm />} path='signup'/>
      <Route element={<LoginPage />} path='login'/>
       <Route element={<PricingPage />} path='pricing'/>
        {/* <Route element={<FreePage />} path='free'/> */}
        <Route element={<BillingForm />} path='billing'/>
        {/* <Route element={<GoldPage />} path='gold'/>
        <Route element={<PlatinumPage />} path='platinum'/> */}

      </Routes>
      {/* <PricingPage /> */}
      {/* <SuperAdminRegistrationForm /> */}
      </Router>
    </>
  );
}

export default App;
