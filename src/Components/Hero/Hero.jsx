const Hero = () => {
  return (
    <main>
      <div className="container mx-auto mt-24">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-[#06223F] text-primary-content text-9xl font-black grid place-content-center">
              Safin Ahmed Hasan
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              Safin Ahmed Hasan
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
