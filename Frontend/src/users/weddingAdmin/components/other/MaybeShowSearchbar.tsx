import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MaybeShowSearchbar {
  children: React.ReactNode;
}

const MaybeShowSearchbar: React.FC<MaybeShowSearchbar> = ({ children }) => {
  const location = useLocation();
  const [showSearchBar, setShowSearchbar] = useState(false);

  useEffect(() => {
    if (
      location.pathname === '/WeddingAnalytics' ||
      location.pathname === '/' ||
      location.pathname === '/Inquiries' ||
      location.pathname === '/Client' ||
      location.pathname === '/reservation' ||
      location.pathname === '/weddingAdmin/reports'
    ) {
      setShowSearchbar(false);
    } else {
      setShowSearchbar(true);
    }
  }, [location]);

  return (
    <div className="">{showSearchBar && children}</div>
  );
};

export default MaybeShowSearchbar;
