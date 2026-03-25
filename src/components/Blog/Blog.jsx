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
    <div>
      <div>
        <img src={cover} alt="" />
      </div>
      <div> </div>
    </div>
  );
};

export default Blog;
