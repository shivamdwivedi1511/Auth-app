import axios from "axios";

export const fetchList = (page) =>
  axios.get(`https://reqres.in/api/users?page=${page}`);
