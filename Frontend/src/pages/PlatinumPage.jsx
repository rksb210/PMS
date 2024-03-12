import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PlatinumPage() {
  const navigate = useNavigate();
  const handlePricing = async (event) => {
    event.preventDefault();
    const response = await axios.get("http://localhost:3000/platinum");
    // console.log("res", response);
    console.log(response.data.data);
    navigate("/signup", { state: { response: response.data.data } });
  };
  return (
    <>
      <div>
        <div>PLATINUM</div>
        <div> &#8377; 300 / user / month</div>
        <div>Unlimited Users</div>
        <div>
          <button onClick={handlePricing}>Buy Now</button>
        </div>
        <div> Projects : Unlimited Projects</div>
        <div> Storage : 400 GB</div>
        <div> Number of Users : Unlimited Users</div>
      </div>
    </>
  );
}
