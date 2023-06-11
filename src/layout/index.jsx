import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import "./style.css";
import Footer from "../components/footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
