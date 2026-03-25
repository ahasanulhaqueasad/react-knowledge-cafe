import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
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
        <img className="rounded-xl" src={cover} alt="" />
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
          <p>{reading_time}</p> <CiBookmark></CiBookmark>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="mb-5 font-bold">{hashtags}</p>
        </div>
        <a className="underline font-bold text-blue-600" href="">
          Mark as read
        </a>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
