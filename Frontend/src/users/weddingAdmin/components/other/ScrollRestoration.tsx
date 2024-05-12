import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function ScrollRestoration () {
    const {pathname} = useLocation();
    
    useEffect(() => {
        window.scrollTo( 0, 0 );
    },[pathname]);
    return null; 
}