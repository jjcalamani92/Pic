import axios from "axios";
const storeApi = axios.create({
	baseURL: "https://nestjsandgraphql.herokuapp.com"
});
export default storeApi;
