import {
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import Button from "../elements/Button";
import heroElement from "../assets/images/hero element.svg";

import { AiOutlineInfoCircle } from "react-icons/ai";

const HeroView = props => {
  return (
    <section className="hero-section">
      <div className="text">
        <VStack mt="50px" align={"start"} spacing={5}>
          <Heading
            color="blk"
            fontSize={[...new Array(3).fill("50px"), "80px"]}
            className="heading"
          >
            get closer to <Text color="blue">technology</Text>
          </Heading>
          <Text color="txt" fontSize="16px" maxW="550px">
            We are a leading Pan Middle-East & African Infrastructure provider
            in the telecommunications and energy supply sector. We provide
            turnkey solutions to our clients.
          </Text>
          <HStack>
            <Button _active={{ bgColor: "l_blue" }}>Place an order</Button>

            <Link href="#scr-more" _hover={{ textDecoration: "none" }}>
              <Button
                bgColor="w_blue"
                rightIcon={<Icon as={AiOutlineInfoCircle} />}
                _hover={{ bgColor: "#BBBED1" }}
                _active={{ bgColor: "#8B92BD" }}
              >
                Learn more
              </Button>
            </Link>
          </HStack>
        </VStack>
      </div>
      <div className="hero-element">
        <Image maxH={["500px", ""]} src={heroElement} />
      </div>
    </section>
  );
};

export default HeroView;
