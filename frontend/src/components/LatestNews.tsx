import { news } from "../constants";
import { styles } from "../styles";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
const LatestNews = () => {
  const oldLatestNews = news?.filter((n) => n?.stat === "latest");
  const latestNews = oldLatestNews.slice(0, 3);
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
        {latestNews?.map((l, i) => {
          return (
            <div key={i} className="h-full w-[30%] relative">
              <div className="w-full h-full bg-slate-900 opacity-10 absolute" />
              <img
                src={l?.img}
                alt="latest img"
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
        <FaCircleChevronRight className="cursor-pointer text-3xl text-white bg-black rounded-full" />
      </div>
    </div>
  );
};
export default LatestNews;
