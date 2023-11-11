import InnerBanner from "@/util/InnerBanner";
import NewArivalCard from "@/util/NewArivalCard";
import React from "react";

export interface Data {
  title: string;
  id: number;
  price: number;
  image: string;
  description: string;
}

const Home = async () => {
  const fetchApi = await fetch("https://fakestoreapi.com/products");
  const data = await fetchApi.json();
  return (
    <>
      <InnerBanner>
        <h2 className="heading1">Womens collection</h2>
        <p>
          We not only help you design exceptional products, but also make it
          easy for you <br />
          to share your designs with more like-minded people.
        </p>
      </InnerBanner>
      <div className="wrapper py-16">
        <div className="card-2 card-wd w-full flex-wrap">
          {data.map((item: Data) => (
            <NewArivalCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
