import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FreePage() {
  const navigate = useNavigate();
  const handlePricing = async (event) => {
    event.preventDefault();
    const response = await axios.get("http://localhost:3000/free");
    console.log("res", response);
    // console.log("tttt", response.data.data);
    // navigate("/signup", { state: { response: response.data.data } });
    navigate('/signup', { state: { response: response.data.data } })
  };
  return (
    <>
      <div>
        <div>free</div>
        <div> &#8377; 0 / user / month</div>
        <div>upto 5 users</div>
        <div>
          <button onClick={handlePricing}>start for free</button>
        </div>
        <div> Projects : 3</div>
        <div> Storage : 10 GB</div>
        <div> Number of Users : 5</div>
      </div>
    </>
  );
}
