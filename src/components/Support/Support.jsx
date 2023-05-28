import Workids from "../../assets/img/supported/workids.png"
import Gymgang from "../../assets/img/supported/gymgangg.png"
import Camptran from "../../assets/img/supported/camptran.png"
import Worlcamp from "../../assets/img/supported/worlcamp.png"
import Livepedia from "../../assets/img/supported/livepedia.png"

function Support(){
    return(
        <> 
            <section id="support" className="support-area text-center p-5">
                <p>This training is supported by</p>
                <div className="support-item d-flex justify-content-center flex-wrap gap-4">
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