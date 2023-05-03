import type {StoryObj, Meta} from "@storybook/react"
import {Button, ButtonProps} from "@igniteds-ui/react"
import { ArrowRight } from "phosphor-react"

// configuração global do componente do Stories
export default ({
title: "Form/Button",
component: Button,

args:{
    children: "Send",
     variant: "primary",
     size: "md",
     disabled: false,
},
argTypes:{
    variant:{
        options:['primary', 'secondary', 'tertiary'],
        control: {type: 'inline-radio'}
    },
    size:{
        options:['sm', 'md'],
        control: {type: 'inline-radio'}
    },
    disabled:{
        control:{type: 'boolean'},
    },
    onClick:{
        action: 'click',
    },

}
}) as Meta<ButtonProps>


// configuração do tipo do componente do Stories
export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {

    args: {
        
        variant: "secondary",
        children: "Create new",
    }
}
export const Tertiary: StoryObj<ButtonProps> = {

    args: {
        
        variant: "tertiary",
        children: "Cancel"
    }
}
export const Small: StoryObj<ButtonProps> = {

    args: {
        size: "sm",
        variant: "tertiary",
        children: "Cancel"
    }
}

export const WithIcon: StoryObj<ButtonProps> = {

    args: {
        children:(
            <>
            Próximo Passo
            <ArrowRight weight="bold"/>
            </>
        ),
    }
}

export const Disabled: StoryObj<ButtonProps> = {

    args: {
        disabled: true,
    }
}