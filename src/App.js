// import logo from './logo.svg';
import "./App.css";
import Footer from "./Footer";
import { Header } from "./Header";
import { Col, Row, Container, Card, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Container>
          <Row>
            <Col className="col-12 text-center py-4">
              <h1>Our Course</h1>
            </Col>
          </Row>

          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </Container>

      {/* <div className='container'>
        <p className='text-danger'>welcome to home page</p>
      <div className='para'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      </div> */}
      fsjlkjgf

      <Footer />
    </div>
  );
}

export default App;

// function Card(){
//   return(
//     <div className='carditem'>card div</div>
//   )
// }
