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
import LargeLists from "./(components)/lists/large-lists";

const Announcements = () => {
  return (
    <ul className="announcement">
      <li className="title">ANNOUNCEMENTS</li>
      <li>
        <span className="heading">New: </span>
        <span className="highlight">Connect ReaperHome</span> to auto-sync your
        read progress.
      </li>
      <li>
        <span className="heading">New: </span>
        <span className="highlight">Connect WideSpread</span> to auto-sync your
        read progress.
      </li>
      <li>
        We runs on the work of scanlators, translators, and uploaders — thank
        you for sharing what you love.
      </li>
      <li>
        If you'd like to upload content to this website, please see the{" "}
        <span className="highlight">upload request</span> page.
      </li>
      <li>We supports import your list from MAL, AL, MU, Comick and File.</li>
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
    totalComics: 36,
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
    <main id="home">
      <div className="box-1">
        <Announcements />
        <Socials />
        <Lists
          title="New Chapters From Followed Comics"
          bigData={mockChapterData}
        />
        <Lists title="Newly Released Comics" bigData={mockChapterData} />
        <Lists title="User Comic Collections" bigData={mockChapterData} />
        <LargeLists title="Latest Updates" bigData={mockChapterData} />
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
              <span>Ch.6</span> <span>1m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">Why? </div>
            <div className="info">
              <span>Ch.17</span> <span>6m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">Creature 17</div>
            <div className="info">
              <span>Ch.1</span> <span>10m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">The Begining And The End</div>
            <div className="info">
              <span>Ch.11</span> <span>33m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">Grass Is Greener</div>
            <div className="info">
              <span>Ch.4</span> <span>45m ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANWHA</div>
            <div className="manga-name">Level Leveler</div>
            <div className="info">
              <span>Ch.354</span> <span>1h ago</span>
            </div>
          </li>
          <li>
            <div className="thumbnail-container"></div>
            <div className="type">MANGA</div>
            <div className="manga-name">
              Where Theres A House There's A Home
            </div>
            <div className="info">
              <span>Ch.100</span> <span>1h ago</span>
            </div>
          </li>
        </ul>
        <div className="sub-title">
          <div className="primary">Top 10 Uploaders</div>
        </div>
        <ol>
          <li>
            <div className="ranking">1</div>
            <div className="avatar"></div>
            <div className="name">Níðhöggr</div>
            <div className="total-uploads">
              3 104 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">2</div>
            <div className="avatar"></div>
            <div className="name">Jörmungandr</div>
            <div className="total-uploads">
              3 000 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">3</div>
            <div className="avatar"></div>
            <div className="name">Fafnir</div>
            <div className="total-uploads">
              2 901 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">4</div>
            <div className="avatar"></div>
            <div className="name">Góinn</div>
            <div className="total-uploads">
              2 900 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">5</div>
            <div className="avatar"></div>
            <div className="name">Móinn</div>
            <div className="total-uploads">
              2 788 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">6</div>
            <div className="avatar"></div>
            <div className="name">Grafvitnir</div>
            <div className="total-uploads">
              2 504 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">7</div>
            <div className="avatar"></div>
            <div className="name">Grábakr</div>
            <div className="total-uploads">
              2 167 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">8</div>
            <div className="avatar"></div>
            <div className="name">Grafvölluðr</div>
            <div className="total-uploads">
              1 834 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">9</div>
            <div className="avatar"></div>
            <div className="name">Sváfnir</div>
            <div className="total-uploads">
              1 404 <span>ch</span>
            </div>
          </li>
          <li>
            <div className="ranking">10</div>
            <div className="avatar"></div>
            <div className="name">Ófnir</div>
            <div className="total-uploads">
              534 <span>ch</span>
            </div>
          </li>
        </ol>
      </div>
    </main>
  );
}
