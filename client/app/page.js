import Link from "next/link";

import Lists from "./(components)/lists/lists";

import {
  FaFacebookF,
  FaFacebookMessenger,
  FaRedditAlien,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { IoMdLink } from "react-icons/io";

import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";

import "./page.css";

const Announcements = () => {
  return (
    <ul className="announcement">
      <li className="title">ANNOUNCEMENTS</li>
      <li>
        <span className="heading">New: </span>
        <span className="highlight">Connect MangaRaka</span> to auto-sync your
        read progress.
      </li>
      <li>
        <span className="heading">New: </span>
        <span className="highlight">Connect AniList</span> to auto-sync your
        read progress.
      </li>
      <li>
        Comix runs on the work of scanlators, translators, and uploaders — thank
        you for sharing what you love.
      </li>
      <li>
        If you'd like to upload content to Comix, please see the{" "}
        <span className="highlight">upload request</span> page.
      </li>
      <li>
        Comix supports import your list from MAL, AL, MU, Comick and File.
      </li>
      <li>Help us share the site to more people if you like it! ❤️</li>
    </ul>
  );
};

const Socials = () => {
  return (
    <section className="socials">
      <span>SHARE - 16K</span>{" "}
      <Link href="Bruh">
        <FaFacebookF />
      </Link>
      <Link href="Bruh">
        <FaXTwitter />
      </Link>
      <Link href="Bruh">
        <FaFacebookMessenger />
      </Link>
      <Link href="Bruh">
        <FaRedditAlien />
      </Link>
      <Link href="Bruh">
        <BiLogoTelegram />
      </Link>
      <Link href="Bruh">
        <IoMdLink />
      </Link>
    </section>
  );
};

export default function Home() {
  const mockChapterData = {
    totalComics: 16,
    data: [
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
      {
        title: "The day I turned into a God",
        img: null,
        chapterAge: "6h",
        chapter: "Ch.465",
      },
    ],
  };

  return (
    <main>
      <div className="box-1">
        <Announcements />
        <Socials />
        <Lists
          title="New Chapters From Followed Comics"
          bigData={mockChapterData}
        />
        <Lists title="Newly Released Comics" bigData={mockChapterData} />
        <Lists title="User Comic Collections" bigData={mockChapterData} />
      </div>
      <div className="box-2">
        <div className="call-to-action-box">
          <div className="svg-container">
            <IoPhonePortraitOutline />
          </div>
          <span className="call-title">Install Wibba</span>
          <span className="call-bio">A peak app for peak people</span>
        </div>
        <div className="call-to-action-box">
          <div className="svg-container">
            <FaDiscord />
          </div>
          <span className="call-title">Join Our Community</span>
          <span className="call-bio">For the people, by the people</span>
        </div>
        <div className="sub-title">
          <div className="primary">Recently Added</div>
          <span>/</span>
          <div className="secondary">Complete Series</div>
        </div>
        <ul className="recently-added-list">
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">The King, The God, The Human </div>
            <div className="info">
              <span>Ch.6</span> <span>6m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">The King, The God, The Human </div>
            <div className="info">
              <span>Ch.6</span> <span>6m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">The King, The God, The Human </div>
            <div className="info">
              <span>Ch.6</span> <span>6m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">The King, The God, The Human </div>
            <div className="info">
              <span>Ch.6</span> <span>6m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">The King, The God, The Human </div>
            <div className="info">
              <span>Ch.6</span> <span>6m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">The King, The God, The Human </div>
            <div className="info">
              <span>Ch.6</span> <span>6m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">The King, The God, The Human </div>
            <div className="info">
              <span>Ch.6</span> <span>6m ago</span>
            </div>
          </li>
        </ul>
        <div className="sub-title">
          <div className="primary">Top 10 Uploaders</div>
        </div>
      </div>
    </main>
  );
}
