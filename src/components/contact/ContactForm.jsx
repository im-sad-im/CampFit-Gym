export default function ContactForm(){
    return(
        <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <textarea name="message" rows="4" placeholder="Message"/>

            <button type="submit">submit</button>
        </form>
    )
}