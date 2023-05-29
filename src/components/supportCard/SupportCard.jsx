import Container from "react-bootstrap/esm/Container";
import SupportCart from "./SupportCart";
// import cards from "./cards";


function SupportCard() {
    return (
        <>
        <Container>
        <div className="card-container d-flex flex-column">
            <h2>This is our <span className="primary-text-color">service</span></h2>
        </div>
        <div className="d-flex">
              <SupportCart />
        </div>
        </Container>
        </>
    )
}
export default SupportCard;