import axios from "axios";

const API_URL = "http://localhost:8888/api/users";

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};