import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/esm/Col';

function SupportCart({icon : Icon, title, description}){
    return(
        <>
          <Card style={{ width: '16rem' }} className='col-lg-4 col-md-3'>
      <Card.Body>
      <div className='icon-wrapper text-center'> 
        <Icon />
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
