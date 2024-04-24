import { useEffect, useState } from "react";
import { rtop } from "../assets";
import BreakingNews from "../components/BreakingNews";
import Footer from "../components/Footer";
import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/Navbar";
import SideHero from "../components/SideHero";
import Subscription from "../components/Subscription";
import { news } from "../constants";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
interface News {
  title: string;
  content: string;
  author: string;
  date: string;
  stat: string;
  category: string;
  img: string;
}
const NewsPage = ({ category }: { category: string }) => {
  let current: News[] = [];

  const [currentNews, setCurrentNews] = useState<News[]>([]);
  useEffect(() => {
    current = news?.filter((n) => n?.category === category);
    setCurrentNews(current?.slice(0, 4));
    // console.log("category is ", category, " current is ", current);
  }, [category]);
  //   console.log("current news is ", currentNews);
  const recentNews = news?.filter((n) => n?.stat === "recent");
  const navigate = useNavigate();

  const handleMore = () => {
    setCurrentNews(current);
  };

  return (
    <>
      <HeroHeader />
      <Navbar />
      <SideHero category={category} />
      <BreakingNews bgColor="#04594D" />
      <div className="w-full h-auto flex flex-col gap-3">
        <div className="w-full p-2 flex justify-between">
          <div
            className={`${styles.padding} flex flex-col w-[60%] h-auto gap-2 `}
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
                      src={n?.img}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pl-3 flex h-[90%] w-[60%] flex-col items-start gap-3 justify-center">
                    {" "}
                    <p className="text-[22px] font-semibold">{n?.title}</p>
                    <div className="flex gap-3 w-full pb-3 font-semibold text-slate-500 border-b border-slate-300 text-[12px]">
                      <p>By {n?.author}</p>
                      <p>{n?.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[35%] border border-black p-2 h-[650px] overflow-y-scroll flex flex-col gap-1">
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
              {recentNews?.map((r, i) => {
                return (
                  <div
                    key={i}
                    onClick={() =>
                      navigate("/news/after", { state: { news: r } })
                    }
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