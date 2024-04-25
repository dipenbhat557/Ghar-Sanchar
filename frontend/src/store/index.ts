import { atom } from "recoil";
// import useFetch from "../components/UseFetch";
import { news } from "../constants";

export const newsState = atom({
  key: "newsState",
  default: news,
});
// useFetch(`${import.meta.env.VITE_APP_API_ROOT}/general_members`)
