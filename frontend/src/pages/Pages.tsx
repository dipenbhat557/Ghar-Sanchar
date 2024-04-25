import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NewsPage from "./NewsPage";
import AfterNews from "./AfterNews";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politics" element={<NewsPage category="Politics" />} />
        <Route path="/sports" element={<NewsPage category="Sports" />} />
        <Route path="/business" element={<NewsPage category="Business" />} />
        <Route
          path="/entertainment"
          element={<NewsPage category="Entertainment" />}
        />
        <Route path="/climate" element={<NewsPage category="Climate" />} />
        <Route path="/travel" element={<NewsPage category="Travel" />} />
        <Route path="/economy" element={<NewsPage category="Economy" />} />
        <Route path="/lifestyle" element={<NewsPage category="Lifestyle" />} />
        <Route path="/news/after" element={<AfterNews />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
