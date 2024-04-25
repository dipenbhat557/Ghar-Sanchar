import axios from "axios";
import { selector } from "recoil";

export const newsState = selector({
  key: 'newsState',
  get: async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_ROOT}/news?per_page=100`)
    return response.data;
  },
});