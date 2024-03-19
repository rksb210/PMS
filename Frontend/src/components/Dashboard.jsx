import axios from "axios";
import { useEffect, useState } from "react";
import RenewPlan from "./RenewPlan";

function Dashboard() {
	const [isSubscribed, setIsSubscribed] = useState(false);
	useEffect(() => {
		const registration_id = localStorage.getItem("registration_id");
		const fetchData = async () => {
			const response = await axios.get(
				`http://localhost:3000/clientdashboard/${registration_id}`,
			);
			console.log(response.data.msg);
			if (response.data.msg === "Raju bada hai natkhat!") {
				setIsSubscribed(true);
				localStorage.removeItem("registration_id");
			} else {
				setIsSubscribed(false);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			{!isSubscribed && <RenewPlan />}
			<h1 style={{ textAlign: "center" }}>Client Dashboard</h1>
		</>
	);
}
export default Dashboard;
