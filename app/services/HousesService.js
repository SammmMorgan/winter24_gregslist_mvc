import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { saveState } from "../utils/Store.js";

saveState('houses', AppState.houses)

class HousesService {

    makeHouseListing(houseFormData) {

        const newHouseCard = new House(houseFormData)
        console.log(newHouseCard);
        AppState.houses.push(newHouseCard)

    }

}
export const houseService = new HousesService