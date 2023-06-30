import Container from "react-bootstrap/esm/Container";
import BreadcrumbsBanner from "../../components/about/BreadcrumbsBanner";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link, Outlet } from "react-router-dom";

export default function Schedule() {
    return (
        <section id="schedule">
            <BreadcrumbsBanner heading={"Schedule"} currentPage={"schedule"} />
            <Container className="py-5">
                <Row>
                <h1 className="font-head sub-sub-heading text-center">Schedule by </h1>
                    <Col lg={12}>
                        <Link to='/schedule/monday'>
                            <Button className="btn-main my-btn">Monday</Button>
                        </Link>
                        <Link to="/schedule/tuesday">
                            <Button className="btn-main my-btn">Tuesday</Button>
                        </Link>
                        <Link to='/schedule/wednesday'>
                            <Button className="btn-main my-btn">Wednesday</Button>
                        </Link>
                        <Link to='/schedule/thursday'>
                            <Button className="btn-main my-btn">Thursday</Button>
                        </Link>
                        <Link to='/schedule/friday'>
                            <Button className="btn-main my-btn">Friday</Button>
                        </Link>
                        <Link to='/schedule/saturday'>
                            <Button className="btn-main my-btn">Saturday</Button>
                        </Link>
                        <Link to='/schedule/sunday'>
                            <Button className="btn-main my-btn">Sunday</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Outlet />
            <Contact />
            <Footer />
        </section>

    );
}
