import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NavBar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Card>
              <Card.Body>
                <Card.Title>
                <Link to="/">Income</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/expenses">Expenses</Link>
                </Card.Title>
                
               </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
