class DestinationService {

    constructor(baseUrl){
        this.base_url = baseUrl
    }


 getDestinations(){
    fetch(`${this.base_url}/destinations`)
    .then(resp => resp.json())
    .then(destinations => {
        for (const destination of destinations){
            const d = new Destination(destination)
            d.appendDestination()
        }
    })
 }


}
