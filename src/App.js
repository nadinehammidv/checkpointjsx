import "./App.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { product } from "./product";  
import { Container, Nav, Navbar } from "react-bootstrap";


function App() {
  let firstName = "Nadine hammi"
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.url} />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Name />
            <Card.Text>
              <Description />
            </Card.Text>
            <Card.Text>
              <Price />
            </Card.Text>

            <Button variant="primary">Go and by it </Button>
          </Card.Body>
        </Card>
      </main>
      {firstName ? (
        <div>
          <h1> Hello{firstName} </h1>
          <img
            scr="https://media.istockphoto.com/id/1067347086/fr/photo/chat-aux-yeux-bleus-se-penche-sur-lappareil-photo.jpg?s=612x612&w=0&k=20&c=BJqJ6BYWFo4xT1TVDu8fmg5_z7L1ZwgYnC2M6VCwOWY="
            alt=""
          ></img>
        </div>
      ) : (
        <h1> Hello there </h1>
      )}
    </div>
  );
} 


  export default App;
