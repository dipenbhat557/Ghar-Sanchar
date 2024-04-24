import { useEffect, useState } from "react";
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
const Lifestyle = () => {
  const lifestyleNews = news?.filter((n) => n?.category === "Lifestyle");

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
    const nextIndex = endIndex % lifestyleNews?.length;
    // console.log("Start index is ", startIndex, " end index is ", endIndex);
    if (endIndex !== lifestyleNews?.length - 1) {
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
        <FaArrowRightLong className="bg-[#04594D] p-1 text-white rounded-full text-3xl" />
      </div>
      <div className="w-full h-[80%] flex justify-around items-center">
        {currentNews?.map((l, i) => {
          return (
            <div
              key={i}
              className="w-[23%] h-full flex flex-col justify-between"
            >
              <div className="h-[75%]  w-full rounded-xl relative">
                <div className="w-full h-full  bg-slate-900 opacity-10 absolute" />
                <img
                  src={l?.img}
                  alt="disaster img"
                  className="w-full h-full rounded-xl  object-cover"
                />
                <div className="text-white right-0 top-0 rounded-bl-xl rounded-tr-xl absolute px-2 py-1 bg-[#04594D]">
                  #{l?.category}
                </div>
              </div>
              <p className=" font-serif text-[13px] font-semibold">
                {l?.title}
              </p>
              <div className=" text-[10px] gap-3 flex ">
                <p className="text-[#8E4042]"> By {l?.author}</p>
                <p className="text-slate-400">{l?.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Lifestyle;
