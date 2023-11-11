'use client'
import CardTestimonial from "@/util/CardTestimonial";
import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
export interface Props {
  name: string,
  quote: string,
  job: string,
  avatar: string,
  id: number
}
const testimonials = [
  {
      id: 1,
      name: "Diana Ayi",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
      job: "Student",
      avatar: "./images/avatar1.jpg"
  },
  {
      id: 2,
      name: "Daniel Vinyo",
      quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
      job: "Software Egineer",
      avatar: "./images/avatar2.jpg"
  },
  {
      id: 3,
      name: "Edem Quist",
      quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
      job: "University Lecturer",
      avatar: "./images/avatar3.jpg"
  },
  {
      id: 4,
      name: "Grace Lavoe",
      quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
      job: "Talking Parrot",
      avatar: "./images/avatar4.jpg"
  },
  {
      id: 5,
      name: "Nana Yaa Dankwa",
      quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
      job: "Pharmacist",
      avatar: "./images/avatar5.jpg"
  }
]

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const {name, quote, job} = testimonials[index];
  const nextHandel = () => {
    setIndex((preve) => preve + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  const prevHandel = () => {
    setIndex((preve) => preve - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  return (
    <div className="wrapper items-none justify-center py-16 flex-col">
      <h2 className="heading-center">Good news from far away 🥇</h2>
      <div className="subtitle">Let's see what people think of Ciseco</div>
      <div className="testimonial-slider">
        <CardTestimonial>
            <div className="subtitle !text-[18px] !pb-[25px]">{`"${quote}"`}</div>
            <h2 className="heading-center !text-[20px] !mb-[0]">{name}</h2>
            <small className="testimonial_title">{job}</small>
        </CardTestimonial>
      </div>
      <div className="testimonials_btn-container">
        <button className="testimonials_btn">
          <BsFillArrowLeftCircleFill onClick={prevHandel} />
        </button>
        <button className="testimonials_btn">
          <BsFillArrowRightCircleFill onClick={nextHandel} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
