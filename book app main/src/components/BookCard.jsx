//
import "../placeholder/BookCover.css";

export default function BookCard({id, title, summary, cover}) {
  return (
    <div
      className="book-card"
      style={{border: "solid orange", margin: "1.2rem", width: "200px"}}
    >
      <span className="book-id">ID: {id}</span>
      <img src={cover} alt={title} className="book-cover" />

      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
}
