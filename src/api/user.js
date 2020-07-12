import axios from "axios";

export const fetchUserDetails = (id) =>
  axios.get(`https://reqres.in/api/users/${id}`);
