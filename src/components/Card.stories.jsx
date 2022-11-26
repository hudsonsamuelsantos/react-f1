import { Card } from "./Card"

export default {
    title: "Components/Card",
    component: Card,
}

export const withoutPilots = {
    args: {
        raceCard: {
            "titleUppercase": "TESTING",
            "days": "10 - 12",
            "countryName": "Bahrain",
            "mounth": "APR",
            "descriptionUppercase": "FORMULA 1 ARAMCO PRE-SEASON TESTING 2022",
            "isWithPilots": false
        }
    }
}

export const withPilots = {
    args: {
        raceCard: {
            "titleUppercase": "ROUND 1",
            "days": "20 - 22",
            "countryName": "Bahrain",
            "mounth": "MAY",
            "descriptionUppercase": "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022",
            "isWithPilots": true
        }
    }
}
