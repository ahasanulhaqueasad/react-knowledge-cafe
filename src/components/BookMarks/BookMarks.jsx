const BookMarks = () => {
  return (
    <div className="w-1/3 mt-10 border-2 rounded-xl">
      <div className="m-2 border border-[#6047EC] rounded-xl">
        <p className="text-xl font-bold p-2 text-[#6047EC]">
          Spent time on read : {}
        </p>
      </div>
      <div className="m-2 border border-[#6047EC] rounded-xl">
        <h2 className="text-xl font-bold p-2 text-[#000000]">Bookmarked Blogs : {}</h2>
      </div>
    </div>
  );
};

export default BookMarks;
