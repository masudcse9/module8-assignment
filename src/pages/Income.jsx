import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import NavBar from "../components/NavBar";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Income = () => {
  document.title="Income";

  const [items, setItems] = useState([]);
  const [itemName,setItemName] = useState('');
  const [itemPrice,setItemPrice] = useState('');

  const addIncomeItem=()=> {
    //alert('Yes');
    if(itemName==="" || itemPrice==="")
    {
       toast.warning("All field are required");
       return false
    }

    const item = { itemName, itemPrice, id: Date.now() };

    setItems((items) => [...items, item]);
    setItemName("");
    setItemPrice("");
    toast.success("Successfully added.");
  }
  
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Income</Card.Title>
                <Card.Text>Welcome to InCome section.</Card.Text>
                <Card.Text>
                <input type="text" placeholder="Agenda" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} className="form-control" />
                <input type="text" placeholder="Amount" name="itemPrice" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} className="form-control" />
                <button className="btn btn-primary" onClick={addIncomeItem}>Add</button>
                </Card.Text>

                <Card.Text>
                <table className="table">
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Agenda</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <span>{i+1}</span>
                        </td>
                        <td>{item.itemName}</td>
                        <td>{item.itemPrice}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Income;
