import Row from "react-bootstrap/esm/Row";
import BreadcrumbsAbout from "../components/about/BreadcrumbsAbout";
import Col from "react-bootstrap/esm/Col";
import PlayWorkout from "../components/champion/PlayWorkout";
import AboutStory from "../components/about/AboutStory";

export default function About() {
    return (
        
        <section className="about my-5">
            <BreadcrumbsAbout />
            <div className="container my-5">
                <Row>
                    <Col lg={6}>
                        <PlayWorkout width='w-75' />
                    </Col>
                    <Col lg={6}>
                        <AboutStory />
                    </Col>
                </Row>
            </div>
        </section>

    )
}