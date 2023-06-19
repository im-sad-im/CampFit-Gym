import CountUp from "react-countup"

export default function Achievement({number, title}){
    return(
        <div>
                <div className="w-50">
                {/* starts a count up transition on render */}
                    <CountUp duration={2} delay={0} end={number} className="font-head sub-heading" />
                           <span className="primary-text-color font-head sub-heading">K</span>
                            <p className="subtitle sub-sub-font">{title}</p>
                        </div>
        </div>
    );
}