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
      location.pathname === '/ParishSecretary/Dashboard' ||
      location.pathname === '/ParishSecretary/record' ||
      location.pathname === '/ParishSecretary/Addrecord' ||
      location.pathname === '/ParishSecretary/EdiRecord/:id' ||
      location.pathname === '/ParishSecretary/Client' ||
      location.pathname === '/ParishSecretary/ViewRecordInfo/:id'
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
