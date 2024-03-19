import { Button, Card } from "antd";
// import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
	const navigate = useNavigate();
	const handleFree = async (event) => {
		try {
			event.preventDefault();
			const response = await axios.get("http://localhost:3000/free");
			// console.log("res", response);
			console.log("tttt", response.data.data);
			navigate("/signup", { state: { response: response.data.data } });
		} catch (error) {
			console.log("error while calling the free api", error);
		}
	};

	const handleGold = async (event) => {
		try {
			event.preventDefault();
			const response = await axios.get("http://localhost:3000/gold");
			console.log("res", response.data);
			console.log(response.data.data);
			navigate("/signup", { state: { response: response.data.data } });
		} catch (error) {
			console.log("error while calling the gold api", error);
		}
	};

	const handlePlatinium = async (event) => {
		try {
			event.preventDefault();
			const response = await axios.get("http://localhost:3000/platinum");
			console.log(response.data.data);
			navigate("/signup", { state: { response: response.data.data } });
		} catch (error) {
			console.log("error while calling the platinium api", error);
		}
	};

	return (
		<div style={{ backgroundColor: "#EAEDED", height: "100vh" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
					gap: "80px",
				}}
			>
				<div>
					<Card
						hoverable={true}
						bordered={false}
						style={{
							width: "110%",
							height: "27rem",
							backgroundColor: "#FDFEFE",
							marginTop: "100px",
						}}
					>
						<h2 style={{ fontFamily: "monospace", marginBottom: "40px" }}>
							FREE
						</h2>

						<div
							style={{ display: "flex", flexDirection: "column", gap: "20px" }}
						>
							<h4> &#8377; 0 / user / month</h4>
							<h6>upto 5 users</h6>
							<h6>Projects : 3</h6>
							<h6>Storage : 10 GB</h6>
							<h6>Number of Users : 5</h6>
						</div>
						<Button
							style={{
								backgroundColor: "#3498DB",
								color: "white",
								width: "200px",
								height: "50px",
							}}
							onClick={handleFree}
						>
							START FOR FREE
						</Button>
					</Card>
				</div>
				<div>
					<Card
						hoverable={true}
						bordered={false}
						style={{
							width: "110%",
							height: "27rem",
							backgroundColor: "#FDFEFE",
							marginTop: "100px",
						}}
					>
						<h2 style={{ fontFamily: "monospace", marginBottom: "40px" }}>
							GOLD
						</h2>
						<div
							style={{ display: "flex", flexDirection: "column", gap: "20px" }}
						>
							<h4> &#8377; 200 / user / month</h4>
							<h6>upto 300 users</h6>

							<h6>Projects : Unlimited Projects</h6>
							<h6>Storage : 250 GB</h6>
							<h6>Number of Users : 300</h6>
						</div>
						<Button
							style={{
								backgroundColor: "#FF7F50",
								color: "white",
								width: "200px",
								height: "50px",
							}}
							onClick={handleGold}
						>
							GET STARTED
						</Button>
					</Card>
				</div>
				<div>
					<Card
						hoverable={true}
						bordered={false}
						style={{
							width: "110%",
							height: "27rem",
							backgroundColor: "#FDFEFE",
							marginTop: "100px",
						}}
					>
						<h2 style={{ fontFamily: "monospace", marginBottom: "40px" }}>
							PLATINIUM
						</h2>
						<div
							style={{ display: "flex", flexDirection: "column", gap: "20px" }}
						>
							<h4> &#8377; 300 / user / month</h4>
							<h6>Unlimited users</h6>
							<h6>Projects : Unlimited Projects</h6>
							<h6>Storage : 400 GB</h6>
							<h6>Number of Users : Unlimited</h6>
						</div>
						<Button
							style={{
								backgroundColor: "#FF7F50",
								color: "white",
								width: "200px",
								height: "50px",
							}}
							onClick={handlePlatinium}
						>
							GET STARTED
						</Button>
					</Card>
				</div>
			</div>
		</div>
	);
};
export default PricingPage;
