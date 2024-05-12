import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // or <></>
}

export default ScrollRestoration;
