import Row from "react-bootstrap/esm/Row";
import BreadcrumbsAbout from "../components/about/BreadcrumbsAbout";
import Col from "react-bootstrap/esm/Col";
import PlayWorkout from "../components/champion/PlayWorkout";
import AboutStory from "../components/about/AboutStory";
import Banner from "../components/about/Banner";

export default function About() {
    return (
        
        <section className="about my-5">
            <BreadcrumbsAbout />
            <div className="container my-5">
                <Row>
                    <Col lg={6}>
                        <PlayWorkout width='w-75' />
                    </Col>
                    <Col lg={6} className="align-self-center">
                        <AboutStory />
                    </Col>
                </Row>
            </div>
            <Banner />
        </section>

    )
}