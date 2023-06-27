import Container from "react-bootstrap/esm/Container";
import { galleryImg } from "./GallleryFiles";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Pagination from "react-bootstrap/Pagination"


export default function GalleryPage1() {
    const firstPage1 = galleryImg.filter((item) => { return (item.id <= 8) })
    return (
        <>
            <Container>
                <Row>
                    {
                        firstPage1.map((image) => {
                            return (<Col lg={4} md={6} key={image.id}> <img src={image.img} alt="gallery-img" className="mw-100 height-auto my-2"/></Col>);
                        })
                    }
                </Row>
            </Container>
        </>
    );
}