import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-xl">
      <h2 className="text-xl font-bold  p-2">{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
