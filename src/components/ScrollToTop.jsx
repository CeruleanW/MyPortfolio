import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//auto scroll to the top when switching route
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}