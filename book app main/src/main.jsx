import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// next (in BookArchive) -> make the coverMap go through the json and match the covers automatically another way, maybe with the name or something.
// add more books home library, maybe more from wishlist
//
// make a form on the page, in bookSummon, or a new bookForm, where new books can be added to the json and displayed. (through the webpage)
// -> advanced -> make it possible to upload a picture of the cover

// make a favorites page, a filter option (new-old, a-z, read-not, bought-not)

// have it possible to click and show a modal(up close) preview of any book, with more information and ability to change the cover to alternative ones.

//
// make a separate project, almost identical to this one, but use gutendex' api to bring in books. REMEMBER to set a limit on books brought and shown.
