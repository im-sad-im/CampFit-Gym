import { galleryImg } from "./GallleryFiles";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

export default function GalleryPage2() {
    const secondPage2 = galleryImg.filter((item) => { return (item.id > 8) });
    return (
        <Container>
            <Row>
                {
                    secondPage2.map((image) => {
                        return (<Col lg={4} md={6} key={image.id}> <img src={image.img} alt="gallery-img" className="mw-100  my-2" /></Col>);
                    })
                }
            </Row>

        </Container>
    );
}