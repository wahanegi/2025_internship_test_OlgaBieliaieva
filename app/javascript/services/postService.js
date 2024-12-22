import axios from "axios";

const API_URL = "/api/v1/posts";

const create = async (formData) => {
  const response = await axios.post(`${API_URL}/create`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  });
  return response.data;
};
export default {create}
