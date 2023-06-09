import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {FaHome} from "react-icons/fa";

export default function BreadcrumbsBanner({heading, currentPage}) {
    return (
        <section className="breadcrumbs-about set-bg">
            <Container>
                <Row>
                    <Col>
                        <h2>{heading}</h2>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/" > <FaHome className="home-icon"/> Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>{currentPage}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}