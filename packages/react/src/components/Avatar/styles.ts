import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "../../styles";


export const AvatarContainer = styled(Avatar.Root,{
borderRadius: "$full",
display: "inline-block",
width: "$16",
height: "$16",
overflow: "hidden",
border: "2px solid transparent",

hover:{
    borderColor: "$ignite500"
}

})

export const AvatarImage = styled(Avatar.Image,{
width: "100%",
height: "100%",
objectFit: "cover",
borderRadius: "inherit",

})

export const AvatarFallback = styled(Avatar.Fallback,{
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$gray500",
    color: "$gray200",

    svg:{
        width:"$6",
        height: "$6",
    }
})
