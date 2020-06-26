import * as React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, NavLink, Button } from 'reactstrap';
import './Vehicle.css';
import VehicleDataService from '../../apiservices/VehicleApi';

const Vehicle = () => {
    const vehicleDetails = VehicleDataService();
    const vehicleSelectedData = vehicleDetails.map(item=> {
        return(  
            <Col key={item.detailKey +"vb"} md={Math.ceil(12 / item.length)}>
                <Card>
                    <CardImg top width="100%" height="100%" className="thumbnail-image" src={item.thumbnail} alt={item.altText}/>
                    <CardBody className="text-center">
                        <CardTitle>{item.modelYear} {item.model}</CardTitle>
                        <CardSubtitle>{item.tagLine}</CardSubtitle>
                        <CardText>start at {item.msrp}</CardText>
                        <NavLink href={"/detail/" + item.detailKey}>Details</NavLink>
                        <NavLink href="/build-and-price">Build In Price</NavLink>
                        <NavLink href="/find-a-dealer">Deals Near You</NavLink>
                    </CardBody>
                </Card>
            </Col>
        )
    })
    return(
        <div className="vehicle">
            <Container>
                <Row>
                    {vehicleSelectedData}
                </Row>
            </Container>
        </div>
    );
  };
  
  export default Vehicle;