import * as React from 'react';
import { Row, Col } from 'reactstrap';
import VehicleDataService from '../../apiservices/VehicleApi';

function VehicleDetail(props) {
    console.log(props)
    const vehicleDetails = VehicleDataService();
    console.log(vehicleDetails, 'vehicleDetails')

    if(vehicleDetails.length > 0){
        const { selectedVehicle } = props.match.params;
        console.log(selectedVehicle)
        const selectedVehicleData = vehicleDetails.filter((vehicle) => vehicle.detailKey === selectedVehicle)[0];
        console.log(selectedVehicleData, 'selectedVehicleData')
        return(
            <div>
               {/* <Row>
                    <Col>
                        <img className = "detailImage" src={selectedVehicleData.thumbnail} />
                    </Col> 
                </Row> */}
                {/* <Row>
                    <Col>
                        <h1>{selectedVehicleData.modelYear} {selectedVehicleData.model}</h1>
                        <h2>{selectedVehicleData.tagline}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={{size: 6, offset: 3}}>
                        <p>{selectedVehicleData.description}</p>
                    </Col>
                </Row> */}
            </div>
        );
    }
    else {
        null;
    }
    
}

export default VehicleDetail;