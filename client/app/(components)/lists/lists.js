"use client";

import "./lists.css";

import { useState } from "react";

import Image from "next/image";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Lists = ({ title, bigData }) => {
  // Turn the skeleton on and off
  const tempStateToggle = false;

  const [place, setPlace] = useState(0);

  const { totalComics, data } = bigData;

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
            {tempStateToggle ? (
              <>
                <div className="image-container"></div>

                <div className="info">
                  <span>{item.chapter}</span>
                  <span>{item.chapterAge} ago</span>
                </div>

                <div className="text-container">{item.title}</div>
              </>
            ) : (
              <>
                <div className="image-container-skeleton"></div>
                <div className="info-skeleton">
                  <div></div>
                </div>
                <div className="text-container-skeleton">
                  <div></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lists;
