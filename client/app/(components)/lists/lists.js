"use client";

import { useState } from "react";

import Image from "next/image";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Lists = ({ title, bigData }) => {
  const [place, setPlace] = useState(0);

  const { totalComics, data } = bigData;

  console.log(totalComics * -1);

  const handlePrevious = () => {
    if (place < 0) {
      setPlace((prev) => prev + 1);
    }
  };
  const handleNext = () => {
    if (totalComics * -1 < place - 4) {
      setPlace((prev) => prev - 1);
    }
  };

  console.log(place);

  return (
    <section className="list">
      <div className="title">
        <span>{title}</span>{" "}
        <div className="filter-container">
          <span onClick={handlePrevious}>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span onClick={handleNext}>
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>
      </div>
      <div className="items">
        {data.map((item, i) => (
          <div className="item" style={{ "--i": place }} key={i}>
            <div className="image-container"></div>
            <div className="info">
              <span>{item.chapter}</span>
              <span>{item.chapterAge} ago</span>
            </div>
            <div className="text-container">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lists;
