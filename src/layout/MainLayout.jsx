import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import ScrollToTop from "./ScrollToTop";
import { AnimatePresence } from "framer-motion";

const MainLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="grow bg-[rgb(var(--color-bg))] px-4 sm:px-6 lg:px-16">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
