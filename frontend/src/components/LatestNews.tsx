import { useEffect, useState } from "react";
// import { news } from "../constants";
import { styles } from "../styles";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
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

const LatestNews = () => {
  const news = useRecoilValue(newsState);
  const navigate = useNavigate();
  const oldLatestNews = news?.filter(
    (n: News) => n?.["_news_stat"].toLowerCase() === "latest"
  );
  const latestNews = oldLatestNews?.slice(0, 3);

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentNews = () => {
    const startIndex = currentIndex;
    const endIndex = window.innerWidth > 640 ? startIndex + 3 : startIndex + 1;
    const nextIndex = endIndex % latestNews?.length;
    // console.log("Start index is ", startIndex, " end index is ", endIndex);
    if (endIndex !== latestNews?.length - 1 && window.innerWidth > 640) {
      setCurrentNews(
        latestNews
          ?.slice(startIndex, endIndex)
          .concat(latestNews?.slice(0, nextIndex))
      );
    } else {
      setCurrentNews(latestNews?.slice(startIndex, endIndex));
    }
  };

  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % latestNews?.length;
      return newIndex;
    });
  };

  useEffect(() => {
    updateCurrentNews();

    const interval = setInterval(handleAutoSwitch, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={` flex flex-col h-[400px] w-full justify-between`}>
      <div
        className={` ${styles.padding} flex w-full h-[15%] items-center gap-2`}
      >
        <p className={`${styles.sectionHeadText}  font-serif`}>Latest News</p>
        <div className="w-[7%] border-b-2 border-black" />
      </div>
      <div className="w-full h-[80%] flex justify-around items-center">
        <FaCircleChevronLeft className="cursor-pointer text-3xl text-white bg-black rounded-full" />
        {currentNews?.map((l, i) => {
          return (
            <div
              onClick={() => navigate("/news/after", { state: { news: l } })}
              key={i}
              className="cursor-pointer h-full w-[70%] sm:w-[30%] relative"
            >
              <div className="w-full h-full bg-slate-900 opacity-10 absolute" />
              <img
                src={l?.["_news_img"]}
                alt="latest img"
                className="w-full h-full object-cover"
              />
              <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
                #{l?.["_news_category"]}
              </div>
              <p className="text-white font-serif text-[18px] absolute left-4 bottom-10">
                {l?.["_news_title"]}
              </p>
              <div className="text-[#FDFDFD] text-[10px] gap-3 flex absolute left-4 bottom-4">
                <p> By {l?.["_news_author"]}</p>
                <p>{l?.["_news_date"]}</p>
              </div>
            </div>
          );
        })}
        <FaCircleChevronRight className="cursor-pointer text-3xl text-white bg-black rounded-full" />
      </div>
    </div>
  );
};
export default LatestNews;
