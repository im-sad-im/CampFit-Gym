import Container from "react-bootstrap/esm/Container"

export default function Footer(){
    
    //store value in currentDate returned by a date object
    const currentDate = new Date().getFullYear()

    return(
        <footer className="p-4">
        <Container className="text-center">
        <div className="footer-line"></div>
            <span> © 2021-{currentDate}, All Rights Reserved</span>
        </Container>
        </footer>
    )
}