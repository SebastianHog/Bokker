import { Carousel } from "@/components/Carousel";
import { useFetch } from "@/hooks/useFetch";

export const Home = () => {
  const getTrending = () => {
    return useFetch(`https://openlibrary.org/trending.json?limit=15`);
  };
  const getClassic = () => {
    return useFetch(`https://openlibrary.org/search.json?q=subject:%22classic%22&limit=15`);
  };

  const trendingBooks: any = getTrending();
  const classicBooks: any = getClassic();

  return (
    <div className="h-[100%]">
      <div className=" h-[40vh] tracking-wide">
        <h1 className="text-4xl ">Trending Books</h1>
        <div className="w-[100%] h-[90%] border-black border-2">
          <Carousel
            loadingText="Getting trending books..."
            inputArray={trendingBooks}
            jumpAmount={1350}
            instantScroll={false}
          />
        </div>
      </div>
      <div className=" h-[40vh] ">
        <h1 className="text-4xl tracking-wide">Classic Books</h1>
        <div className="w-[100%] h-[100%] border-black border-2">
          <Carousel
            loadingText="Getting classic books..."
            inputArray={classicBooks}
            jumpAmount={1350}
            instantScroll={false}
          />
        </div>
      </div>
    </div>
  );
};
