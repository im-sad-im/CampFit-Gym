export default function Footer(){
    
    //store value in currentDate returned by a date object
    const currentDate = new Date().getFullYear()

    return(
        <footer className="container text-center footer">
        <div className="footer-line"></div>
            <span> © 2021-{currentDate}, All Rights Reserved</span>
        </footer>
    )
}