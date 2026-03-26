import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <div className="w-full lg:w-1/3 mt-10 mb-5 border-2 rounded-xl ">
      <div className="m-2 border border-[#6047EC] rounded-xl">
        <p className="text-xl font-bold p-2 text-[#6047EC] ">
          Spent time on read : {readingTime} mins
        </p>
      </div>
      <div className="m-2 border border-[#6047EC] rounded-xl bg-slate-200">
        <h2 className="text-xl font-bold p-2 text-[#000000]">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        <div className="p-2 space-y-2">
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
