class Destination {

    constructor({id, name, location, price}){
        this.id = id
        this.name = name
        this.location = location
        this.price = price 

        this.element = document.createElement('div')
        this.element.id = `destination-${this.id}`

        // this.element.addEventListener('click', handleDestinationClick)
    }

    destinationHtml(){
        //create header inside each destination div
        const header = document.createElement('h3')
        header.id = `${this.name}-header`
        header.innerText = this.name

        const locationLi = document.createElement('li')
        locationLi.id = `${this.name}-location`
        locationLi.innerText = `Location: ${this.location}`

        const priceLi = document.createElement('li')
        priceLi.id = `${this.name}-price`
        priceLi.innerText = `Price: ${this.price}`

        return [header, locationLi, priceLi]
    }

    appendDestination(){
        this.destinationHtml().forEach(element => {
            return this.element.appendChild(element)
        })
        
        destinationContainer.append(this.element)
    }
}