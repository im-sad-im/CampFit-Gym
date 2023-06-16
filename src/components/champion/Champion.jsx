import image from "../../assets/img/champion/champ.jpg"
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function Champion(){
    return(
        <section id="champion">
        <Container>
        <h2 className="font-head sub-heading text-center">see how you turn yourself into a <span className="font-head primary-text-color">champion</span></h2>
        <div>
            <img src={image} alt="workout video" />
        </div>
        <Row>
            <Col>
                <p className="subtitle">The achievements of our members who have bought the name of fitness to be more famous </p>
                <span className="primary-text-color sub-sub-heading">Read more</span>
            </Col>
            <Col>
            57<span className="primary-text-color">K</span>
            <p className="subtitle">World Champions</p>
             </Col>
            <Col>
            241<span className="primary-text-color">K</span>
            <p className="subtitle">Runner Up  Champions</p>
             </Col>
            <Col>
            36<span className="primary-text-color">K</span>
            <p className="subtitle">Sea Games participation </p>
             </Col>
      
        </Row>

        </Container>
        </section>


    );
}