import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const queryKnowledge = async (question) => {
  const response = await axios.post(`${API_BASE_URL}/query`, {
    question,
  });

  return response.data;
};
