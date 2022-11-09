import { withRouter } from "storybook-addon-react-router-v6"

import { Timeline } from "./Timeline"

export default {
    title: "Pages/Timeline",
    component: Timeline,
    decorators: [withRouter],
}

export const Default = {}