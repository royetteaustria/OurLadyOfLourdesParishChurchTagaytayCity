import { Navbar } from "./components/nav/Navbar";
import ScrollRestoration from "./components/other/ScrollRestoration";
import MainPage from "./pages/MainPage";
import Loader from "../weddingAdmin/common/Loader";
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import clientroutes from "./routes/Route";
import MaybeShowNavbar from "./components/other/MaybeShowNavbar";
import { Toaster } from "react-hot-toast";

const Client = () => {
    const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loader/>
  ) : (
    <>
    <Toaster/>
    <MaybeShowNavbar>
      <Navbar/>
    </MaybeShowNavbar>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="*" element={<PageError />} /> */}
        {clientroutes.map((route, index) => {
          const { path, component: Component } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </>
  )
}

export default Client;
