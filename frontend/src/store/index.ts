import { atom } from "recoil";

import { news } from "../constants";
// import useFetch from "../components/UseFetch";

export const newsState = atom({
  key: "newsState",
  default: news,
});
// useFetch(`${import.meta.env.VITE_APP_API_ROOT}/general_members`)
