"use client";
import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import InnerBanner from "@/util/InnerBanner";
import OffersCart from "@/components/homepage/OffersCart";
const Home = () => {
  const route = useRouter();
  useEffect(() => {
    route.prefetch("/men");
  }, []);
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
      <div className="wrapper !w-9/12 py-16 gap-4 !items-start justify-between">
        <div className="w-5/12">
          <p className="pb-5">
            <strong className="block">🗺 ADDRESS</strong>
            Photo booth tattooed prism, <br />
            portland taiyaki hoodie neutra typewriter
          </p>
          <p className="pb-5">
            <strong className="block">💌 EMAIL</strong>
            ansari.hasib@example.com
          </p>
          <p className="pb-5">
            <strong className="block">☎ PHONE</strong>
            000-123-456-7890
          </p>
        </div>
        <div className="w-6/12">
          <div className="form-box">
            <div className="input-field pb-4">
              <label htmlFor="firstname" className="block font-semibold pb-2">
                First Name
              </label>
              <input
                id="firstname"
                className="input input-bordered w-full"
                type="text"
                placeholder="Example Hasib"
              />
            </div>
            <div className="input-field pb-4">
              <label htmlFor="email" className="block font-semibold pb-2">
                Email address
              </label>
              <input
                id="email"
                className="input input-bordered w-full"
                type="text"
                placeholder="Example info@gmail.com"
              />
            </div>
            <div className="input-field pb-4">
              <label htmlFor="message" className="block font-semibold pb-2">
                Message
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full"
                placeholder="Type your query"></textarea>
            </div>
            <button className="btn btn-primary text-white">Submit</button>
          </div>
        </div>
      </div>
      
      <section className="offer-sec bg-gradient-to-tl from-amber-100">
        <OffersCart />
      </section>
    </>
  );
};

export default Home;
