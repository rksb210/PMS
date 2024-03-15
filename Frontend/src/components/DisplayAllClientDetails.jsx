// import MaterialTable from "@material-table/core";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { makeStyles } from "@mui/styles";
// import Swal from "sweetalert2";

// const useStyles = makeStyles({
//   tableContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   actionIcon: {
//     color: "blue", // Change the color to your desired color
//   },
// });

// export default function DisplayAllClientDetails() {
//   const navigate = useNavigate();
//   const classes = useStyles();

//   const [clientDetails, setClientDetails] = useState([]);

//   const fetchAllClientDetails = async () => {
//     const response = await axios.get("http://localhost:3000/signup");
//     // console.log("iiiiii:", response.data.data);
//     // console.log("hhhh:", response.data.data[0].companyname);
//     setClientDetails(response.data.data);
//   };
//   useEffect(function () {
//     fetchAllClientDetails();
//   }, []);
//   //   console.log("gggg:", clientDetails);

//   function displayClientsDetails() {
//     return (
//       <div className={classes.tableContainer}>
//         <MaterialTable
//           style={{ width: "70vw" }}
//           title="Clients Detail"
//           columns={[
//             // { title: "Registration Id", field: "registration_id" },
//             { title: "Company Name", field: "companyname" },
//             { title: "Email Id", field: "companyemailid" },
//             { title: "Country", field: "location" },
//           ]}
//           data={clientDetails}
//           actions={[
//             {
//               icon: "edit",
//               tooltip: "Save User",
//               onClick: (event, rowData) => alert(rowData),
//             },
//             {
//               icon: "delete",
//               tooltip: "Delete category",
//               onClick: (event, rowData) => handleDelete(rowData),
//             },
//             {
//               icon: "add",
//               tooltip: "Add Category",
//               isFreeAction: true,
//               onClick: (event) => navigate("/signup"),
//             },
//           ]}
//           options={{
//             actionsColumnIndex: -1,
//           }}
//         />
//       </div>
//     );
//   }

//   const handleDelete = (rowData) => {
//     console.log("rowdata", rowData);
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
//             `http://localhost:3000/signup/${rowData.registration_id}`
//           );
//           if (result.status) {
//             Swal.fire("Deleted!", "Job has been deleted.", "success");
//             fetchAllClientDetails();
//           } else {
//             Swal.fire("Deleted!", "Fail to delete job", "error");
//           }
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           width: "100vw",
//           height: "100vh",
//           background: "#f2f2f2",
//         }}
//       >
//         <div>{displayClientsDetails()}</div>
//       </div>
//     </>
//   );
// }
