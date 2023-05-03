import { styled } from "../../styles";

export const TextInputContainer = styled('div',{
    backgroundColor:"$gray900",
    padding:"$3 $4",
    borderRadius:"$sm",
    boxSizing:"border-box",
    border:"2px solid $gray900",
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"center",

    '&:has(input:focus)':{
        borderColor:'$ignite300',
    },

    '&:has(input:disabled)':{
        opacity:0.5,
        cursor:"not-allowed",
    }
    
})
export const Prefix = styled('span',{
    fontFamily: "$default",
    fontWeight: "$regular",
    color: "$gray400",
    fontSize: "$sm",


})
export const Input = styled('input',{
    fontFamily: "$default",
    fontWeight: "$regular",
    color: "$white",
    fontSize: "$sm",
    backgroundColor: "transparent",
    width: "100%",
    border: 0,

    '&:focus':{
        outline: 0,
    },
    '&disabled':{
        cursor: "not-allowed",
    },
    '&placeholder':{
        color: "$gray400",

    }

    
})
