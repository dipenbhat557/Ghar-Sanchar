import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
