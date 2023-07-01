import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import BreadcrumbsBanner from "../components/about/BreadcrumbsBanner";
import Footer from "../components/footer/Footer";

export default function Contact(){
    return(
        <section id="contact">
        <BreadcrumbsBanner heading={"Contact"} currentPage={"contact"}/>
        <Container>
            <Row>
                <Col>
                    <h1 className="sub-sub-heading font-head">We are here for help you! To shape your body</h1>
                    <p className="subtitle">At Campfit, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                </Col>
                <Col>
                    <form>

                    </form>
                </Col>
            </Row>
        </Container>
        <Footer />
        </section>
    )
}