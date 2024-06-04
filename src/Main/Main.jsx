import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
