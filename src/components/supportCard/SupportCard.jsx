import Container from "react-bootstrap/esm/Container";

import SupportCart from "./SupportCart";
import cards from "./cards";
import Row from "react-bootstrap/esm/Row";


function SupportCard() {
    return (
        <>
        <section id="supportCard">
        <Container>
        <div className="card-container d-flex flex-column">
            <h2>This is our <span className="primary-text-color">service</span></h2>
        </div>
        <div className="d-flex">
        <Row className="justify-content-sm-center gap-3">
        {
            cards.map((card, index)=>{
              return(<SupportCart key={index} title={card.title} description={card.description} />)
            })
        }
        </Row>
        </div>
        </Container>
        </section>
        </>
    )
}
export default SupportCard;