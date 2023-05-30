import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/esm/Col';

function SupportCart(props){
    return(
        <>
          <Card style={{ width: '18rem' }} className='card col-lg-4 col-md-3'>
      <Card.Body>
      {/* <i></i> */}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <span>Read more</span>
      </Card.Body>
    </Card>
        </>
    )
}
export default SupportCart;