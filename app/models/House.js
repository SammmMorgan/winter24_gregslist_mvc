import { generateId } from "../utils/GenerateId.js"

export class House {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get houseHTMLString() {
        return `<div class="py-2 col-10">

<div class="m-auto card border-secondary">
    <img class="card-img-top w-100" src="${this.imgUrl}" alt="Title" />
    <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">Description: ${this.description}</p>
        <p class="card-text">Bedrooms: ${this.bedrooms}</p>
        <p class="card-text">Bathrooms: ${this.bathrooms}</p>
        <p class="card-text">Square Footage: ${this.sqft} </p>
        <p class="card-text">Price: ${this.price} </p>
    </div>
</div>
</div>`
    }


}