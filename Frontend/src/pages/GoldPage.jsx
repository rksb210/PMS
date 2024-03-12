import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GoldPage() {
  const navigate = useNavigate();

  const handlePricing = async (event) => {
    event.preventDefault();
    const response = await axios.get("http://localhost:3000/gold");
    console.log("res", response);
    console.log(response.data.data);
    navigate("/signup", { state: { response: response.data.data } });
    // navigate("/signup");
  };
  return (
    <>
      <div>
        <div>GOLD</div>
        <div> &#8377; 200 / user / month</div>
        <div>upto 300 users</div>
        <div>
          <button onClick={handlePricing}>Buy Now</button>
        </div>
        <div> Projects : Unlimited Projects</div>
        <div> Storage : 250 GB</div>
        <div> Number of Users : 300</div>
      </div>
    </>
  );
}
