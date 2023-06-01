import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import HeroImg from "../../assets/img/hero/heroImgg.png"
import  Button  from "react-bootstrap/Button"
import {BsFillPlayCircleFill} from "react-icons/bs";


function Hero(){
    return(
        <>
            <div id="hero" className="hero-section">
            <Container>
            <Row>
                <Col lg={8}>
                <h1 className='text-uppercase font-head'>build your body into a <span className="primary-text-color">healthy</span> and <span className="primary-text-color">strong body</span>.</h1>
                <p>Sport is part of heath, so be diligent in exercising so that the body becomes strongerr and healthier to improve health and keep away from injury</p>
                <div className="d-flex gap-1">
                <Button className="btn-main my-btn">Join Member</Button>
                <Button variant="dark" className="my-btn my-btn1" style={{backgroundColor : "transparent", border: "none"}}> 
                 Watch Training <BsFillPlayCircleFill className="play-icon" style={{fontSize: "1.25rem"}} /></Button>
                </div>
                </Col>
                <Col lg={4} className="text-center">
                    <img src={HeroImg} alt="hero-img" />
                </Col>
            </Row>
            </Container>
            </div>
        </>
    )
}
export default Hero;