import { useEffect, useState } from "react";
import { rtop } from "../assets";
// import { news } from "../constants";
import { styles } from "../styles";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
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
const Politics = () => {
  const news = useRecoilValue(newsState);
  const politicsNews = news?.filter(
    (n: News) => n?.category === "Politics" && n?.stat === ""
  );

  const recentNews = news?.filter((n: News) => n?.stat === "recent");

  const [currentNews, setCurrentNews] = useState<News[]>([
    {
      title: "",
      content: "",
      author: "",
      date: "",
      stat: "",
      category: "",
      img: "",
    },
  ]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentNews = () => {
    const startIndex = currentIndex;
    const endIndex = window.innerWidth > 640 ? startIndex + 4 : startIndex + 2;
    const nextIndex = endIndex % politicsNews?.length;
    // console.log("Start index is ", startIndex, " end index is ", endIndex);
    if (endIndex !== politicsNews?.length - 1 && window.innerWidth > 640) {
      setCurrentNews(
        politicsNews
          ?.slice(startIndex, endIndex)
          .concat(politicsNews?.slice(0, nextIndex))
      );
    } else {
      setCurrentNews(politicsNews?.slice(startIndex, endIndex));
    }
  };

  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % politicsNews?.length;
      return newIndex;
    });
  };

  useEffect(() => {
    updateCurrentNews();
    // console.log("current news is ", currentNews);
    const interval = setInterval(handleAutoSwitch, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  const politics = currentNews?.slice(1);
  return (
    <div className={`w-full ${styles.padding} h-auto flex justify-between`}>
      <div className="flex flex-col gap-3 w-full sm:w-[60%]">
        <div
          className={`flex font-serif ${styles?.sectionHeadText} items-center gap-3`}
        >
          <p>Politics</p>
          <FaArrowRightLong
            onClick={() => navigate("/politics")}
            className="bg-[#04594D] p-1 text-white rounded-full text-3xl"
          />
        </div>
        <div
          className={`flex w-full h-[300px] sm:h-[350px] items-center justify-between py-3`}
        >
          <div className="w-[53%] h-full relative">
            <img
              src={currentNews?.[0]?.img}
              className="w-full h-full object-cover"
              alt="img"
            />
            <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
              #Politics
            </div>
          </div>
          <div className="w-[43%] h-full flex flex-col justify-center gap-1 sm:gap-3">
            <p className="font-serif text-[15px] sm:text-[22px] font-semibold">
              {currentNews?.[0]?.title}
            </p>
            <p className="text-[12px] sm:text-[14px]">
              {politicsNews?.[0]?.content}
            </p>
            <div className="flex gap-3 text-[10px] sm:text-[12px]">
              <p>By {currentNews?.[0]?.author}</p>
              <p>{currentNews?.[0]?.date}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] sm:h-[250px] flex  justify-center sm:justify-between">
          {politics?.map((p, i) => {
            return (
              <div
                onClick={() => navigate("/news/after", { state: { news: p } })}
                key={i}
                className="w-[80%] sm:w-[32%] h-full relative"
              >
                <div className="w-full h-full bg-black opacity-20 absolute" />
                <img
                  src={p?.img}
                  alt={`img-${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
                  #Politics
                </div>
                <p className="text-white font-serif text-[18px] absolute left-4 bottom-10">
                  {p?.title}
                </p>
                <div className="text-[#FDFDFD] text-[10px] gap-3 flex absolute left-4 bottom-4">
                  <p> By {p?.author}</p>
                  <p>{p?.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[35%] border border-black p-2 h-auto hidden sm:flex flex-col gap-1">
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
        <div className="flex w-full flex-col h-auto gap-2 ">
          {recentNews?.map((r: News, i: number) => {
            return (
              <div
                onClick={() => navigate("/news/after", { state: { news: r } })}
                key={i}
                className="cursor-pointer w-[95%] h-[110px]  flex gap-2 shadow-sm  shadow-zinc-500"
              >
                <div className="w-[30%] h-[85%] relative">
                  <img
                    src={r?.img}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                  <div className="text-white text-[10px] right-0 top-0 rounded-bl-lg absolute px-1 py-1 bg-[#04594D]">
                    #{r?.category}
                  </div>
                </div>
                <div className="w-[65%] flex flex-col gap-1 justify-center">
                  <p className="line-clamp-1 text-[14px] font-serif">
                    {r?.title}
                  </p>
                  <p className="text-[#04594D] leading-4 text-[12px] line-clamp-3 font-serif">
                    {r?.content}
                  </p>
                  <div className=" text-[10px] gap-3 flex  ">
                    <p> By {r?.author}</p>
                    <p>{r?.date}</p>
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
export default Politics;
