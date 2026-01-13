//
import BookCard from "./BookCard";

export default function BookList({books}) {
  // console.log("BookList received books:", books);
  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "1.2rem"}}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          summary={book.summary}
          cover={book.cover}
        />
      ))}
    </div>
  );
}
