import { useRecoilValue } from "recoil";
// import { news } from "../constants";
import { styles } from "../styles";
import { newsState } from "../store";
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

const BreakingNews = ({ bgColor }: { bgColor: string }) => {
  const navigate = useNavigate();
  const news = useRecoilValue(newsState);
  const breakingNews: News[] = news?.filter(
    (n: News) => n?.stat === "breaking"
  );
  return (
    <div className={`${styles.padding} my-2  h-[120px]`}>
      <div
        onClick={() =>
          navigate("/news/after", { state: { news: breakingNews?.[0]?.title } })
        }
        className={`bg-[${bgColor}] flex items-center justify-around w-full h-full`}
      >
        <button className="text-[10px] h-[60%] w-[15%] bg-white font-light">
          Breaking News
        </button>
        <p className="text-white w-[80%] text-center">
          {breakingNews?.[0]?.title}
        </p>
      </div>
    </div>
  );
};
export default BreakingNews;
