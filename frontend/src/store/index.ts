import { atom } from "recoil";
import useFetch from "../components/UseFetch";

export const newsState = atom({
  key: "newsState",
  default: useFetch(`${import.meta.env.VITE_APP_API_ROOT}/general_members`),
});
