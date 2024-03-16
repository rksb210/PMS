import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
const columns = [
	{
		title: "Company Name",
		dataIndex: "companyname",
		key: "companyname",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Plan",
		dataIndex: "plan",
		key: "plan",
	},
	{
		title: "Start Date",
		dataIndex: "createdAt",
		key: "createdAt",
	},

	{
		title: "Expiry Date",
		dataIndex: "expirationDate",
		key: "expirationDate",
	},
	{
		title: "Email",
		dataIndex: "companyemailid",
		key: "companyemailid",
	},

	{
		title: "Phone",
		dataIndex: "phonenumber",
		key: "phonenumber",
	},
];

const Licensing = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchDetails = async () => {
			const licenseDetails = await axios.get(
				"http://localhost:3000/licencedetails",
			);

			setData(licenseDetails.data.data);
		};
		fetchDetails();
	}, []);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				backgroundColor: " #EAEDED ",
				height: "100vh",
				alignItems: "center",
			}}
		>
			<div
				style={{
					width: "60%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "50px",
					backgroundColor: "#FDFEFE",
					borderRadius: "20px",
				}}
			>
				<h2
					style={{
						textAlign: "center",
						fontFamily: "monospace",
						padding: "10px",
					}}
				>
					License Details
				</h2>
				<Table
					bordered
					columns={columns}
					rowKey={() => `${crypto.randomUUID()}`}
					dataSource={data}
				/>
			</div>
		</div>
	);
};

export default Licensing;
