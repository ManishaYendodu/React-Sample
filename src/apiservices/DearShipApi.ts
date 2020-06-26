const url = 'http://localhost:3002/dealerships';
const DealerShipDataService = async() =>{
       const dealerShipData= await fetch(url)
          .then(response => response.json())
          .catch(error => console.log(error)); 
      return dealerShipData;
}

export default DealerShipDataService;