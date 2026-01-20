import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const fetchItems = async () => {
  const response = await axios.get(`${API_BASE_URL}/items`);
  return response.data;
};

export const deleteItemById = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/items/${id}`);
  return response.data;
};
