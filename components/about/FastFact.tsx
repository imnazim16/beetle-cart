import CardChildren from "@/util/CardChildren";
import React from "react";

const FastFact = () => {
  return (
    <section className="founders py-16">
      <div className="wrapper">
        <h2 className="heading2 !mb-2">🚀 Fast Facts</h2>
        <p>
          We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content
        </p>
        <div className="clients !justify-between pt-10">
          <CardChildren>
            <h3 className="text-2xl font-bold mb-1">10 million</h3>
            <p>Articles have been public around the world (as of Sept. 30, 2021)</p>
          </CardChildren>
          <CardChildren>
            <h3 className="text-2xl font-bold mb-1">100,000</h3>
            <p>Registered users account (as of Sept. 30, 2021)</p>
          </CardChildren>
          <CardChildren>
            <h3 className="text-2xl font-bold mb-1">220+</h3>
            <p>Countries and regions have our presence (as of Sept. 30, 2021)</p>
          </CardChildren>
        </div>
      </div>
    </section>
  );
};

export default FastFact;
