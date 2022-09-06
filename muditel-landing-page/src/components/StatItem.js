import { Image, Flex, Text, VStack, Box } from "@chakra-ui/react";
import { useRef } from "react";
import { animate, motion } from "framer-motion";

const StatItem = props => {
  const nodeRef = useRef();

  const animateNum = () => {
    let node = nodeRef.current;
    animate(0, Number(props.num), {
      duration: 0.5,
      onUpdate(v) {
        node.textContent = v.toFixed(0);
      },
    });
  };

  return (
    <Flex gap={4} direction="row">
      <Box w="50px" className="icon">
        <Image m="0 auto" h="50px" src={props.icon} />
      </Box>
      <VStack spacing={0} align="left" alignItems={"start"}>
        <Text
          color="blk"
          lineHeight={6}
          fontSize="30px"
          fontFamily="Poppins"
          fontWeight="bold"
        >
          +
          <motion.span
            viewport={{ once: true }}
            whileInView={animateNum}
            ref={nodeRef}
          >
            {props.num}
          </motion.span>
        </Text>
        <Text color="txt">{props.d}</Text>
      </VStack>
    </Flex>
  );
};

export default StatItem;
