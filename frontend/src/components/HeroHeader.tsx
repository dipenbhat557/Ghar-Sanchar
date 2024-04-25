import { useNavigate } from "react-router-dom";
import { logo2 } from "../assets";
import { styles } from "../styles";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { newsState } from "../store";
interface News {
  title: string;
  content: string;
  author: string;
  date: string;
  stat: string;
  category: string;
  img: string;
}
const HeroHeader = () => {
  const navigate = useNavigate();
  const news = useRecoilValue(newsState);
  const [searchQuery, setSearchQuery] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchResult, setSearchResult] = useState<News[]>([]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    if (searchQuery.trim() !== "") {
      const searchResults = news.filter((n) =>
        n?.title?.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
      setSearchResult(searchResults);
    }
    setClicked(true);
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== "") {
      const searchResults = news.filter((n) =>
        n?.title?.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
      setSearchResult(searchResults);
    }
    setClicked(true);
  };

  return (
    <>
      <div
        className={`${styles.padding} flex justify-between items-center w-full h-[60px] sm:h-[100px]`}
      >
        <div className="w-[35%] sm:w-[15%] sm:h-[80%] ">
          <img
            src={logo2}
            onClick={() => navigate("/")}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[55%] h-[90%] sm:h-[70%] flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search for headlines"
            className="bg-[#04594D] flex text-[12px] sm:text-[16px]  text-white pb-1 sm:pb-0 pl-4 w-[80%] h-full  placeholder:text-slate-400 placeholder:text-[10px] sm:placeholder:text-[14px] "
          />
          <button
            onClick={handleSearchButtonClick}
            className="cursor-pointer text-white h-full w-[25%] sm:w-[15%] text-[12px] sm:text-[18px] bg-[#8E4042]"
          >
            SEARCH
          </button>
        </div>
      </div>
      {clicked ? (
        searchResult?.length > 0 ? (
          <div className="w-[50%] rounded-b-md absolute z-50  right-10 h-auto">
            {searchResult?.map((s, i) => {
              return (
                <div
                  key={i}
                  className="w-full cursor-pointer h-auto p-3 bg-slate-200 border-b border-slate-300 flex items-center justify-center"
                >
                  <p
                    onClick={() =>
                      navigate("/news/after", { state: { news: s } })
                    }
                  >
                    {s?.title}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-[50%] bg-slate-200 absolute z-50  flex items-center justify-center  h-[50px] right-10">
            "No results found"
          </div>
        )
      ) : (
        ""
      )}
    </>
  );
};
export default HeroHeader;
