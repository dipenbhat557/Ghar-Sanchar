import { useEffect, useState } from "react";
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
const Disasters = () => {
  const navigate = useNavigate();
  const news = useRecoilValue(newsState);
  const disastersNews = news?.filter((n: News) => n?.category === "Disasters");
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
    const nextIndex = endIndex % disastersNews?.length;
    // console.log("Start index is ", startIndex, " end index is ", endIndex);
    if (endIndex !== disastersNews?.length - 1) {
      setCurrentNews(
        disastersNews
          ?.slice(startIndex, endIndex)
          .concat(disastersNews?.slice(0, nextIndex))
      );
    } else {
      setCurrentNews(disastersNews?.slice(startIndex, endIndex));
    }
  };

  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % disastersNews?.length;
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
    <div className={` flex flex-col h-[400px] w-full justify-between`}>
      <div
        className={`flex font-serif ${styles?.sectionHeadText} ${styles?.paddingX} items-center gap-3`}
      >
        <p>Disasters</p>
        <FaArrowRightLong className="bg-[#04594D] p-1 text-white rounded-full text-3xl" />
      </div>
      <div className="w-full h-[80%] flex justify-around items-center">
        {currentNews?.map((l, i) => {
          return (
            <div
              onClick={() => navigate("/news/after", { state: { news: l } })}
              key={i}
              className="cursor-pointer h-full w-[23%] relative"
            >
              <div className="w-full h-full bg-slate-900 opacity-10 absolute" />
              <img
                src={l?.img}
                alt="disaster img"
                className="w-full h-full object-cover"
              />
              <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
                #{l?.category}
              </div>
              <p className="text-white font-serif text-[18px] absolute left-4 bottom-10">
                {l?.title}
              </p>
              <div className="text-[#FDFDFD] text-[10px] gap-3 flex absolute left-4 bottom-4">
                <p> By {l?.author}</p>
                <p>{l?.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Disasters;
