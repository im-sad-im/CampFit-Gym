import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/esm/Col';

function SupportCart({title, description}){
    return(
        <>
          <Card style={{ width: '16rem' }} className='card col-lg-4 col-md-3'>
      <Card.Body>
      {/* <i></i> */}
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <span>Read more</span>
      </Card.Body>
    </Card>
        </>
    )
}
export default SupportCart;
