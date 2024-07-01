import axios from "axios";
import { BASE_URL, PRODUCTS_URL } from "@/configs/ApiConfig";

export const getProducts = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}/${PRODUCTS_URL}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
