//
import "../styles/BookCover.css";

export default function BookCard({id, title, summary, cover}) {
  return (
    <div className="book-card">
      <img src={cover} alt={title} className="book-cover" />

      <h3>{title}</h3>
      <p>{summary}</p>
      <span className="book-id">ID: {id}</span>
    </div>
  );
}
