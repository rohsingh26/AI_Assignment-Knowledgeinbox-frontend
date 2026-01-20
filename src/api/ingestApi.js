import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const ingestContent = async ({ type, content, title }) => {
  const response = await axios.post(`${API_BASE_URL}/ingest`, {
    type,
    content,
    title,
  });

  return response.data;
};
