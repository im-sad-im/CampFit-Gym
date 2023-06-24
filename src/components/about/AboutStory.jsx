import signature from "../../assets/img/about/sign.png"

export default function AboutStory() {
    return (
        <div className="about-text">
            <h2 className="font-head sub-heading">story <span className="font-head primary-text-color">about</span> us</h2>
            <p className="first-para subtitle">
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.
            </p>
            <p className="second-para subtitle"> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.</p>
            <img src={signature} alt='signature' className="w-25" />
            <div className="at-author">
                <h4>Walter White</h4>
                <span className="primary-text-color">CEO-FOUNDER</span>
            </div>
        </div>
    );
}