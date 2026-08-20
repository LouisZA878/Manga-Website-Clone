"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const FilterSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilter = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(key, value);

    router.push(`${pathname}?${params.toString()}`);
  };

  const tempFilterState = false;

  // filters:
  // type = manga, manwha, comic
  // genre = isekai etc
  // sort = asc alpha, desc alpa, asc released date, desc release date

  return (
    <section className="filter">
      <div className="filter-container">
        <span>Sort</span>
        <select
          name="sort"
          onChange={(e) => handleFilter("sort", e.target.value)}
        >
          <option value="any">Any</option>
          <option value="alpha-asc">Alphabetically (asc)</option>
          <option value="alpha-desc">Alphabetically (desc)</option>
          <option value="latest-asc">Latest (asc)</option>
          <option value="latest-desc">Latest (desc)</option>
        </select>
      </div>
      <div className="filter-container">
        <span>Information</span>
        <select
          name="information"
          onChange={(e) => handleFilter("info", e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
        </select>
      </div>
      <div className="filter-container">
        <span>Type</span>
        <select
          name="type"
          onChange={(e) => handleFilter("type", e.target.value)}
        >
          <option value="any">Any</option>
          <option value="manwha">Manwha</option>
          <option value="manga">Manga</option>
          <option value="comic">Comic</option>
        </select>
      </div>
      <div className="filter-container">
        <span>Genre</span>
        <select
          name="genre"
          onChange={(e) => handleFilter("genre", e.target.value)}
        >
          <option value="any">Any</option>
          <option value="isekai">Isekai</option>
          <option value="romance">Romance</option>
        </select>
      </div>
    </section>
  );
};

export default FilterSection;
