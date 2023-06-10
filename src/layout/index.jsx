import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
