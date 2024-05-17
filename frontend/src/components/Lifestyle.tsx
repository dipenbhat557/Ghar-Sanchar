import { useEffect, useState } from "react";
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
const Lifestyle = () => {
  const news = useRecoilValue(newsState);
  const lifestyleNews = news?.filter(
    (n: News) => n?.["_news_category"].toLowerCase() === "lifestyle"
  );

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
    const nextIndex = endIndex % lifestyleNews?.length;
    // console.log("Start index is ", startIndex, " end index is ", endIndex);
    if (endIndex !== lifestyleNews?.length - 1 && window.innerWidth > 640) {
      setCurrentNews(
        lifestyleNews
          ?.slice(startIndex, endIndex)
          .concat(lifestyleNews?.slice(0, nextIndex))
      );
    } else {
      setCurrentNews(lifestyleNews?.slice(startIndex, endIndex));
    }
  };

  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % lifestyleNews?.length;
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
    <div
      className={`${styles.paddingY} flex flex-col h-[410px] w-full justify-between`}
    >
      <div
        className={`flex font-serif ${styles?.sectionHeadText} ${styles?.paddingX} items-center gap-3`}
      >
        <p>Life Style</p>
        <FaArrowRightLong
          onClick={() => navigate("/lifestyle")}
          className="bg-[#04594D] p-1 text-white rounded-full text-3xl"
        />
      </div>
      <div className="w-full h-[80%] flex justify-around items-center">
        {currentNews?.map((l, i) => {
          return (
            <div
              onClick={() => navigate("/news/after", { state: { news: l } })}
              key={i}
              className="cursor-pointer w-[80%] sm:w-[23%] h-full flex flex-col justify-between"
            >
              <div className="h-[75%]  w-full rounded-xl relative">
                <div className="w-full h-full  bg-slate-900 opacity-10 absolute" />
                <img
                  src={l?.["_news_img"]}
                  alt="disaster img"
                  className="w-full h-full rounded-xl  object-cover"
                />
                <div className="text-white right-0 top-0 rounded-bl-xl rounded-tr-xl absolute px-2 py-1 bg-[#04594D]">
                  #{l?.["_news_category"]}
                </div>
              </div>
              <p className=" font-serif text-[13px] font-semibold">
                {l?.["_news_title"]}
              </p>
              <div className=" text-[10px] gap-3 flex ">
                <p className="text-[#8E4042]"> By {l?.["_news_author"]}</p>
                <p className="text-slate-400">{l?.["_news_date"]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Lifestyle;
