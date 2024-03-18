import { Button } from "antd";
import Logo from "../assets/logo.png";
import "../css/Renew.css";

function RenewPlan() {
	return (
		<div className="dashboard-container">
			<div className="max-width-container">
				<div className="column-1">
					<div className="heading">
						<h1>Your plan has expired.</h1>
						<p>We hope you enjoyed your plan</p>
					</div>
					<div className="paragraph">
						<h5>Upgrade to a paid plan to continue the services!</h5>
					</div>
					<div className="dash-buttons">
						<Button type="primary" href="/pricing">
							RENEW SUBSCRIPTION
						</Button>
						<Button type="link">no, I'm fine</Button>
					</div>
				</div>
				<div className="column-2">
					<img src={Logo} alt="ourImage" />
				</div>
			</div>
		</div>
	);
}

export default RenewPlan;
