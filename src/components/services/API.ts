import Axios from "axios";
import { APIFunction } from "./API.types";

const API: APIFunction = async (value, page, onError) => {
  const accessKey = "Lt06gGOjSpjGzshph9kQrPfWiYwVdYvZ95u1xCEXric";
  try {
    const axios = Axios.create({
      baseURL: "https://api.unsplash.com",
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },

      params: {
        query: value,
        page: page,
        per_page: 30,
      },
    });
    const response = await axios.get("/search/photos");
    return response.data;
  } catch (e: unknown) {
    if (!(e instanceof ErrorEvent)) {
      throw e;
    }
    onError({ message: e.message });
  }
};

export default API;
