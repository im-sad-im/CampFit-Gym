import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
// import ebookImg from "../../assets/img/ebook/ebook.png";
import ebookImg from "../../assets/img/ebook/ebookImg.png";

function Ebook() {
  return (
    <>
      <section
        id="ebook"
        className="ebook-container mt-5"
      >
      <div className="container" style={{paddingLeft: "0", marginLeft: "0"}}>
        <Row>
          <Col lg={4} className="ebook-img-wrapper">
            <img src={ebookImg} className="img-fluid" alt="ebook image" />
          </Col>
          <Col lg={8} className="p-5">
            <h2 className="text-uppercase">
              get <span className="primary-text-color">training online</span>{" "}
              with e-books and videos
            </h2>
            <p className="subtitle">
              By doing regular exercise with a mentor for seven days, you can
              improve your poster to be stronger, and have helped many people
              achieved their dreams
            </p>
            <button className="my-btn btn-main">Download Ebook</button>
            <button className="my-btn btn-sec">Download Videos</button>
          </Col>
        </Row>
      </div>
      </section>
    </>
  );
}
export default Ebook;
