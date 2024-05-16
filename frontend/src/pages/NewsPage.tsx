import { useEffect, useState } from "react";
import { rtop } from "../assets";
import BreakingNews from "../components/BreakingNews";
import Footer from "../components/Footer";
import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/Navbar";
import SideHero from "../components/SideHero";
import Subscription from "../components/Subscription";
// import { news } from "../constants";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { newsState } from "../store";
interface News {
  _news_title: string;
  _news_content: string;
  _news_author: string;
  _news_date: string;
  _news_stat: string;
  _news_category: string;
  _news_img: string;
}
const NewsPage = ({ category }: { category: string }) => {
  const news = useRecoilValue(newsState);
  let current: News[];

  const [currentNews, setCurrentNews] = useState<News[]>([
    {
      _news_title: "",
      _news_content: "",
      _news_author: "",
      _news_date: "",
      _news_stat: "",
      _news_category: "",
      _news_img: "",
    },
  ]);
  useEffect(() => {
    current = news?.filter(
      (n: News) =>
        n?.["_news_category"].toLowerCase() === category.toLowerCase()
    );
    setCurrentNews(current?.slice(0, 4));
    // console.log("category is ", category, " current is ", current);
  }, [category]);
  //   console.log("current news is ", currentNews);
  const recent = news?.filter(
    (n: News) => n?.["_news_stat"].toLowerCase() === "recent"
  );
  const recentNews =
    window.innerWidth > 640 ? recent?.slice(0, 5) : recent?.slice(0, 2);

  const navigate = useNavigate();

  const handleMore = () => {
    console.log("current news before ", currentNews);
    const updatedCurrentNews = [...current]; // Create a copy of current news
    setCurrentNews(updatedCurrentNews); // Update currentNews state
    console.log("current news after ", updatedCurrentNews);
  };

  return (
    <>
      <HeroHeader />
      <Navbar />
      <SideHero category={category} />
      <BreakingNews bgColor="#04594D" />
      <div className="w-full h-auto flex flex-col gap-3">
        <div className="w-full p-2 flex flex-col sm:flex-row justify-between">
          <div
            className={`${styles.padding} flex flex-col w-[90%] sm:w-[60%] h-auto gap-2 `}
          >
            {currentNews?.map((n, i) => {
              return (
                <div
                  key={i}
                  onClick={() =>
                    navigate("/news/after", { state: { news: n } })
                  }
                  className="cursor-pointer w-full h-[250px] flex items-center justify-around  border-b border-slate-200 "
                >
                  <div className="w-[35%] h-[70%]">
                    <img
                      src={n?.["_news_img"]}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pl-3 flex h-[90%] w-[60%] flex-col items-start gap-3 justify-center">
                    {" "}
                    <p className="text-[16px] sm:text-[22px] font-semibold">
                      {n?.["_news_title"]}
                    </p>
                    <div className="flex gap-3 w-full pb-3 font-semibold text-slate-500 border-b border-slate-300 text-[12px]">
                      <p>By {n?.["_news_author"]}</p>
                      <p>{n?.["_news_date"]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[90%] sm:w-[35%] border border-black p-2 h-[200px] sm:h-[650px] overflow-y-scroll flex flex-col gap-1">
            <div className="w-full h-[70px] flex gap-2">
              <img
                src={rtop}
                alt="recent top"
                className="w-[10%] h-[50%] object-contain"
              />
              <div className="text-white font-serif flex items-center justify-center text-[22px] h-[50%] w-[80%] rounded-lg bg-[#04594D]">
                Recent Updates
              </div>
            </div>
            <div className="flex w-full flex-row sm:flex-col h-auto gap-2 ">
              {recentNews?.map((r: News, i: number) => {
                return (
                  <div
                    key={i}
                    onClick={() =>
                      navigate("/news/after", { state: { news: r } })
                    }
                    className="cursor-pointer w-[45%] sm:w-[95%] h-[110px]  flex gap-2 shadow-sm  shadow-zinc-500"
                  >
                    <div className="w-[30%] h-[85%] relative">
                      <img
                        src={r?.["_news_img"]}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                      <div className="text-white text-[8px] sm:text-[10px] right-0 top-0 rounded-bl-lg absolute px-1 py-1 bg-[#04594D]">
                        #{r?.["_news_category"]}
                      </div>
                    </div>
                    <div className="w-[65%] flex flex-col gap-1 justify-center">
                      <p className="line-clamp-1 text-[11px] sm:text-[14px] font-serif">
                        {r?.["_news_title"]}
                      </p>
                      <p className="text-[#04594D] leading-4 text-[10px] sm:text-[12px] line-clamp-3 font-serif">
                        {r?.["_news_content"]}
                      </p>
                      <div className=" text-[8px] sm:text-[10px] gap-1 sm:gap-3 flex  ">
                        <p> By {r?.["_news_author"]}</p>
                        <p>{r?.["_news_date"]}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onClick={handleMore}
          className="mx-auto px-6 py-2 text-white bg-[#8E4042] font-semibold"
        >
          More
        </button>
      </div>
      <Subscription />
      <Footer />
    </>
  );
};
export default NewsPage;
