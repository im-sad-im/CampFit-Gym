import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import HeroImg from "../../assets/img/hero/heroImgg.png"


function Hero(){
    return(
        <>
            <section id="hero" className="hero-section">
            <Container>
            <Row>
                <Col md={6}>
                <h1 className='text-uppercase font-head'>build your body into a <span className="primary-text-color">healthy</span> and <span className="primary-text-color">strong body</span>.</h1>
                <p>Sport is part of heath, so be diligent in exercising so that the body becomes strongerr and healthier to improve health and keep away from injury</p>
                </Col>
                <Col md={6} className="text-center">
                    <img src={HeroImg} alt="hero-img" />
                </Col>
            </Row>
            </Container>
            </section>
        </>
    )
}
export default Hero;