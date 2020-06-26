import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import VehicleDataService from '../../apiservices/VehicleApi';

function Test(props) {
const[vehicleDetails, setehicleDetails]= useState(null);
const [isLoading, setIsLoading]= useState(true)
    useEffect(()=>{
        async function initialFetch(){
            const { selectedVehicle } = props.match.params;
            const vehicles= await VehicleDataService();
            console.log(vehicles)
            const selectedVehicleData = vehicles.filter((vehicle) => vehicle.detailKey === selectedVehicle)[0];
        setehicleDetails(selectedVehicleData);
        }
        initialFetch();
    },[])

        return(
            !isLoading? (
                <div>
                <Row>
                    <Col>
                        <img className = "detailImage" src={vehicleDetails.thumbnail} />
                    </Col>
                </Row>
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
        ) : ''

        )
       
}

export default Text;

// const url = 'http://localhost:3002/vehicles';
// const VehicleDataService = async() =>{
//        const vehicleData= await fetch(url)
//           .then(response => response.json())
//           .catch(error => console.log(error)); 
//       return vehicleData;
// }

// export default VehicleDataService;