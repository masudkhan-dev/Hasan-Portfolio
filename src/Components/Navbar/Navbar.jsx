const Navbar = () => {
  return (
    <main>
      <div className="container mx-auto fixed top-0 left-0 right-0 mt-3">
        <div className="bg-[#06223F] flex justify-between px-8 py-5 rounded-xl z-40">
          <div className="logo">
            <h2 className="text-white font-bold text-2xl">Safin</h2>
          </div>
          <div>
            <ul className="flex gap-4 text-white">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
