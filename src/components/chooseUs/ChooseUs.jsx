import Row from "react-bootstrap/esm/Row";
// import chooseImage from "../../assets/img/choose-us/ch.png"
import chooseImage from "../../assets/img/choose-us/choose.png"
import Col from "react-bootstrap/esm/Col";


function ChooseUs() {
    return (
        <section id="chooseUs" className="choose-us ebook-img-wrapper">
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="choose-us-content">
                            <h2 className="text-uppercase font-head sub-heading">what makes you <span className="sub-heading primary-text-color font-head">sure</span> to choose us?</h2>
                            <ol>
                                <li>Campfit provides free boxing arena and pool facitlites for those who have premium members</li>
                                <li>There is a cold and comfortable resting rooom for members</li>
                                <li>Free overseas vacation tickets for members who subscribe for more than 6 months</li>
                                <li>Yoga area for friends who want to relax the body</li>
                            </ol>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="text-center mw-100">
                            <img src={chooseImage} alt="choose us image" />
                        </div>
                    </Col>
                </Row>
            </div>

        </section>
    )
}

export default ChooseUs;