import { AiFillCaretUp } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
export default function ScrollToTop() {
    return (
        <>
            <IconContext.Provider value={{ className: "scroll-btn", color: "#000" }}>
                <AiFillCaretUp size={50} />
            </IconContext.Provider>
        </>
    );
}