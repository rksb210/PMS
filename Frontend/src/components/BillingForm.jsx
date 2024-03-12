import { useLocation } from "react-router-dom";

export default function BillingForm() {
  const location = useLocation();
  const response = location?.state.response;
  //   console.log("billingres:", response);

  console.log("props", response);

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          margin: "20px",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Payment Form</h1>
          <div>
            <h3>Plan: {response.response.amount}</h3>
          </div>
          <div>
            <h3>Number Of Users: {response.response.number_of_users}</h3>
          </div>
          <div>
            <h3>Number Of months: {response.response.no_of_months}</h3>
          </div>
        </div>

        <div style={{ margin: "px" }}>
          <div style={{ fontSize: "40px" }}>
            Total bill :
            {response.response.amount *
              response.response.no_of_months *
              response.response.number_of_users}
          </div>
          <div style={{ margin: "10px" }}>
            <button>Buy now </button>
          </div>
        </div>
      </div>
    </>
  );
}
