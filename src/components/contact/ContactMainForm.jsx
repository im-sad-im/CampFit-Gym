
export default function ContactMainForm(){
    return(
        <form className="d-flex flex-column gap-3" onSubmit={(e) => { e.preventDefault(); }}>
        <input type="text" placeholder="First Name *" id="fName" className="inputField py-2 px-3 rounded" />
        <input type="email" placeholder="Email Address *" id="email" className="inputField py-2 px-3 rounded" required />
        <select className="inputField py-2 px-3 rounded" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>---Select Class---</option>
            <option>Body Building</option>
            <option>Boxing</option>
            <option>Running</option>
            <option>Fitness</option>
            <option>Yoga</option>
            <option>Workout</option>
            <option>Katate</option>
            <option>Meditation</option>
            <option>Cycling</option>
        </select>
        <textarea placeholder="Comment" rows="4" style={{ resize: "none" }} className="inputField py-2 px-3 rounded" />
        <button className="my-btn align-self-center mt-4 border-0" style={{ backgroundColor: "#A1E533", width: "fit-content" }}>Submit Now</button>
    </form>
    );
}