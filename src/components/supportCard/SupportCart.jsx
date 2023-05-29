import Card from 'react-bootstrap/Card';

function SupportCart(){
    return(
        <>
          <Card style={{ width: '18rem' }} className='card'>
      <Card.Body>
      <i></i>
        <Card.Title>title</Card.Title>
        <Card.Text>
        description
        </Card.Text>
        <span>Read more</span>
      </Card.Body>
    </Card>
        </>
    )
}
export default SupportCart;