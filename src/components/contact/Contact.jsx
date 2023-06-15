import Row from "react-bootstrap/esm/Row";
import ContactForm from "./ContactForm";
import Contactbox from "./Contactbox";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

export default function Contact(){
    return(
       <Container >
            <Row>
                <Col lg={6} md={12}>
                <ContactForm />
                </Col>
                <Col lg={6} >
                <Contactbox />
                </Col>
            </Row>
       </Container>
         
    );  
}