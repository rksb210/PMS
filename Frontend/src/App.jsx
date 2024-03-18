// import SuperAdminRegistrationForm from "./components/SuperAdminRegistrationForm";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; //importing BrowserRouter, Routes, Route from react-router-dom

import BillingForm from "./components/BillingForm";
import ClientsDetails from "./components/ClientsDetails";
import Dashboard from "./components/Dashboard";
import Licensing from "./components/Licensing";
import LoginPage from "./components/LoginPage";
import PricingPage from "./components/PricingPage";
import RegistrationForm from "./components/RegistrationForm";
import RenewPlan from "./components/RenewPlan";
import SuperAdminLogin from "./components/SuperAdminLogin";
import SuperAdminRegistration from "./components/SuperAdminRegistration";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<RegistrationForm />} path="signup" />
					<Route element={<LoginPage />} path="login" />
					<Route element={<PricingPage />} path="pricing" />
					<Route element={<BillingForm />} path="billing" />
					<Route element={<ClientsDetails />} path="displayallclients" />
					<Route element={<SuperAdminRegistration />} path="superadminsignup" />
					<Route element={<SuperAdminLogin />} path="superadminlogin" />
					<Route element={<Licensing />} path="licensing" />
					<Route element={<Dashboard />} path="clientdashboard" />
					<Route element={<RenewPlan />} path="renewplan" />
				</Routes>
			</Router>
		</>
	);
}

export default App;
