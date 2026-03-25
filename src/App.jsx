import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    console.log("add to bookmark")
  };
  return (
    <>
      <Header></Header>
      <main className="flex flex-col md:flex-row w-11/12 max-w-7xl gap-4 mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <BookMarks />
      </main>
    </>
  );
}

export default App;
