import {useState} from "react";

export default function BookSummon({addBookMan: newBook}) {
  const [text, setText] = useState("");

  const handleSummon = (e) => {
    e.preventDefault();
    if (text.trim()) newBook(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSummon} action="">
        <input
          id="book-summon-id"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a book title.."
        />
        <button>Add</button>
      </form>
    </>
  );
}
