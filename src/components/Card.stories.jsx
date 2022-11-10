import { Card } from "./Card"

import BahrainFlag from "../assets/bahrain.png"
import SpainFlag from "../assets/spain.png"
import FranceFlag from "../assets/france.png"
import BelguimFlag from "../assets/belgium.png"
import ItalyFlag from "../assets/italy.png"

import MaxVerstappenMD from "../assets/max_verstappen_md.png"

import SergioPerezSM from "../assets/segio_perez_sm.png"
import CharlesLeclercSM from "../assets/charles_leclerc_sm.png"

export default {
    title: "Components/Card",
    component: Card,
}

export const withoutPilots = {
    args: {
        title: "TESTING",
        days: "10 - 12",
        countryImage: BahrainFlag,
        countryName: "Bahrain",
        mounth: "APR",
        description: "FORMULA 1 ARAMCO PRE-SEASON TESTING 2022",
    },
    argTypes: {
        countryImage: {
            options: [
                BahrainFlag,
                SpainFlag,
                FranceFlag,
                BelguimFlag,
                ItalyFlag,
            ],
            control: {
                type: "radio"
            }
        }
    }
}

export const withPilots = {
    args: {
        title: "TESTING",
        days: "10 - 12",
        countryImage: BahrainFlag,
        countryName: "Bahrain",
        mounth: "APR",
        description: "FORMULA 1 ARAMCO PRE-SEASON TESTING 2022",
        isWithPilots: true,
        firstPilotImage: MaxVerstappenMD,
        secondPilotImage: SergioPerezSM,
        thirdPilotImage: CharlesLeclercSM,
        firstPilotNameAbbreviation: "VER",
        secondPilotNameAbbreviation: "POR",
        thirdPilotNameAbbreviation: "LEC",
    },
    argTypes: {
        isWithPilots: {
            control: false,
        },
        countryImage: {
            options: [
                BahrainFlag,
                SpainFlag,
                FranceFlag,
                BelguimFlag,
                ItalyFlag,
            ],
            control: {
                type: "radio"
            }
        }
    }
}
