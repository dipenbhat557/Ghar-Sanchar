import { useLocation, useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import BreakingNews from "../components/BreakingNews";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";
import { rtop } from "../assets";
import { styles } from "../styles";
import { IoShareSocialOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import React, { useEffect, useState } from "react";
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

const AfterNews = () => {
  const news = useRecoilValue(newsState);
  const navigate = useNavigate();
  const location = useLocation();

  const recentNews = news?.filter((n: News) => n?.["_news_stat"] === "recent");

  const [shareLink, setShareLink] = useState("");
  const queryString = location.search;

  const queryParams = new URLSearchParams(queryString);

  const queryTitle = queryParams.get("_news_title") || "";

  const currentNews =
    location?.state?.news ||
    news?.find((n: News) => n?.["_news_title"].trim() === queryTitle.trim());
  const [copySuccess, setCopySuccess] = useState(false);

  const newsContent = currentNews?.["_news_content"];
  const oldLatestNews = news?.filter(
    (n: News) =>
      n?.["_news_stat"].toLowerCase() === "latest" &&
      n?.["_news_title"]?.trim() !== currentNews?.["_news_title"]?.trim()
  );

  const latestNews =
    window?.innerWidth > 640
      ? oldLatestNews?.slice(0, 3)
      : oldLatestNews?.slice(0, 2);

  const paragraphs = newsContent
    ?.split("\r\n")
    ?.map((paragraph: string, index: number, array: string[]) => (
      <React.Fragment key={index}>
        <p>{paragraph}</p>
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  useEffect(() => {
    generateShareLink();
    console.log("current news is ", currentNews);
  }, [location.state?.news]);

  // Function to generate a shareable link with the news content encoded
  const generateShareLink = () => {
    if (currentNews) {
      const shareableLink = `${
        window.location.origin
      }/news/after?_news_title=${encodeURIComponent(currentNews._news_title)}`;
      setShareLink(shareableLink);
    }
  };

  // Function to handle share button click
  const handleShare = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    });
  };

  return (
    <>
      <div className="w-full h-[400px] sm:h-[550px] relative">
        <div className="w-full h-full bg-black opacity-20 absolute" />
        <img
          src={currentNews?._news_img}
          alt="news image"
          className="w-full h-full object-cover"
        />
        <RxCrossCircled
          onClick={() => navigate("/")}
          className="text-5xl bg-[#04594D] rounded-full cursor-pointer text-white absolute top-9 right-9 "
        />
      </div>
      <div className={` ${styles.padding} w-full h-auto flex flex-col gap-4 `}>
        <div className="w-full h-auto flex justify-around">
          <div className="w-[90%] sm:w-[60%] h-auto flex flex-col gap-8">
            <p className="text-[18px] sm:text-[26px] sm:tracking-wider font-serif font-semibold">
              {currentNews?._news_title}
            </p>
            <div className="flex gap-8 tracking-wide text-[14px] justify-between">
              <div className="w-auto flex gap-9">
                <p>By {currentNews?._news_author}</p>
                <p>{currentNews?._news_date}</p>
              </div>
              <IoShareSocialOutline
                onClick={handleShare}
                className="cursor-pointer text-3xl bg-slate-200 rounded-full p-1"
              />
              {copySuccess && <p>Link copied to clipboard!</p>}
            </div>
            <p className={`   text-[18px]`}>{paragraphs}</p>
          </div>
          <div className="w-[35%] border border-black p-2 h-[650px] overflow-y-scroll hidden sm:flex flex-col gap-1">
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
                    key={i}
                    onClick={() =>
                      navigate("/news/after", { state: { news: r } })
                    }
                    className="cursor-pointer w-[95%] h-[110px]  flex gap-2 shadow-sm  shadow-zinc-500"
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
        <button
          onClick={() => navigate("/")}
          className="bg-[#8E4042] text-white font-semibold w-[60%] sm:w-[25%] mx-auto py-2"
        >
          Back to Home Page
        </button>
      </div>
      <BreakingNews bgColor="#04594D" />
      <div className={`${styles.padding} w-full h-full flex flex-col`}>
        <p className="py-2 text-[22px] font-semibold">More like this</p>
        <div className="w-full h-[200px] sm:h-[300px] flex justify-around items-center">
          {latestNews?.map((l: any, i: number) => {
            return (
              <div
                onClick={() => navigate("/news/after", { state: { news: l } })}
                key={i}
                className="cursor-pointer h-full w-[40%] sm:w-[30%] relative"
              >
                <div className="w-full h-full bg-slate-900 opacity-10 absolute" />
                <img
                  src={l?.["_news_img"]}
                  alt="disaster img"
                  className="w-full h-full object-covers"
                />
                <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
                  #{l?.["_news_category"]}
                </div>
                <p className="text-white font-serif line-clamp-3 sm:line-clamp-3 text-[18px] sm:text-[25px] absolute left-4 bottom-10">
                  {l?.["_news_title"]}
                </p>
                <div className="text-[#FDFDFD] text-[10px] gap-3 flex absolute left-4 bottom-4">
                  <p> By {l?.["_news_author"]}</p>
                  <p>{l?.["_news_date"]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Subscription />
      <Footer />
    </>
  );
};

export default AfterNews;
