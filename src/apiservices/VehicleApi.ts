import { useEffect, useState } from 'react';
const url = 'http://localhost:3002/vehicles';
const VehicleDataService = () => {
    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(response => {
              setVehicleData(response);
          })
          .catch(error => console.log(error));
      }, []);
      return vehicleData;
}

export default VehicleDataService;