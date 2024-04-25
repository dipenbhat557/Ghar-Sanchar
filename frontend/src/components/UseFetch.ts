import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url: string): any {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get(url);
        const posts = response.data;

        const postsWithImages = await Promise.all(
          posts.map(async (post: any) => {
            if (post._links && post._links["wp:attachment"]) {
              const mediaLink =
                post._links["wp:attachment"] &&
                post._links["wp:attachment"][0]?.href;

              const imageUrl = await getImageUrl(mediaLink);
              return { ...post, imageUrl: imageUrl };
            }
            return post;
          })
        );

        setData(postsWithImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadData();
  }, [url]);

  return data;
}

export const getImageUrl = async (mediaLink: string) => {
  try {
    const response = await axios.get(mediaLink);
    const imageUrl = response.data[0]?.guid?.rendered;
    return imageUrl;
  } catch (error) {
    console.error("Error fetching image details:", error);
    return null;
  }
};
