import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ebookImg from "../../assets/img/ebook/ebook.png"

function Ebook(){
    return(
        <>
            <section id="ebook" className="d-flex flex-row gap-4">
            <Row>
                <Col>
                   <img src={ebookImg} /> 
                </Col>
                <Col>
                    <h2 className="text-uppercase">get <span className="primary-text-color">training online</span> with e-books and videos</h2>
                    <p>By doing regular exercise with a mentor for seven days, you can improve your poster to be stronger, and have helped many people achieved their dreams</p>
                    <button className="btn btn-main">Download Ebook</button>
                    <button className="btn btn-sec"  >Download Videos</button>
                </Col>
            </Row>
                
            </section>
        </>
    )
}