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
        return `<div class="col-10">

<div class="card border-secondary">
    <img class="card-img-top w-25" src="" alt="Title" />
    <div class="card-body">
        <h4 class="card-title">House Title</h4>
        <p class="card-text">Description: </p>
        <p class="card-text">Bedrooms:</p>
        <p class="card-text">Bathrooms: </p>
        <p class="card-text">Square Footage: </p>
        <p class="card-text">Price: </p>
    </div>
</div>
</div>`
    }


}