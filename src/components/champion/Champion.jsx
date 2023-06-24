
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Achievement from "./Achievement";
import PlayWorkout from "./PlayWorkout";

export default function Champion() {

    return (
        <section id="champion" className="my-5">
            <Container>
                <div className="text-center">
                    <h1 className="font-head sub-heading">see how you turn yourself into a </h1> <span className="font-head primary-text-color sub-heading">champion</span>
                </div>
            <PlayWorkout width={"w-50"}/>
                <Row>
                    <Col lg={6} >
                        <div className="w-50">
                            <p>The achievements of our members who have bought the name of fitness to be more famous </p>
                            <span className="primary-text-color sub-sub-font">Read more</span>
                        </div>
                    </Col>
                    <Col>
                        <Achievement number={37} title={"World Champions"} />
                    </Col>
                    <Col>
                        <Achievement number={241} title={"Runner Up  Champions"} />
                    </Col>
                    <Col>
                        <Achievement number={36} title={"Sea Games participation"} />
                    </Col>

                </Row>

            </Container>
        </section>


    );
}