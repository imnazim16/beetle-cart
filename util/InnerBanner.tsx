import { url } from "inspector";
import React from "react";

type props = {
    children: React.ReactNode,
}

const InnerBanner = ({children }: props) => {
    
  return (
    <section className="innerBanner">
      <div className="wrapper w-1/3 flex-col">
        {children}
      </div>
    </section>
  );
};

export default InnerBanner;
