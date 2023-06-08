import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/esm/Col';

function SupportCart({icon : Icon, title, description}){
    return(
        <>
          <Card style={{ width: '17rem' }} className='col-lg-4 col-md-3'>
      <Card.Body className='d-flex flex-column gap-3'>
      <div className='icon-wrapper text-center'> 
        <Icon className="card-icon" />
      </div>
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
