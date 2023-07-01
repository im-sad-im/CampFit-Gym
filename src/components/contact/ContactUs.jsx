import Row from "react-bootstrap/esm/Row";
import ContactForm from "./ContactForm";
import Contactbox from "./Contactbox";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

export default function ContactUs(){
    return(
       <Container className="my-5">
            <Row>
                <Col lg={6} md={12}>
                <h4>Contact Us</h4>
                <p className="subtitle sub-sub-font">We usually respond before 24 hours.</p>
                <ContactForm />
                </Col>
                <Col lg={6} className="contact-box" >
                <Contactbox />
                </Col>
            </Row>
       </Container>
         
    );  
}