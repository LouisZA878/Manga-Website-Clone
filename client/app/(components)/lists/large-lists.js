"use client";

import "./lists.css";

import { useState } from "react";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const LargeLists = ({ title, bigData }) => {
  // Turn the skeleton on and off
  const tempStateToggle = false;

  const [place, setPlace] = useState(0);

  const { data } = bigData;

  const itemsPerList = 5;
  const listsPerPage = 3;
  const itemsPerPage = itemsPerList * listsPerPage;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentPage = Math.abs(place);

  const pageStart = currentPage * itemsPerPage;

  const pageData = data.slice(pageStart, pageStart + itemsPerPage);

  const list1 = pageData.slice(0, 5);
  const list2 = pageData.slice(5, 10);
  const list3 = pageData.slice(10, 15);

  const handlePrevious = () => {
    if (place < 0) {
      setPlace((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setPlace((prev) => prev - 1);
    }
  };

  const renderList = (list) => (
    <div className="items">
      {list.map((item, i) => (
        <div className="item" style={{ "--i": 0 }} key={item.id ?? i}>
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
  );

  return (
    <section className="large-lists">
      <div className="title">
        <span>{title}</span>

        <div className="filter-container">
          <span onClick={handlePrevious}>
            <MdOutlineKeyboardArrowLeft />
          </span>

          <span onClick={handleNext}>
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>
      </div>

      {renderList(list1)}
      {renderList(list2)}
      {renderList(list3)}
    </section>
  );
};

export default LargeLists;
