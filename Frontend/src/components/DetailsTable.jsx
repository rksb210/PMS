import { Card, Col, Row } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import "../css/ClientDetails.scss";
import useClientDetails from "../hooks/useClientDetails";

function DetailsTable() {
	const params = useParams();
	const clientId = params.clientId;
	console.log(clientId);
	const { client, prevPlans } = useClientDetails(clientId);
	return (
		<div className="main-container">
			<div className="client-details-modal">
				<table className="client-details-table">
					<tbody>
						<tr>
							<td>
								<span class="bold-text">Company Name:</span>
							</td>
							<td>{client.companyname}</td>
						</tr>
						<tr>
							<td>
								<span class="bold-text">Company Email:</span>
							</td>
							<td>{client.companyemailid}</td>
						</tr>
						<tr>
							<td>
								<span class="bold-text">Current Plan:</span>
							</td>
							<td>{client.plan ? client.plan : "FREE"}</td>
						</tr>
						<tr>
							<td>
								<span class="bold-text">Plan Amount:</span>
							</td>
							<td>{client.planamount ? client.planamount : 0}</td>
						</tr>
						<tr>
							<td>
								<span class="bold-text">No. of Users:</span>
							</td>
							<td>{client.numberofusers ? client.numberofusers : 5}</td>
						</tr>
						<tr>
							<td>
								<span class="bold-text">No. of Months:</span>
							</td>
							<td>{client.numberofmonths ? client.numberofmonths : 1}</td>
						</tr>
						<tr>
							<td>
								<span class="bold-text">Start Date:</span>
							</td>
							<td>{client.createdAt}</td>
						</tr>
						<tr>
							<td>
								<span class="bold-text">End Date:</span>
							</td>
							<td>{client.expirationDate}</td>
						</tr>
						<tr>
							<td>
								<span class="bold-text">Previous Plans</span>
							</td>
							<td>
								<table style={{ width: "100%" }}>
									<tr>
										<th>Plan</th>
										<th>Start Date</th>
										<th>End Date</th>
									</tr>
									{prevPlans.map((plan) => (
										<tr key={plan.createdAt}>
											<td>{plan.plan ? plan.plan : "FREE"}</td>
											<td>{plan.createdAt}</td>
											<td>{plan.expirationDate}</td>
										</tr>
									))}
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default DetailsTable;
