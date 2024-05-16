import { useEffect, useState } from "react";
import { rtop } from "../assets";
// import { news } from "../constants";
import { styles } from "../styles";
import { FaArrowRightLong } from "react-icons/fa6";
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
const Food = () => {
  const news = useRecoilValue(newsState);
  const foodNews = news?.filter(
    (n: News) => n?.["_news_category"].toLowerCase() === "food"
  );
  const recent = news?.filter(
    (n: News) => n?.["_news_stat"].toLowerCase() === "recent"
  );
  const recentNews =
    window.innerWidth > 640 ? recent?.slice(0, 5) : recent?.slice(0, 2);

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
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentNews = () => {
    const startIndex = currentIndex;
    const endIndex = window.innerWidth > 640 ? startIndex + 4 : startIndex + 1;
    const nextIndex = endIndex % foodNews?.length;
    // console.log("Start index is ", startIndex, " end index is ", endIndex);
    if (endIndex !== foodNews?.length - 1 && window.innerWidth > 640) {
      setCurrentNews(
        foodNews
          ?.slice(startIndex, endIndex)
          .concat(foodNews?.slice(0, nextIndex))
      );
    } else {
      setCurrentNews(foodNews?.slice(startIndex, endIndex));
    }
  };

  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % foodNews?.length;
      return newIndex;
    });
  };

  useEffect(() => {
    updateCurrentNews();
    // console.log("current news is ", currentNews);
    const interval = setInterval(handleAutoSwitch, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="flex flex-col gap-4 pb-4 ">
      <div
        className={`${styles.paddingY} flex flex-col h-[320px] w-full justify-between`}
      >
        <div
          className={`flex font-serif ${styles?.sectionHeadText} ${styles?.paddingX} items-center gap-3`}
        >
          <p>Food</p>
          <FaArrowRightLong
            onClick={() => navigate("/food")}
            className="bg-[#04594D] p-1 text-white rounded-full text-3xl"
          />
        </div>
        <div className="w-full h-[80%] flex justify-around items-center">
          {currentNews?.map((l, i) => {
            return (
              <div
                onClick={() => navigate("/news/after", { state: { news: l } })}
                key={i}
                className="cursor-pointer w-[80%] sm:w-[20%] h-full flex flex-col justify-between"
              >
                <div className="h-[90%]  w-full rounded-xl relative">
                  <div className="w-full h-full  bg-slate-900 opacity-10 absolute" />
                  <img
                    src={l?.["_news_img"]}
                    alt="food img"
                    className="w-full h-full rounded-xl  object-cover"
                  />
                  <div className="text-white right-0 top-0 rounded-bl-xl rounded-tr-xl absolute px-2 py-1 bg-[#04594D]">
                    #{l?.["_news_category"]}
                  </div>
                  <p className="text-white font-serif text-[18px] absolute left-4 bottom-5">
                    {l?.["_news_title"]}
                  </p>
                </div>

                <div className=" text-[10px] gap-3 flex ">
                  <p className="text-[#8E4042]"> By {l?.["_news_author"]}</p>
                  <p className="text-slate-400">{l?.["_news_date"]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.padding} w-[96%] mx-auto border border-black p-2 h-auto flex flex-col `}
      >
        <div className="w-full h-[70px] flex gap-2">
          <img
            src={rtop}
            alt="recent top"
            className="w-[15%] sm:w-[5%] h-[50%] object-contain"
          />
          <div className="text-white font-serif flex items-center justify-center text-[16px] sm:text-[22px] h-[50%] w-[40%] sm:w-[15%] rounded-lg bg-[#04594D]">
            Recent Updates
          </div>
        </div>
        <div className="flex w-full  h-[110px] justify-between">
          {recentNews?.map((r: News, i: number) => {
            return (
              <div
                onClick={() => navigate("/news/after", { state: { news: r } })}
                key={i}
                className="cursor-pointer w-[45%] sm:w-[18%] h-full  flex gap-2 shadow-sm  shadow-zinc-500"
              >
                <div className="w-[30%] h-[85%] relative">
                  <img
                    src={r?.["_news_img"]}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                  <div className="text-white text-[10px] right-0 top-0 rounded-bl-lg absolute px-1 py-1 bg-[#04594D]">
                    #{r?.["_news_category"]}
                  </div>
                </div>
                <div className="w-[65%] flex flex-col gap-1 justify-center">
                  <p className="line-clamp-1 text-[14px] font-serif">
                    {r?.["_news_title"]}
                  </p>
                  <p className="text-[#04594D] leading-4 text-[12px] line-clamp-3 font-serif">
                    {r?.["_news_content"]}
                  </p>
                  <div className=" text-[10px] gap-3 flex  ">
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
  );
};
export default Food;
