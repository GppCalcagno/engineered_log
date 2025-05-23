"use client";

import { useState } from "react";
import books from "@/content/somejson/2505-bookshelfDB.json";
import PageLayout from "@/app/components/pageLayout";
import Hero from "@/app/components/Hero";

export default function BookshelfPage() {
  const [minVote, setMinVote] = useState(1);

  // Filtro iniziale e ordinamento per data più recente
  const filteredBooks = books
    .filter((b) => b.Name && b.Name !== "book with no data")
    .filter((b) => b.Vote >= minVote)
    .sort((a, b) => {
      const dateA = new Date(a.Starting);
      const dateB = new Date(b.Starting);
      return dateB.getTime() - dateA.getTime(); // più recente prima
    });

  return (
    <PageLayout>
      <Hero
        title="My Bookshelf"
        subtitle={`A collection of books I've read. My philosophy is to read books both in English and my native language. Regarding the themes, I tend to read essay-style books about self-improvement and tech. 
                    Following the exploration vs. exploitation dilemma of reinforcement learning, sometimes I read books that I will probably not like—just to explore.`}
      />

      {/* Filtro voto */}
      <div className="px-4 sm:px-10 pt-6">
        <label className="text-sm text-gray-600 mr-2">Minimum rating:</label>
        <select
          value={minVote}
          onChange={(e) => setMinVote(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm"
        >
          {[1, 2, 3, 4, 5].map((vote) => (
            <option key={vote} value={vote}>
              {vote} ⭐ and up
            </option>
          ))}
        </select>
      </div>

      {/* Tabella */}
      <div className="overflow-x-auto px-4 sm:px-10 py-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 px-2 text-gray-700 font-medium">Title</th>
              <th className="py-2 px-2 text-gray-700 font-medium">Author</th>
              <th className="py-2 px-2 text-gray-700 font-medium">Start</th>
              <th className="py-2 px-2 text-gray-700 font-medium">Days</th>
              <th className="py-2 px-2 text-gray-700 font-medium">Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, i) => {
              const vote = book.Vote;

              const titleClass = {
                5: "text-xl font-bold text-gray-800",
                4: "text-lg font-semibold text-gray-700",
                3: "text-md font-medium text-gray-600",
                2: "text-base font-normal text-gray-500",
                1: "text-sm font-light text-gray-400",
              }[vote] || "text-base text-gray-400";

              return (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className={`py-4 px-2 ${titleClass}`}>{book.Name}</td>
                  <td className={`py-4 px-2 ${titleClass}`}>{book.Author || "Unknown"}</td>
                  <td className={`py-4 px-2 ${titleClass}`}>{book.Starting}</td>
                  <td className={`py-4 px-2 ${titleClass}`}>{book.Days}</td>
                  <td className={`py-4 px-2 ${titleClass}`}>{"⭐".repeat(vote)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
