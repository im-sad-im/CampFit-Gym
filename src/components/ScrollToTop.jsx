import { useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    
    const toggleVisible = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
            setIsVisible(true);
        else
            setIsVisible(false);
    }

    //Triggers toggleVisible function when scroll event is triggered
    window.addEventListener('scroll', toggleVisible);

    const goToTop = () => {
        window.scrollTo({ top: 0 });
    }
    return (
        <>
            {/* Renders button if isVisible is true */}
            {
                isVisible && (<IconContext.Provider value={{ className: "scroll-btn", color: "#000" }}>
                    <AiFillCaretUp size={50} onClick={goToTop} />
                </IconContext.Provider>)
            }
        </>
    );
}