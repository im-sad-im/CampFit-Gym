import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import BreadcrumbsBanner from "../components/about/BreadcrumbsBanner";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contact/ContactForm";
import Contactbox from "../components/contact/Contactbox";

export default function Contact(){
    return(
        <section id="contact">
        <BreadcrumbsBanner heading={"Contact"} currentPage={"contact"}/>
        <Container className="m-5">
            <Row>
                <Col lg={6}>
                    <h1 className="font-head">shape <span className="font-head primary-text-color">your</span> body !</h1>
                    <p className="subtitle">At Campfit, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                    <Contactbox />
                </Col>
                <Col lg={6}>
                    <h2 className="font-head"> leave <span className="font-head primary-text-color">us</span> your  <span className="font-head primary-text-color">info</span> </h2>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
        <Footer />
        </section>
    )
}