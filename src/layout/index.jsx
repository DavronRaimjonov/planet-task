import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import "./style.css";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className=".main">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
