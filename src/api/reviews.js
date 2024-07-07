import { BASE_URL, REVIEW_URL } from "@/configs/ApiConfig";
import axios from "axios";

export const getReviews = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}/${REVIEW_URL}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
