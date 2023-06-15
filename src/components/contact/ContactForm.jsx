export default function ContactForm(){
    return(
        <form className="d-flex flex-column gap-2" style={{maxWidth:"80%"}}>
            <input type="text" name="name" placeholder="Name" className="rounded p-2 inputField"/>
            <input type="email" name="email" id="email" placeholder="Email" className="rounded p-2 inputField"/>
            <textarea name="message" rows="4" placeholder="Message" className="rounded p-2 inputField" style={{resize: "none"}}/>

            <button type="submit" className="my-btn btn-main">submit</button>
        </form>
    )
}