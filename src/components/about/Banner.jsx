import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import bannerPerson from "../../assets/img/about/banner-person.png"
import  Button  from "react-bootstrap/Button"
import {Link} from "react-router-dom"

export default function Banner(){
    return(
        <section id="banner" className="banner-section set-bg">
            <Container>
                <Row>
                    <Col lg={6} className="align-self-center">
                    <div className="banner-text"> 
                        <h2 className="sub-heading font-head">get <span className="font-head primary-text-color">training</span> today</h2>
                        <p>Gimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
                       <Link to='/contact'>
                        <Button className="btn-main my-btn">Contact Us</Button>
                       </Link>
                    </div>
                        
                    </Col>
                    <Col lg={6}>
                        <img src={bannerPerson} alt="banner person" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}