import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Input, Modal, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const { Search } = Input;
import "../css/ClientDetails.css";

function ClientsDetails() {
	const [searchedText, setSearchedText] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [editingClient, setEditingClient] = useState(null);
	const [dataSource, setDataSource] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [clientData, setClientData] = useState({});

	useEffect(() => {
		fetchAll();
	}, []);

	const handleClick = async (id) => {
		try {
			const clientDetails = await axios.get(
				`http://localhost:3000/clientdetails/${id}`,
			);
			// console.log(clientDetails);
			setIsModalOpen(true);
			setClientData(clientDetails.data);
		} catch (error) {
			console.log(error);
		}
	};

	// Fetching client details from the database who are registered on our website.
	const fetchAll = async () => {
		try {
			const response = await axios.get("http://localhost:3000/signup");
			setDataSource(response.data.data);
		} catch (error) {
			console.log("error in getting data of registered clients", error);
		}
	};

	// Function to update client details
	const updateClient = async (editingClient) => {
		try {
			const response = await axios.patch(
				`http://localhost:3000/signup/${editingClient.registration_id}`,
				editingClient,
			);
			if (response.status === 200) {
				Swal.fire("Success", "Client details updated successfully", "success");
				fetchAll(); // Refetch data after successful update
			} else {
				Swal.fire("Error", "Failed to update client details", "error");
			}
		} catch (error) {
			console.log("Error updating client details:", error);
			Swal.fire("Error", "Failed to update client details", "error");
		}
	};

	// Function to handle editing client
	const onEditClient = (record) => {
		setIsEditing(true);
		setEditingClient({ ...record });
	};

	// Function to reset editing state
	const resetEditing = () => {
		setIsEditing(false);
		setEditingClient(null);
	};

	// Columns configuration for Antd Table
	const columns = [
		{
			key: "1",
			title: "Company Name",
			dataIndex: "companyname",
			render: (text, record) => (
				<button
					type="button"
					style={{
						color: "#2E86C1",
						border: "none",
						backgroundColor: "transparent",
					}}
					onClick={() => handleClick(record.registration_id)}
				>
					{text}
				</button>
			),
			filteredValue: [searchedText],
			onFilter: (value, record) => {
				return (
					String(record.companyname)
						.toLowerCase()
						.includes(value.toLowerCase()) ||
					String(record.companyemailid)
						.toLowerCase()
						.includes(value.toLowerCase()) ||
					String(record.location).toLowerCase().includes(value.toLowerCase())
				);
			},
		},
		{
			key: "2",
			title: "Email Id",
			dataIndex: "companyemailid",
		},
		{
			key: "3",
			title: "Location",
			dataIndex: "location",
		},
		{
			key: "5",
			title: "Actions",
			render: (record) => {
				return (
					<>
						<EditFilled
							onClick={() => onEditClient(record)}
							style={{ color: "green", marginLeft: 12 }}
						/>
						<DeleteFilled
							onClick={() => onDeleteClient(record)}
							style={{ color: "red", marginLeft: 12 }}
						/>
					</>
				);
			},
		},
	];

	// Function to handle deletion of client
	const onDeleteClient = (record) => {
		console.log("rowdata", record);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		})
			.then(async (result) => {
				if (result.isConfirmed) {
					result = await axios.delete(
						`http://localhost:3000/signup/${record.registration_id}`,
					);
					if (result.status) {
						Swal.fire("Deleted!", "Job has been deleted.", "success");
						fetchAll();
					} else {
						Swal.fire("Deleted!", "Fail to delete job", "error");
					}
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const navigate = useNavigate();

	// Function to navigate to add client page
	const onAddClient = () => {
		navigate("/pricing");
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				backgroundColor: "#EAEDED",
				height: "100vh",
				alignItems: "center",
				flexDirection: "column",
				flexWrap: "wrap",
			}}
		>
			<h2
				style={{
					textAlign: "center",
					fontFamily: "monospace",
					padding: "10px",
				}}
			>
				Clients Details
			</h2>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				<Button
					style={{
						marginTop: "20px",
						backgroundColor: "#3498DB",
						color: "white",
						width: "200px",
					}}
					onClick={onAddClient}
				>
					Add Client
				</Button>
				<Search
					placeholder="input search text"
					enterButton
					size="large"
					onSearch={(value) => setSearchedText(value)}
					onChange={(e) => setSearchedText(e.target.value)}
					style={{
						width: "400px",
						marginTop: "30px",
						marginLeft: "300px",
						marginBottom: "10px",
					}}
				/>
			</div>

			<div
				style={{
					width: "60%",
					height: "70%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#FDFEFE",
				}}
			>
				<Table
					style={{ width: "100%", height: "100%" }}
					columns={columns}
					dataSource={dataSource}
					pagination={{ pageSize: 7 }}
					bordered
					rowKey="registration_id"
				/>
				<Modal
					title="Edit Client"
					open={isEditing}
					okText="Save"
					onCancel={resetEditing}
					onOk={() => {
						updateClient(editingClient); // Call API to update client details
						resetEditing();
					}}
				>
					<Input
						value={editingClient?.companyname}
						style={{ marginBottom: "20px", height: "40px" }}
						onChange={(e) =>
							setEditingClient({
								...editingClient,
								companyname: e.target.value,
							})
						}
					/>
					<Input
						value={editingClient?.companyemailid}
						style={{ marginBottom: "20px", height: "40px" }}
						onChange={(e) =>
							setEditingClient({
								...editingClient,
								companyemailid: e.target.value,
							})
						}
					/>
					<Input
						value={editingClient?.location}
						style={{ marginBottom: "20px", height: "40px" }}
						onChange={(e) =>
							setEditingClient({
								...editingClient,
								location: e.target.value,
							})
						}
					/>
				</Modal>
				<Modal
					// title="Basic Modal"
					open={isModalOpen}
					// onOk={handleOk
					onCancel={() => setIsModalOpen(false)}
					footer={""}
					className="client-details-modal"
				>
					<p>
						<span className="bold-text">Company Name: </span>{" "}
						{clientData.companyname}
					</p>
					<p>
						<span className="bold-text">Company Email: </span>{" "}
						{clientData.companyemailid}
					</p>
					<p>
						<span className="bold-text">Plan: </span> {clientData.plan}
					</p>
					<p>
						<span className="bold-text">Plan Amount: </span>
						{clientData.planamount}
					</p>
					<p>
						<span className="bold-text">No. of Users: </span>
						{clientData.numberofusers}
					</p>
					<p>
						<span className="bold-text">No. of Months: </span>
						{clientData.numberofmonths}
					</p>
					<p>
						<span className="bold-text">Start Date: </span>
						{clientData.createdAt}
					</p>
					<p>
						<span className="bold-text">End Date: </span>
						{clientData.expirationDate}
					</p>
				</Modal>
			</div>
		</div>
	);
}

export default ClientsDetails;
