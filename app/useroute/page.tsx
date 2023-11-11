"use client"
import {useEffect} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import InnerBanner from "@/util/InnerBanner";
const Home = () => {
    const route = useRouter();
    console.log(route)
    useEffect(() => {
        route.prefetch('/men')
    },[])
  return (
    <>
      <InnerBanner>
        <h2 className="heading1">Contact Us</h2>
        <p>
          We not only help you design exceptional products, but also make it
          easy for you <br />
          to share your designs with more like-minded people.
        </p>
      </InnerBanner>
      <div className="wrapper py-16 flex-col gap-4 !items-start">
        <button onClick={() => route.push('/about')} type="button" className="btn btn-primary">Push</button>
        <button onClick={() => route.refresh()} type="button" className="btn btn-primary">Refresh</button>
        <button onClick={() => route.replace('/men')} type="button" className="btn btn-primary">Replace</button>
        <button onClick={() => route.forward()} type="button" className="btn btn-primary">Forward</button>
        <button onClick={() => route.back()} type="button" className="btn btn-primary">Back</button>
      </div>
    </>
  );
};

export default Home;
