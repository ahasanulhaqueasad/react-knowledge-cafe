import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleAddToReadingTime }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-5 border-2 p-3 rounded-xl">
      <div>
        <img
          className="rounded-xl"
          src={cover}
          alt="knowledge cafe cover_image"
        />
      </div>
      <div className="flex justify-between items-center mt-4 mb-2">
        <div className="flex items-center gap-3">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div>
            <h2 className="font-bold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} min read</p>
          <button onClick={() => handleAddToBookmark(blog)}>
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <div >
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="mb-5 font-bold">
            {hashtags.map((hash, index) => (
              <span key={index} className="mr-2">
                <a href="#" className="text-blue-500 hover:underline">
                  {hash}
                </a>
              </span>
            ))}
          </p>
        </div>
        <button
          onClick={() => handleAddToReadingTime(parseInt(id,reading_time))}
          className="underline font-bold text-blue-600"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleAddToReadingTime: PropTypes.func,
};
export default Blog;
