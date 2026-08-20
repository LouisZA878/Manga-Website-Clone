"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { HiMagnifyingGlass } from "react-icons/hi2";

const Input = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/query?s=${query}`);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <HiMagnifyingGlass />
      <button type="submit">Browse</button>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </form>
  );
};

export default Input;
