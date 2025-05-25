"use client";

import { useState } from "react";
import Image from "next/image";
import books from "@/content/somejson/2505-bookshelfDB.json";
import PageLayout from "@/app/components/pageLayout";
import Hero from "@/app/components/Hero";

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const getCategoryName = (vote) => {
  switch (vote) {
    case "A":
      return "My Selection Literary";
    case "C":
      return "Solid but Forgettable";
    case "F":
      return "Not My Cup of Tea";
    default:
      return "Unknown Category";
  }
};

const getBookClasses = (vote) => {
  const fontSizeClass = vote === "F" ? "text-xs" : vote === "C" ? "text-base" : "text-lg";
  const opacityClass = vote === "F" ? "opacity-30" : vote === "C" ? "opacity-75" : "opacity-100";
  return `${fontSizeClass} ${opacityClass}`;
};

export default function BookshelfPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minStartYear, setMinStartYear] = useState(2020);

  const filteredBooks = books
    .filter((b) => b.Name && b.Name !== "book with no data")
    .filter((b) => selectedCategory === "all" || b.Vote === selectedCategory)
    .filter((b) => {
      const bookYear = parseDate(b.Starting).getFullYear();
      return bookYear >= minStartYear;
    })
    .sort((a, b) => parseDate(b.Starting) - parseDate(a.Starting));

  const categories = [
    { id: "all", label: "All" },
    { id: "A", label: "Selection Literary" },
    { id: "C", label: "Solid but Forgettable" },
  ];

  return (
    <PageLayout>
      <Hero
        title="My Bookshelf"
        subtitle={`A collection of books I've read. My philosophy is to read books both in English and my native language. Regarding the themes, 
          I tend to read essay-style books about self-improvement and tech. Following the exploration vs. exploitation dilemma of reinforcement learning,
           sometimes I read books that I will probably not like—just to explore.`}
        subtitle2={`I've started tracking my reading since 2021.`}
      />

      {/* Two-Column Layout for Book Count and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 px-4 md:px-20">
        {/* Filters on the Right */}
        <div className="space-y-4">
          {/* Category Filter */}
          <div className="flex justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200
                  ${
                    selectedCategory === cat.id
                      ? "bg-[var(--color-cards-description)] scale-105 shadow-md"
                      : "hover:scale-105"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Year Filter */}
          <div className="flex justify-center items-center my-4">
            <label className="text-sm mr-4">From: <strong>{minStartYear}</strong></label>
            <div className="w-full md:w-2/3">
              <input
                type="range"
                min="2021"
                max={new Date().getFullYear()}
                value={minStartYear}
                onChange={(e) => setMinStartYear(Number(e.target.value))}
                className="w-full bg-[var(--color-cards-description)] rounded-full h-2 appearance-none"
              />
            </div>
          </div>
        </div>

        {/* Book Count on the Left */}
        <div className="flex justify-center items-center">
          <div className="text-5xl font-semibold ">
            {filteredBooks.length} 📚 Read
          </div>
        </div>
      </div>

      {/* Book List */}
      <div className="flex flex-col gap-2 px-4 md:px-20 py-8">
        {filteredBooks.map((book, i) => {
          const vote = book.Vote;
          const days = book.Days || 1;
          const showCover = vote === "A";
          const coverUrl = book.ISBN13
            ? `https://covers.openlibrary.org/b/isbn/${book.ISBN13}-M.jpg`
            : null;

          return (
            <div key={i}>
              {/* Book Card */}
              <div
                className={`flex items-center p-4 rounded-xl ${getBookClasses(vote)} hover:bg-[var(--color-cards-description)] transition`}
              >
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">
                    {getCategoryName(vote)}
                  </p>
                  <h3 className="font-bold">{book.Name}</h3>
                  <p className="text-gray-700">✍️ {book.Author || "Unknown"}</p>
                  <p className="text-gray-700">📅 {book.Starting}</p>
                  <span className="mt-2 text-sm text-gray-500">⏱️ {days}d</span>
                </div>

                {/* Book Cover */}
                {showCover && coverUrl && (
                  <div className="w-20 h-28 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    <Image
                      src={coverUrl}
                      alt="cover"
                      width={80}
                      height={112}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                )}
              </div>

              {/* Splitter Line */}
              {i < filteredBooks.length - 1 && (
                <hr className="border-t border-gray-400 my-2" />
              )}
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="text-center text-xs text-gray-400 pb-10">
        All cover images are requested using the Open Library API.
      </div>
    </PageLayout>
  );
}
