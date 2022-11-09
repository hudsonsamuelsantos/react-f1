import { withRouter } from "storybook-addon-react-router-v6"

import { Classification } from "./Classification"

export default {
    title: "Pages/Classification",
    component: Classification,
    decorators: [withRouter],
}

export const Default = {}