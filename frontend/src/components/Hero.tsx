import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { newsState } from "../store";
// import { news } from "../constants";
interface News {
  _news_title: string;
  _news_content: string;
  _news_author: string;
  _news_date: string;
  _news_stat: string;
  _news_category: string;
  _news_img: string;
}
const Hero = () => {
  const news = useRecoilValue(newsState);
  let heroNews = [];
  const navigate = useNavigate();

  heroNews = news?.filter((n: News) => n?.["_news_stat"] === "latest");

  return (
    <div className="w-full h-[700px] sm:h-[550px] mb-5 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:flex items-center justify-between">
      <div
        className=" w-full sm:w-[49%] cursor-pointer h-[88%] relative"
        onClick={() =>
          navigate("/news/after", { state: { news: heroNews?.[0] } })
        }
      >
        <div className="w-full h-full bg-slate-900 opacity-20 absolute" />
        <img
          src={heroNews?.[0]?.["_news_img"]}
          alt="hero img 1"
          className="w-full h-full object-cover"
        />
        <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
          #{heroNews?.[0]?.["_news_category"]}
        </div>
        <p className="text-[16px] sm:text-[20px] w-[80%] font-serif  bottom-10 left-5 text-white font-semibold absolute">
          {heroNews?.[0]?.["_news_title"]}
        </p>
        <div className="flex w-full h-[20] bottom-2 left-5 absolute gap-3">
          <p className="text-[12px] text-[#FDFDFD]">
            By {heroNews?.[0]?.["_news_author"]}
          </p>
          <p className="text-[12px] text-[#FDFDFD]">
            {heroNews?.[0]?.["_news_date"]}
          </p>
        </div>
      </div>
      <div className="w-full sm:w-[49%]  h-full flex flex-col justify-between">
        <div
          onClick={() =>
            navigate("/news/after", { state: { news: heroNews?.[1] } })
          }
          className="cursor-pointer w-full bg-[#1A1A1A] h-[52%] flex justify-around items-center"
        >
          <div className="w-[40%] sm:w-[30%] h-full flex flex-col gap-2">
            <p className="w-full p-1 sm:p-3 h-[80%] line-clamp-4 text-[14px] sm:text-[16px] sm:line-clamp-6 text-white  sm:leading-relaxed">
              {heroNews?.[1]?.["_news_content"]}
            </p>
            <div className="flex w-full h-[10%] justify-center gap-1 sm:gap-2">
              <p className="text-[#FDFDFD] text-[10px] sm:text-[12px]">
                By {heroNews?.[1]?.["_news_author"]}
              </p>
              <p className="text-[#FDFDFD] text-[12px]">
                {heroNews?.[1]?.["_news_date"]}
              </p>
            </div>
          </div>

          <div className="w-[55%] sm:w-[60%] h-full relative">
            <div className="w-full h-full bg-slate-900 opacity-20 absolute" />
            <img
              src={heroNews?.[1]?.["_news_img"]}
              alt="hero img 2"
              className="w-full h-full object-cover"
            />
            <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
              #{heroNews?.[1]?.["_news_category"]}
            </div>
            <p className="text-[16px] sm:text-[20px] w-[80%] font-serif  bottom-10 left-5 text-white font-semibold absolute">
              {heroNews?.[1]?.["_news_title"]}
            </p>
          </div>
        </div>
        <div
          onClick={() =>
            navigate("/news/after", { state: { news: heroNews?.[0] } })
          }
          className="cursor-pointer w-full h-[43%] flex justify-between"
        >
          <div className="w-[40%] sm:w-[38%] h-full relative">
            <div className="w-full h-full bg-slate-900 opacity-20 absolute" />
            <img
              src={heroNews?.[2]?.["_news_img"]}
              alt="hero img 3"
              className="w-full h-full object-cover"
            />
            <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
              #{heroNews?.[2]?.["_news_category"]}
            </div>
            <p className="text-[14px] sm:text-[20px] w-[80%] font-serif  bottom-10 left-5 text-white font-semibold absolute">
              {heroNews?.[2]?.["_news_title"]}
            </p>
          </div>
          <div className="w-[55%] sm:w-[58%] h-full flex flex-col justify-around ">
            <p className="text-[16px] sm:text-[20px] font-semibold font-serif">
              {heroNews?.[2]?.["_news_title"]}
            </p>
            <div className="flex gap-3">
              <p className="text-slate-400 text-[10px] sm:text-[12px]">
                By {heroNews?.[2]?.["_news_author"]}
              </p>
              <p className="text-slate-400 text-[10px] sm:text-[12px]">
                {heroNews?.[2]?.["_news_date"]}
              </p>
            </div>
            <p className="text-[#04594D] text-[14px] sm:text-[16px] font-serif w-[90%] line-clamp-3">
              {heroNews?.[2]?.["_news_content"]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
