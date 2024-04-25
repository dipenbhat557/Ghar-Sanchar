import { useRecoilValue } from "recoil";
// import { news } from "../constants";
import { styles } from "../styles";
import { newsState } from "../store";
import { useNavigate } from "react-router-dom";

interface News {
  _news_title: string;
  _news_content: string;
  _news_author: string;
  _news_date: string;
  _news_stat: string;
  _news_category: string;
  _news_img: string;
}

const BreakingNews = ({ bgColor }: { bgColor: string }) => {
  const navigate = useNavigate();
  const news = useRecoilValue(newsState);
  const breakingNews: News[] = news?.filter(
    (n: News) => n?.["_news_stat"] === "breaking"
  );
  return (
    <div className={`${styles.padding} my-2 h-[100px] sm:h-[120px]`}>
      <div
        onClick={() =>
          navigate("/news/after", { state: { news: breakingNews?.[0]?.["_news_stat"]} })
        }
        className={`bg-[${bgColor}] flex items-center justify-around w-full h-full`}
      >
        <button className="text-[10px] h-[60%] w-[15%] bg-white font-light text-[#161]">
          Breaking News
        </button>
        <p className="text-white text-[13px] sm:text-[16px] w-[80%] text-center">
          {breakingNews?.[0]?.["_news_stat"]}
        </p>
      </div>
    </div>
  );
};
export default BreakingNews;
