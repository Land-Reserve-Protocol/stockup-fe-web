import { Outlet, Link, useLocation } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const LoadingScreen = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-transparent">
    <div className="flex flex-col items-center space-y-4 spinner-section">
      <h1 className="text-2xl font-semibold animate-pulse">Loading...</h1>
      <div className="spinner" id="spinner"></div>
    </div>
  </div>
);
export default function Authentication() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
  const { pathname } = useLocation();

  if (loader) return <LoadingScreen />;

  return (
    <main className="flex h-screen pt-17">
      <section className="w-1/3 auth-sec text-[#F7EFEC]">
        <button className="text-[10px] hover:scale-105 font-thin transition-all ease-in-out duration-200 flex items-center justify-center gap-2 cursor-pointer font-bold border-1 border-[#1D2328] p-3 m-2 rounded-xl bg-transparent">
          <span>
            <FaArrowLeft />
          </span>
          Back to App
        </button>
      </section>
      <section className="w-1/2 flex flex-col justify-center items-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Outlet />
            <p className="mt-2 text-sm text-center">
              {pathname === "/auth" || pathname === "/auth/register" ? (
                <>
                  Already have an account?
                  <Link to="/auth/login" className="text-blue-600 underline">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  Don’t have an account?
                  <Link to="/auth/register" className="text-blue-600 underline">
                    Register
                  </Link>
                </>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
