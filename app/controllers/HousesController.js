import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { houseService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
    let htmlString = ''
    const houses = AppState.houses
    houses.forEach(house => htmlString += house.houseHTMLString)
    setHTML('housesList', htmlString)
}
export class HousesController {

    constructor() {
        _drawHouses()
    }

    makeHouseListing() {
        try {
            event.preventDefault()
            const form = event.target

            console.log('reading event', form)

            let houseFormData = getFormData(form)

            console.log('form data object', houseFormData)

            houseService.makeHouseListing(houseFormData)

        }
        catch {
            throw console.error(`somesthing's gone wrong with the form`);
        }
    }

}
