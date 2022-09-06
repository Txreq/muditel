import { Heading, Text, VStack } from "@chakra-ui/react";

const DescItem = props => {
  return (
    <VStack align={"left"} spacing={6}>
      <div>
        <Heading fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blk">
          {props.title}
        </Heading>
        <div style={{ marginTop: "10px" }} className="line"></div>
      </div>
      <Text align={[...new Array(3).fill(""), "justify"]} color="txt">
        {props.text}
      </Text>
    </VStack>
  );
};

export default DescItem;
