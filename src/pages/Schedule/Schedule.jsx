import Container from "react-bootstrap/esm/Container";
import BreadcrumbsBanner from "../../components/about/BreadcrumbsBanner";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import  Button  from "react-bootstrap/Button"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Schedule() {
    return (
        <section id="schedule">
            <BreadcrumbsBanner heading={"Schedule"} currentPage={"schedule"} />
            <Container>
            <Row>
                <Col lg={12}>
                    <Button className="btn-main my-btn">Monday</Button>
                    <Button className="btn-main my-btn">Tuesday</Button>
                    <Button className="btn-main my-btn">Wednesday</Button>
                    <Button className="btn-main my-btn">Thursday</Button>
                    <Button className="btn-main my-btn">Friday</Button>
                    <Button className="btn-main my-btn">Saturday</Button>
                    <Button className="btn-main my-btn">Sunday</Button>
                </Col>
            </Row>
            </Container>
            <Contact />
            <Footer />
        </section>

    );
}
