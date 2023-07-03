import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import BreadcrumbsBanner from "../components/about/BreadcrumbsBanner";
import Contactbox from "../components/contact/Contactbox";
import ContactMainForm from "../components/contact/ContactMainForm";
import Footer from "../components/footer/Footer";

export default function Contact() {
    return (
        <section id="contact">
            <BreadcrumbsBanner heading={"Contact"} currentPage={"contact"} />
            <Container className="my-5">
                <Row>
                    <Col lg={6} className="mt-5">
                        <h1 className="font-head">
                            shape <span className="font-head primary-text-color">your</span>{" "}
                            body !
                        </h1>
                        <p className="subtitle">
                            At Campfit, we are dedicated to helping you achieve the body of
                            your dreams. Our expert trainers and nutritionists will work with
                            you to create a personalized fitness and nutrition plan that helps
                            you reach your specific goals.
                        </p>
                        <Contactbox />
                    </Col>
                    <Col lg={6} className="my-5">
                        <h2 className="font-head">
                            leave <span className="font-head primary-text-color"> us </span>
                            your <span className="font-head primary-text-color">info</span>{" "}
                        </h2>
                        <ContactMainForm />
                    </Col>
                </Row>
            </Container>

            {/* map */}
            <iframe
                width="100%"
                height="510"
                allowFullScreen=""
                loading="lazy"
                id="gmap_canvas"
                samesite="Strict"
                src="https://maps.google.com/maps?q=kathmandu&t=&z=10&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
            ></iframe>
            <Footer />
        </section>
    );
}
