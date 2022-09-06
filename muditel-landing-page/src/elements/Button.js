import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
    return (
        <Button 
            {...props}
        >
            {props.children}
        </Button>
    );
}
 
Button.defaultProps = {
    bgColor: "blue",
    color: "white",
    _hover: { bgColor: "l_blue" }
}

export default CustomButton;