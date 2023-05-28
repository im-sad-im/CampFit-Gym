import Workids from "../../assets/img/supported/workids.png"
import Gymgang from "../../assets/img/supported/gymgangg.png"
import Camptran from "../../assets/img/supported/camptran.png"
import Worlcamp from "../../assets/img/supported/worlcamp.png"
import Livepedia from "../../assets/img/supported/livepedia.png"

function Support(){
    return(
        <>
            <section id="support" className="support-area">
                <p>This training is supported by</p>
                <div className="support-item">
                    <img src={Workids} alt="workids-img" className="support-img"/>
                    <img src={Gymgang} alt="gymgang-img" className="support-img"/>
                    <img src={Camptran} alt="camptran-img" className="support-img"/>
                    <img src={Worlcamp} alt="worlcamp-img" className="support-img"/>
                    <img src={Livepedia} alt="livepedia-img" className="support-img"/>
                </div>
            </section>
        </>
    )
}

export default Support;