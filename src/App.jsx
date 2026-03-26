import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";
// import PropTypes from "prop-types";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // console.log(blog)
    const exists = bookmarks.find((b) => b.id === blog.id);
    if (!exists) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
  };

  const handleAddToReadingTime = (id, time) => {
    setReadingTime(readingTime + time);

    // remove the read blog form bookmark
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id,
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <main className="flex flex-col md:flex-row w-11/12 max-w-7xl gap-4 mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleAddToReadingTime={handleAddToReadingTime}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </main>
    </>
  );
}
export default App;
