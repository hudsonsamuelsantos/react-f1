import { ExpansiveCard } from "./ExpansiveCard"

import MaxVerstappenExpansiveCardImage from "../assets/max_verstappen_expansive_card.png"
import SergioPerezExpansiveCardImage from "../assets/sergio_perez_expansive_card.png"
import CharlesLeclercExpansiveCardImage from "../assets/charles_leclerc_expansive_card.png"

export default {
    title: "Components/ExpansiveCard",
    component: ExpansiveCard,
    args: {
        rankingPosition: "1",
        firstPilotName: "Max",
        lastPilotName: "VERSTAPPEN",
        team: "Red Bull Racing",
        pts: "366",
        pilotImage: MaxVerstappenExpansiveCardImage,
        country: "Netherlands",
        podiuns: "75",
        points: "1948.5",
        gpEntered: "160",
        worldChampionships: "2",
        rectangleColor: "blue",
    },
    argTypes: {
        pilotImage: {
            options: [
                MaxVerstappenExpansiveCardImage,
                CharlesLeclercExpansiveCardImage,
                SergioPerezExpansiveCardImage,
            ],
            control: {
                type: "radio"
            }
        },
        rectangleColor: {
            options: [
                "blue",
                "red",
            ],
            control: {
                type: "radio"
            }
        }
    }
}

export const Default = {}