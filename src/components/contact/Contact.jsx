import Row from "react-bootstrap/esm/Row";
import ContactForm from "./ContactForm";
import Contactbox from "./Contactbox";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

export default function Contact(){
    return(
       <Container className="my-5">
            <Row>
                <Col lg={6} md={12}>
                <ContactForm />
                </Col>
                <Col lg={6} className="mt-md-5 mt-sm-5" >
                <Contactbox />
                </Col>
            </Row>
       </Container>
         
    );  
}