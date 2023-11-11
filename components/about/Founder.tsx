import CardChildren from "@/util/CardChildren";
import React from "react";

const Founder = () => {
  return (
    <section className="founders py-16">
      <div className="wrapper">
        <h2 className="heading2 !mb-2">⛱ Founder</h2>
        <p>
          We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content
        </p>
        <div className="clients pt-10">
          <CardChildren>
            <div className="imgbox">
              <img src="./photo-1472099645785-5658abf4ff4e.webp" alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Niamh O'Shea</h3>
            <p>Co-founder and Chief Executive</p>
          </CardChildren>
          <CardChildren>
            <div className="imgbox">
              <img src="./photo-1568602471122-7832951cc4c5.webp" alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Danien Jame</h3>
            <p>Co-founder and Chief Executive</p>
          </CardChildren>
          <CardChildren>
            <div className="imgbox">
              <img src="./photo-1560365163-3e8d64e762ef.webp" alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Orla Dwyer</h3>
            <p>Co-founder, Chairman</p>
          </CardChildren>
          <CardChildren>
            <div className="imgbox">
              <img src="./photo-1580489944761-15a19d654956.webp" alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Dara Frazier</h3>
            <p>Co-Founder, Chief Strategy Officer</p>
          </CardChildren>
        </div>
      </div>
    </section>
  );
};

export default Founder;
