import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleAddToReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="lg:w-2/3 mx-auto mt-10">
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            handleAddToReadingTime={handleAddToReadingTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleAddToReadingTime: PropTypes.func,
};
export default Blogs;
