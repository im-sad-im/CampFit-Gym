import CountUp from "react-countup"
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger"

export default function Achievement({number, title}){
    const [isScrollTrigger, setIsScrollTrigger] = useState(false);

    return(
        <ScrollTrigger onEnter={()=>{setIsScrollTrigger(true)}} onExit={()=>{setIsScrollTrigger(false)}}>
                <div className="w-50">
                {/* starts a count up transition on render when scroll triggers the event*/}
                {isScrollTrigger && <CountUp duration={2} delay={0} end={number} className="font-head sub-heading" />}  
                           <span className="primary-text-color font-head sub-heading">K</span>
                            <p className="subtitle sub-sub-font">{title}</p>
                        </div>
        </ScrollTrigger>
       
    );
}