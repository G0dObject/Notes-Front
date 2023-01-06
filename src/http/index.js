import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API_URL;

let $api = axios.create({
	baseUrl: baseURL,
	headers: "application/json",
});

$api.defaults.baseURL = baseURL;

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});

export default $api;
