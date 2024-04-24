import { useEffect, useState } from "react";
import { rtop } from "../assets";
import { news } from "../constants";
import { styles } from "../styles";
import { FaArrowRightLong } from "react-icons/fa6";
interface News {
  title: string;
  content: string;
  author: string;
  date: string;
  stat: string;
  category: string;
  img: string;
}
const Food = () => {
  const foodNews = news?.filter((n) => n?.category === "Food");
  const recentNews = news?.filter((n) => n?.stat === "recent");

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentNews = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + 4;
    const nextIndex = endIndex % foodNews?.length;
    // console.log("Start index is ", startIndex, " end index is ", endIndex);
    if (endIndex !== foodNews?.length - 1) {
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
          <FaArrowRightLong className="bg-[#04594D] p-1 text-white rounded-full text-3xl" />
        </div>
        <div className="w-full h-[80%] flex justify-around items-center">
          {currentNews?.map((l, i) => {
            return (
              <div
                key={i}
                className="w-[20%] h-full flex flex-col justify-between"
              >
                <div className="h-[90%]  w-full rounded-xl relative">
                  <div className="w-full h-full  bg-slate-900 opacity-10 absolute" />
                  <img
                    src={l?.img}
                    alt="food img"
                    className="w-full h-full rounded-xl  object-cover"
                  />
                  <div className="text-white right-0 top-0 rounded-bl-xl rounded-tr-xl absolute px-2 py-1 bg-[#04594D]">
                    #{l?.category}
                  </div>
                  <p className="text-white font-serif text-[18px] absolute left-4 bottom-5">
                    {l?.title}
                  </p>
                </div>

                <div className=" text-[10px] gap-3 flex ">
                  <p className="text-[#8E4042]"> By {l?.author}</p>
                  <p className="text-slate-400">{l?.date}</p>
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
            className="w-[5%] h-[50%] object-contain"
          />
          <div className="text-white font-serif flex items-center justify-center text-[22px] h-[50%] w-[15%] rounded-lg bg-[#04594D]">
            Recent Updates
          </div>
        </div>
        <div className="flex w-full  h-[110px] justify-between">
          {recentNews?.map((r, i) => {
            return (
              <div
                key={i}
                className="w-[18%] h-full  flex gap-2 shadow-sm  shadow-zinc-500"
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
export default Food;
