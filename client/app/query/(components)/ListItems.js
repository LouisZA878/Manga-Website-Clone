"use client";

import { useSearchParams } from "next/navigation";

const ListItems = () => {
  const searchParams = useSearchParams();
  let sort = searchParams.get("sort")
    ? searchParams.get("sort")
    : "latest-desc";
  let genre = searchParams.get("genre") ? searchParams.get("genre") : "any";
  let info = searchParams.get("info") ? searchParams.get("info") : "small";
  let type = searchParams.get("type") ? searchParams.get("type") : "any";

  const tempInfoState = "small";
  // small = Image, Title, Chapters, Author
  // medium = Image, Title, Chapters, Author, Some bio and released date
  // large = Image, Title, Chapters, Entire bio, release date, author, total upvotes

  const mockData = [
    {
      id: "3749ndend234899",
      title: "Lord of the seven seas",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      chapters: 76,
      img: null,
      author: "Rimiru",
      upvotes: 90,
    },
    {
      id: "3749nde1237d3Dw234899",
      title: "Lord of the seven seas - Specials",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      chapters: 2,
      img: null,
      author: "Rimiru",
      upvotes: 12,
    },
    {
      id: "31749ndend234899",
      title: "Lord of the seven seas",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      chapters: 76,
      img: null,
      author: "Rimiru",
      upvotes: 90,
    },
    {
      id: "3749nde41237d3Dw234899",
      title: "Lord of the seven seas - Specials",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      chapters: 2,
      img: null,
      author: "Rimiru",
      upvotes: 12,
    },
    {
      id: "3749ndend2348993",
      title: "Lord of the seven seas",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      chapters: 76,
      img: null,
      author: "Rimiru",
      upvotes: 90,
    },
    {
      id: "3749nde1237d3Dw2344899",
      title: "Lord of the seven seas - Specials",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      chapters: 2,
      img: null,
      author: "Rimiru",
      upvotes: 12,
    },
    {
      id: "3749ndend54234899",
      title: "Lord of the seven seas",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      chapters: 76,
      img: null,
      author: "Rimiru",
      upvotes: 90,
    },
    {
      id: "3749nde1237d3Dw2348599",
      title: "Lord of the seven seas - Specials",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      chapters: 2,
      img: null,
      author: "Rimiru",
      upvotes: 12,
    },
  ];

  const sortList = ["latest-desc", "latest-asc", "alpha-desc", "alpha-asc"];
  const infoList = ["small", "medium"];

  if (!infoList.includes(info)) {
    info = "small";
  }

  if (!sortList.includes(sort)) {
    sort = "latest-desc";
  }

  if (info === "small") {
    return mockData.map(({ id, img, author, chapters, title }) => (
      <div key={id} className="item-box small">
        <div className="image-container"></div>
        <div className="info">
          <span>Author: {author}</span>
          <span>{chapters} chapter(s)</span>
        </div>
        <div className="text-container">{title}</div>
      </div>
    ));
  }

  if (info === "medium") {
    return mockData.map(({ id, title, author, bio, chapters }) => (
      <div key={id} className="item-box medium">
        <div className="image-container"></div>
        <div className="info-box">
          <div className="title">{title}</div>
          <div className="author">
            Author - {author} / {chapters} - chapter(s)
          </div>
          <div className="bio">{bio}</div>
        </div>
      </div>
    ));
  }
};

export default ListItems;
