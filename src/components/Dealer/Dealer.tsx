import * as React from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    ListGroup,
    ListGroupItem,
    Badge,
    Table, 
    Button, 
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import { useEffect, useState } from 'react';
const url = 'http://localhost:3002/dealerships';

export default function Dealer(props){
    const [dealerships, setDealerShips] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(response => {
            setDealerShips(response);
            console.log(response);
          })
          .catch(error => console.log(error));
      }, []);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const onClearClicked = (e) => {
        e.preventDefault();
        setSearchTerm("");
    }
    

  if(dealerships){
      console.log(searchTerm);
    const filteredData = dealerships.filter(d => (
        d.address.includes(searchTerm)));
    return(
        <div>
            <Row>
                    <Col sm={12} md={{size: 10, offset:1}}>
                    <div>
                            <h1 className="text-center">Over {dealerships.length} Authorized Dealers Nationwide</h1>
                            <Row>
                                <Col sm={12} md={{ size: 6, offset: 3 }}>
                                    <Form>
                                        <FormGroup>
                                            <InputGroup>
                                                <Input type="text" onChange={handleInputChange}
                                                    value = {searchTerm}
                                                    name = "user_address"
                                                    placeholder = "We're probably nearby.  What state are you in?" />

                                                    <InputGroupAddon addonType="append">
                                                        <Button onClick={onClearClicked}>X</Button>
                                                    </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>DealerShif</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, i )=>{
                                    return(
                                        <tr key={item.phone}>
                                            <td>{String(i)}</td>
                                            <td>{item.dealershipName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
    else {
        return null
    }
}