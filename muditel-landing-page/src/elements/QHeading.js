import { VStack, Image, Heading } from "@chakra-ui/react";
import doubleQuotes from "../assets/icons/dq.svg";

const QHeading = props => {
  return (
    <VStack align="left">
      <Image w={["40px", "50px"]} src={doubleQuotes} />
      <Heading
        color="blk"
        fontSize={[...new Array(3).fill("40px"), "60px"]}
        className="heading"
        lineHeight="40px"
        {...props}
      >
        {props.children}
      </Heading>
    </VStack>
  );
};

export default QHeading;
