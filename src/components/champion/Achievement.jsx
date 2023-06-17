export default function Achievement({number, title}){
    return(
        <div>
                <div className="w-50">
                            <h2 className="font-head sub-heading">{number}<span className="primary-text-color font-head">K</span></h2>
                            <p className="subtitle sub-sub-font">{title}</p>
                        </div>
        </div>
    );
}