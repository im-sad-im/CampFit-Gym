import Row from "react-bootstrap/esm/Row";
import BreadcrumbsBanner from "../components/about/BreadcrumbsBanner";
import Col from "react-bootstrap/esm/Col";
import PlayWorkout from "../components/champion/PlayWorkout";
import AboutStory from "../components/about/AboutStory";
import Banner from "../components/about/Banner";
import ContactUs from "../components/contact/ContactUs"
import Footer from "../components/footer/Footer"

export default function About() {
    return (
        
        <section className="about my-5">
            <BreadcrumbsBanner heading={"About Us"} currentPage={"About"}/>
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
            <ContactUs />
            <Footer />
        </section>

    )
}