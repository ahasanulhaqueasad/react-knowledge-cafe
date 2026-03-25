const Header = () => {
  return (
    <header className=" bg-purple-100">
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold">Knowledge Cafe</a>
        </div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
    </header>
  );
};

export default Header;
