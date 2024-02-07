import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { HousesService } from "../services/HousesService.js";
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
}