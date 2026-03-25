import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col md:flex-row w-11/12 max-w-7xl gap-4 mx-auto">
        <Blogs />
        <BookMarks />
      </main>
    </>
  );
}

export default App;
