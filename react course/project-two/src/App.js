import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Description from './components/Description';
import Price from './components/price';


function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=<Image/> />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><Price/></ListGroup.Item>
        <ListGroup.Item><Price/></ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default App;