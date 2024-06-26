import { ReactNode } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MaybeShowNavbar = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        if (
            location.pathname === "/reservation" ||
            location.pathname === "/searchdate" ||
            // location.pathname === "/weddingform" ||
            location.pathname === "/baptismalform" ||
            location.pathname === "/massform" ||
            location.pathname === "/signIn" ||
            location.pathname === "/OtpVerification" ||
            location.pathname === "/NewPassword"
        ) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }, [location]);

    return <div className="sticky  z-50">{showNavbar && children}</div>;
};

export default MaybeShowNavbar;
