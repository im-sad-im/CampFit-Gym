import image from "../../assets/img/champion/champ.jpg"
import {BsFillPlayCircleFill} from "react-icons/bs";

export default function PlayWorkout(){
    return(
        <div className="text-center position-relative my-5">
        <img src={image} alt="workout video" className="rounded w-50" />
        <BsFillPlayCircleFill  className="position-absolute play-btn"  size={70}/>
    </div>
    );
}