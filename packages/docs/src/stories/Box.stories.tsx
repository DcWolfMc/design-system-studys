import type {StoryObj, Meta} from "@storybook/react"
import {Box, BoxProps,Text} from "@igniteds-ui/react"

// configuração global do componente do Stories
export default ({
title: "Surfaces/Box",


component: Box,

args:{
    children: <>
    <Text> Testando o elemento Box</Text>
    </>,
}
}) as Meta<BoxProps>


// configuração do tipo do componente do Stories
export const Primary: StoryObj<BoxProps> = {
}
