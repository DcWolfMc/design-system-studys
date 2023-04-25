import type {StoryObj, Meta} from "@storybook/react"
import {Button, ButtonProps} from "@igniteds-ui/react"

// configuração global do componente do Stories
export default ({
title: "Button",


component: Button,

args:{
    children: "Send",
}
}) as Meta<ButtonProps>


// configuração do tipo do componente do Stories
export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: "Send",
    }
}
