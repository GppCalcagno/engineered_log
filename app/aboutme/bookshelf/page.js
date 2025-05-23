import books from "@/content/somejson/2505-bookshelfDB.json";
import PageLayout from "@/app/components/pageLayout";
import Hero from "@/app/components/Hero";

export default function BookshelfPage() {
  const filteredBooks = books.filter(
    (b) => b.Name && b.Name !== "book with no data"
  );

  return (
    <PageLayout>
      <Hero
        title="My Bookshelf"
        subtitle="Books I've read"
      />

      <div className="overflow-x-auto px-4 sm:px-10 py-10">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-4 px-2 text-gray-700 font-medium">Title</th>
              <th className="py-4 px-2 text-gray-700 font-medium">Author</th>
              <th className="py-4 px-2 text-gray-700 font-medium">Start Date</th>
              <th className="py-4 px-2 text-gray-700 font-medium">Days</th>
              <th className="py-4 px-2 text-gray-700 font-medium">Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, i) => {
              const isHighRated = book.Vote >= 4;
              const isMediumRated = book.Vote === 3;
              const isLowRated = book.Vote < 3;

              const titleClass = isHighRated
                ? 'text-2xl sm:text-3xl font-semibold text-gray-600'
                : isMediumRated
                ? 'text-xl sm:text-2xl font-medium text-gray-800'
                : 'text-lg sm:text-xl font-normal text-gray-500';

              const ratingClass = isHighRated ? 'text-yellow-500' : 'text-gray-400';
              
              return (
                <tr
                  key={i}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className={`py-4 px-2 ${titleClass}`}>{book.Name}</td>
                  <td className="py-4 px-2 text-gray-600">{book.Author || "Unknown"}</td>
                  <td className="py-4 px-2 text-gray-600">{book.Starting}</td>
                  <td className="py-4 px-2 text-gray-600">{book.Days}</td>
                  <td className={`py-4 px-2 ${ratingClass}`}>
                    {"⭐".repeat(book.Vote)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
