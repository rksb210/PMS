import axios from "axios";
import { useEffect, useState } from "react";

const useClientDetails = (id) => {
	const [client, setClient] = useState({});
	const [prevPlans, setPrevPlans] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		const fetchClient = async () => {
			try {
				const clientDetails = await axios.get(
					`http://localhost:3000/clientdetails/${id}`,
				);
				// console.log(clientDetails);
				const clientPlans = await axios.get(
					`http://localhost:3000/previousPlan/${id}`,
				);
				setPrevPlans(clientPlans.data);
				setClient(clientDetails.data[0]);
			} catch (error) {
				console.log(error);
			}
		};

		return () => {
			fetchClient();
			controller.abort();
		};
	}, [id]);

	return { client, prevPlans };
};

export default useClientDetails;
