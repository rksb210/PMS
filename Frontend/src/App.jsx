// import SuperAdminRegistrationForm from "./components/SuperAdminRegistrationForm";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; //importing BrowserRouter, Routes, Route from react-router-dom

import BillingForm from "./components/BillingForm";
import ClientsDetails from "./components/ClientsDetails";
import Licensing from "./components/Licensing";
import LoginPage from "./components/LoginPage";
// import GoldPage from './pages/GoldPage';
// import PlatinumPage from './pages/PlatinumPage';
// import FreePage from './pages/FreePage';
import PricingPage from "./components/PricingPage";
import RegistrationForm from "./components/RegistrationForm";
import SuperAdminLogin from "./components/SuperAdminLogin";
import SuperAdminRegistration from "./components/SuperAdminRegistration";
// import DisplayAllClientDetails from './components/DisplayAllClientDetails';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<RegistrationForm />} path="signup" />
					<Route element={<LoginPage />} path="login" />
					<Route element={<PricingPage />} path="pricing" />
					<Route element={<BillingForm />} path="billing" />
					{/* <Route element={<DisplayAllClientDetails />} path='displayclients'/> */}
					<Route element={<ClientsDetails />} path="clientsdetails" />
					<Route element={<SuperAdminRegistration />} path="superadminsignup" />
					<Route element={<SuperAdminLogin />} path="superadminlogin" />
					<Route element={<Licensing />} path="licensing" />
				</Routes>
			</Router>
		</>
	);
}

export default App;
