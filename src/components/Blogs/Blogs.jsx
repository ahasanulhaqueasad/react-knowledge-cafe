import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3 mx-auto mt-10">
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}
          handleAddToBookmark={handleAddToBookmark}></Blog>
        ))}
      </div>
      
    </div>
  );
};

export default Blogs;
