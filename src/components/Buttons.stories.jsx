import { withRouter } from "storybook-addon-react-router-v6"

import { Buttons } from "./Buttons"

export default {
    title: "Components/Buttons",
    component: Buttons,
    decorators: [withRouter],
}

export const Default = {}