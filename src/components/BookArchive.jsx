import booksData from "../data/books.json";
import BookList from "./BookList";

// https://raw.githubusercontent.com/Torkel0825/library-app/refs/heads/main/book%20app%20main/src/data/books.json
 
export default function BookArchive() {
  // automatically import all jpgs in placeholder
  const images = import.meta.glob("../placeholder/*jpg", {
    eager: true,
    as: "url",
  });

  //   convert object to id -> url map
  const coverMap = {};
  Object.entries(images).forEach(([path, url]) => {
    // Extract number from filename e.g. "lotr_cover_1.jpg" - >
    // This weird syntax is for pulling the to number in the filename of the covers.
    // lotr_cover_1__v1.jpg <- (\d+) & (\d+) & \.jpg <- what i want. $ <- signals the end.
    const match = path.match(/_(\d+)__v(\d+)\.jpg$/);
    if (match) {
      const id = parseInt(match[1], 10);
      //   const version = parseInt(match[2], 10);
      coverMap[id] = url;
      //   coverMap[id] = coverMap[id] ? [...coverMap[id], url] : [url];
    }
  });

  //    merge images into books
  const booksWithCovers = booksData.map((book) => ({
    ...book,
    cover: coverMap[book.id],
  }));

  //   console.log("booksWithCovers:", booksWithCovers); // should show array

  return <BookList books={booksWithCovers} />;
}
