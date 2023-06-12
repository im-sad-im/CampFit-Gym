import Container from "react-bootstrap/esm/Container";
import SupportCart from "./SupportCart";
import cards from "./cards";
import Row from "react-bootstrap/esm/Row";



function SupportCard() {
  
    return (
        <>
        <section id="supportCard">
        <Container>
        <div className="card-heading">
            <h2 className="sub-heading font-head">This is our <span className="primary-text-color font-head">service</span></h2>
            <h2 className="sub-heading font-head">During training</h2>
        </div>
        <div className="d-flex">
        <Row className="justify-content-sm-center gap-3">
        {
            cards.map((card, index)=>{
                const Icon = card.icon;
              return(<SupportCart key={index} icon={Icon} title={card.title} description={card.description}  />)
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