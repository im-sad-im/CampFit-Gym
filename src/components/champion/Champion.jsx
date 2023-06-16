import image from "../../assets/img/champion/champ.jpg"
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function Champion() {
    return (
        <section id="champion" className="my-5">
            <Container>
                <div className="text-center">
                    <h1 className="font-head sub-heading">see how you turn yourself into a </h1> <span className="font-head primary-text-color sub-heading">champion</span>
                </div>
                <div className="text-center position-relative my-5">
                    <img src={image} alt="workout video" className="rounded w-50" />
                </div>
                <Row>
                    <Col lg={6} >
                        <div className="w-50">
                            <p>The achievements of our members who have bought the name of fitness to be more famous </p>
                            <span className="primary-text-color sub-sub-font">Read more</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="w-50">
                            <h2 className="font-head sub-heading">37<span className="primary-text-color font-head">K</span></h2>
                            <p className="subtitle sub-sub-font">World Champions</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="w-50">
                            <h2 className="font-head sub-heading"> 241<span className="primary-text-color font-head">K</span></h2>
                            <p className="subtitle sub-sub-font">Runner Up  Champions</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="w-50">
                            <h2 className="font-head sub-heading">36<span className="primary-text-color font-head">K</span></h2>
                            <p className="subtitle sub-sub-font">Sea Games participation </p>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>


    );
}