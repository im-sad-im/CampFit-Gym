import Logo from "../../assets/img/logo/campfitLogo.png"
export default function Contactbox(){
    return(
        <div className="d-flex flex-column gap-3">
            <div><img src={Logo} alt="campfit logo" style={{width: "4rem"}} /></div>
            <div><p>Number 436 Ranchview Dr.Richardson, California 62639, America Serikat Country</p></div>
            <div className="d-flex flex-column">
                <span className="subtitle sub-sub-font">Email Address</span>
                <span className="sub-sub-font">Campfit@gmail.com</span>
            </div>
            <div className="d-flex flex-column">
                <span className="subtitle ">Phone Number</span>
                <span className="sub-sub-font">(220) 133-0117 - (220) 133-0443</span>
            </div>
        </div>
    )
}