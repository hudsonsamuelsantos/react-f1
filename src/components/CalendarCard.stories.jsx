import { CalendarCard } from "./CalendarCard"

import CalendarBahrainFlag from "../assets/bahrain_70_x_47.png"
import CalendarSpainFlag from "../assets/spain_70_x_47.png"
import CalendarFranceFlag from "../assets/france_70_x_47.png"
import CalendarBelgiumFlag from "../assets/belgium_70_x_47.png"
import CalendarItalyFlag from "../assets/italy_70_x_47.png"
import CalendarJapanFlag from "../assets/japan_70_x_47.png"
import CalendarEuaFlag from "../assets/eua_70_x_47.png"
import CalendarAustriaFlag from "../assets/austria_70_x_47.png"
import CalendarSaudiArabiaFlag from "../assets/saudi_arabia_70_x_47.png"

export default {
    title: "Components/CalendarCard",
    component: CalendarCard,
    args: {
        race: {
            "countryNameUppercase": "DEFAULT",
            "day": "26",
            "mounthAbbreviationUppercase": "APR"
        }
    },
    argTypes: {
        countryImage: {
            options: [
                CalendarBahrainFlag,
                CalendarSpainFlag,
                CalendarFranceFlag,
                CalendarBelgiumFlag,
                CalendarItalyFlag,
                CalendarJapanFlag,
                CalendarEuaFlag,
                CalendarAustriaFlag,
                CalendarSaudiArabiaFlag,
            ],
            control: {
                type: "radio"
            },
        }
    }
}

export const Default = {}