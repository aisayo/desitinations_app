const BASE_URL = "http://127.0.0.1:3000"
const destinationContainer = document.getElementById('destination-container')


const destinationService = new DestinationService(BASE_URL)
destinationService.getDestinations()