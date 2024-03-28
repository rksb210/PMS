// import { DeleteFilled, EditFilled } from "@ant-design/icons";
// import { Button, Input, Modal, Table } from "antd";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// const { Search } = Input;
// import { Card, Col, Row } from "antd";

// function ClientsDetails() {
//   const [searchedText, setSearchedText] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingClient, setEditingClient] = useState(null);
//   const [dataSource, setDataSource] = useState([]);
//   const [showData, setShowData] = useState({});

//   useEffect(() => {
//     fetchAll();
//   }, []);

//   const handleClick = async (id) => {
//     try {
//       navigate(`/displayallclients/${id}`);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Fetching client details from the database who are registered on our website.
//   const fetchAll = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/signup");
//       setDataSource(response.data.data);

//       const dataResponse = await axios.get(
//         "http://localhost:3000/totalClients"
//       );
//       setShowData(dataResponse.data);
//     } catch (error) {
//       console.log("error in getting data of registered clients", error);
//     }
//   };

//   // Function to update client details
//   const updateClient = async (editingClient) => {
//     try {
//       const response = await axios.patch(
//         `http://localhost:3000/signup/${editingClient.registration_id}`,
//         editingClient
//       );
//       if (response.status === 200) {
//         Swal.fire("Success", "Client details updated successfully", "success");
//         fetchAll(); // Refetch data after successful update
//       } else {
//         Swal.fire("Error", "Failed to update client details", "error");
//       }
//     } catch (error) {
//       console.log("Error updating client details:", error);
//       Swal.fire("Error", "Failed to update client details", "error");
//     }
//   };

//   // Function to handle editing client
//   const onEditClient = (record) => {
//     setIsEditing(true);
//     setEditingClient({ ...record });
//   };

//   // Function to reset editing state
//   const resetEditing = () => {
//     setIsEditing(false);
//     setEditingClient(null);
//   };

//   // Columns configuration for Antd Table
//   const columns = [
//     {
//       key: "1",
//       title: "Company Name",
//       dataIndex: "companyname",
//       render: (text, record) => (
//         <button
//           type="button"
//           style={{
//             color: "#2E86C1",
//             border: "none",
//             backgroundColor: "transparent",
//           }}
//           onClick={() => handleClick(record.registration_id)}
//         >
//           {text}
//         </button>
//       ),
//       filteredValue: [searchedText],
//       onFilter: (value, record) => {
//         return (
//           String(record.companyname)
//             .toLowerCase()
//             .includes(value.toLowerCase()) ||
//           String(record.companyemailid)
//             .toLowerCase()
//             .includes(value.toLowerCase()) ||
//           String(record.location).toLowerCase().includes(value.toLowerCase())
//         );
//       },
//     },
//     {
//       key: "2",
//       title: "Email Id",
//       dataIndex: "companyemailid",
//     },
//     {
//       key: "3",
//       title: "Location",
//       dataIndex: "location",
//     },
//     {
//       key: "5",
//       title: "Actions",
//       render: (record) => {
//         return (
//           <>
//             <EditFilled
//               onClick={() => onEditClient(record)}
//               style={{ color: "green", marginLeft: 12 }}
//             />
//             <DeleteFilled
//               onClick={() => onDeleteClient(record)}
//               style={{ color: "red", marginLeft: 12 }}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   // Function to handle deletion of client
//   const onDeleteClient = (record) => {
//     console.log("rowdata", record);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     })
//       .then(async (result) => {
//         if (result.isConfirmed) {
//           result = await axios.delete(
//             `http://localhost:3000/signup/${record.registration_id}`
//           );
//           if (result.status) {
//             Swal.fire("Deleted!", "Job has been deleted.", "success");
//             fetchAll();
//           } else {
//             Swal.fire("Deleted!", "Fail to delete job", "error");
//           }
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const navigate = useNavigate();

//   // Function to navigate to add client page
//   const onAddClient = () => {
//     navigate("/pricing");
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#EAEDED",
//       }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           fontFamily: "monospace",
//           padding: "10px",
//         }}
//       >
//         Clients Details
//       </h2>
//       <div style={{ marginLeft: "230px" }}>
//         <Row gutter={16}>
//           <Col span={5}>
//             <Card
//               title="Total Clients"
//               bordered={false}
//               className="gradient-background"
//             >
//               {showData.totalClients}
//             </Card>
//           </Col>
//           <Col span={5}>
//             <Card
//               title="Platinum Clients"
//               bordered={false}
//               className="gradient-background"
//             >
//               {showData.totalPlatinum}
//             </Card>
//           </Col>
//           <Col span={5}>
//             <Card
//               title="Gold Clients"
//               bordered={false}
//               className="gradient-background"
//             >
//               {showData.totalGold}
//             </Card>
//           </Col>
//           <Col span={5}>
//             <Card
//               title="Free Clients"
//               bordered={false}
//               className="gradient-background"
//             >
//               {showData.totalFreeClients}
//             </Card>
//           </Col>
//         </Row>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           backgroundColor: "#EAEDED",
//           alignItems: "center",
//           flexDirection: "column",
//           flexWrap: "wrap",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           <Button
//             style={{
//               marginTop: "20px",
//               backgroundColor: "#3498DB",
//               color: "white",
//               width: "200px",
//             }}
//             onClick={onAddClient}
//           >
//             Add Client
//           </Button>
//           <Search
//             placeholder="input search text"
//             enterButton
//             size="large"
//             onSearch={(value) => setSearchedText(value)}
//             onChange={(e) => setSearchedText(e.target.value)}
//             style={{
//               width: "400px",
//               marginTop: "30px",
//               marginLeft: "300px",
//               marginBottom: "10px",
//             }}
//           />
//         </div>

//         <div
//           style={{
//             width: "60%",
//             height: "70%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#FDFEFE",
//           }}
//         >
//           <Table
//             style={{ width: "100%", height: "100%" }}
//             columns={columns}
//             dataSource={dataSource}
//             pagination={{ pageSize: 7 }}
//             className="clients-table"
//             bordered
//             rowKey="registration_id"
//           />
//           <Modal
//             title="Edit Client"
//             open={isEditing}
//             okText="Save"
//             onCancel={resetEditing}
//             onOk={() => {
//               updateClient(editingClient); // Call API to update client details
//               resetEditing();
//             }}
//           >
//             <Input
//               value={editingClient?.companyname}
//               style={{ marginBottom: "20px", height: "40px" }}
//               onChange={(e) =>
//                 setEditingClient({
//                   ...editingClient,
//                   companyname: e.target.value,
//                 })
//               }
//             />
//             <Input
//               value={editingClient?.companyemailid}
//               style={{ marginBottom: "20px", height: "40px" }}
//               onChange={(e) =>
//                 setEditingClient({
//                   ...editingClient,
//                   companyemailid: e.target.value,
//                 })
//               }
//             />
//             <Input
//               value={editingClient?.location}
//               style={{ marginBottom: "20px", height: "40px" }}
//               onChange={(e) =>
//                 setEditingClient({
//                   ...editingClient,
//                   location: e.target.value,
//                 })
//               }
//             />
//           </Modal>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClientsDetails;

import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Input, Modal, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const { Search } = Input;
import { Card, Col, Row } from "antd";

function ClientsDetails() {
  const [searchedText, setSearchedText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [showData, setShowData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetchAll();
  }, []);

  const handleClick = async (id) => {
    try {
      navigate(`/displayallclients/${id}`);
      // setSelectedCard(cardType)
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAll = async () => {
    try {
      setDataSource([]);
      const response = await axios.get("http://localhost:3000/signup");
      setDataSource(response.data.data);

      // console.log("iiiiiiiiiiiiiii", response);

      const dataResponse = await axios.get(
        "http://localhost:3000/totalClients"
      );
      setShowData(dataResponse.data);
      // setSelectedCard("Gold");
      setSelectedCard("TotalClients");
    } catch (error) {
      console.log("error in getting data of registered clients", error);
    }
  };

  const handlePlatinum = async () => {
    try {
      // Clear previous data by setting dataSource to an empty array
      setDataSource([]);
      setDataSource([]);
      const result = await axios.get("http://localhost:3000/totalPlatinum");
      console.log("resssulllt:", result.data);

      setDataSource(result.data);
      setSelectedCard("Platinum");
      console.log("datasource:", dataSource);
    } catch (error) {
      console.error("Error fetching Gold clients:", error);
    }
  };
  // const handleGold = async () => {
  //   const result = await axios.get("http://localhost:3000/totalGold");
  //   console.log("resssulllt:", result.data);
  //   setDataSource(result.data);
  //   console.log("datasource:",dataSource)
  //   setSelectedCard("Gold");
  // };

  const handleGold = async () => {
    try {
      // Clear previous data by setting dataSource to an empty array
      setDataSource([]);
      const result = await axios.get("http://localhost:3000/totalGold");
      console.log("resssulllt:", result.data);
      setDataSource(result.data);
      setSelectedCard("Gold");
    } catch (error) {
      console.error("Error fetching Gold clients:", error);
    }
  };

  const handleFree = async () => {
    try {
      // Clear previous data by setting dataSource to an empty array
      setDataSource([]);
      const result = await axios.get("http://localhost:3000/totalFree");
      console.log("resssullltFreeeee:", result.data);
      // setDataSource(result.data);
      setDataSource(result.data.slice(0, 2)); 
      setSelectedCard("Free");
    } catch (error) {
      console.error("Error fetching Gold clients:", error);
    }
  };

  // Function to update client details
  const updateClient = async (editingClient) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/signup/${editingClient.registration_id}`,
        editingClient
      );
      if (response.status === 200) {
        Swal.fire("Success", "Client details updated successfully", "success");
        fetchAll();
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
            `http://localhost:3000/signup/${record.registration_id}`
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
        backgroundColor: "#EAEDED",
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
      <div style={{ marginLeft: "230px" }}>
        <Row gutter={16}>
          <Col span={5}>
            <Card
              title="Total Clients"
              bordered={false}
              className={`gradient-background-totalClients ${
                selectedCard === "TotalClients" ? "selected" : ""
              }`}
              onClick={fetchAll}
            >
              {showData.totalClients}
            </Card>
          </Col>
          <Col span={5}>
            <Card
              title="Platinum Clients"
              bordered={false}
              className={`gradient-background-platinum ${
                selectedCard === "Platinum" ? "selected" : ""
              }`}
              onClick={handlePlatinum}
            >
              {showData.totalPlatinum}
            </Card>
          </Col>
          <Col span={5}>
            <Card
              title="Gold Clients"
              bordered={false}
              className={`gradient-background-gold ${
                selectedCard === "Gold" ? "selected" : ""
              }`}
              onClick={handleGold}
            >
              {showData.totalGold}
            </Card>
          </Col>
          <Col span={5}>
            <Card
              title="Free Clients"
              bordered={false}
              className={`gradient-background-free ${
                selectedCard === "Free" ? "selected" : ""
              }`}
              onClick={handleFree}
            >
              {showData.totalFreeClients}
            </Card>
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#EAEDED",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
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
            className="clients-table"
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
        </div>
      </div>
    </div>
  );
}

export default ClientsDetails;
