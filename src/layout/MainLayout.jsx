import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="grow bg-[rgb(var(--color-bg))]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
