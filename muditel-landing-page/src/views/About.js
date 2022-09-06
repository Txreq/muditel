import {
  Flex,
  Stack,
  VStack,
  Text,
  Box,
  Avatar,
  HStack,
  Link,
} from "@chakra-ui/react";
import DescItem from "../components/DescItem";
import QHeading from "../elements/QHeading";
import StatItem from "../components/StatItem";

// icons
import clientIcon from "../assets/icons/ic1.svg";
import bagIcon from "../assets/icons/ic2.svg";
import worldIcon from "../assets/icons/ic3.svg";
import mainfest from "../assets/mainfest.json";

const About = () => {
  return (
    <section className="about" id="scr-abt">
      <Flex
        direction={[...new Array(3).fill("column"), "row"]}
        justifyContent="space-between"
        p="10px"
        gap="50px"
      >
        {mainfest.about.pers.map((item, index) => {
          return <DescItem key={index} title={item.title} text={item.desc} />;
        })}
      </Flex>

      <Stack
        spacing={[10, 0]}
        direction={["column", "row"]}
        m="100px 0px"
        justifyContent={"space-evenly"}
      >
        <StatItem icon={clientIcon} num="+100" d="happy clients" />
        <StatItem icon={worldIcon} num="+30" d="covered regions" />
        <StatItem icon={bagIcon} num="+8" d="years of experience" />
      </Stack>

      <Stack id="scr-more" w="full">
        <QHeading>more about us</QHeading>
        <VStack spacing={"15px"} align="left">
          <Text>
            <br />
            Muditel is the trusted and reliable platform where buyers and
            sellers come together worldwide without hassle. Muditel ensures a
            smooth transaction by providing a reliable platform that puts all
            the supplier information in reach of customers.
            <br />
            <br />
            Established in 2015, CIW Telecom delivers one of the
            telecommunications industry’s broadest portfolios of engineering and
            materials to operators and partners with equipment manufacturers and
            infrastructure providers within the telecommunications and energy
            sectors. With a large workforce including senior-level engineers,
            technicians, and operations personnel, we offer solutions from start
            to finish, including design & analysis, procurement, specification
            development, and fabrication services. Our commitment drives our
            team to excellence and customer service.
          </Text>
          <Box w="80px" className="line"></Box>
          <HStack
            bgColor="#BBBED1"
            w="fit-content"
            p="5px"
            borderRadius={"6px"}
          >
            <Avatar
              src="https://shorturl.at/mopvY"
              size={"sm"}
              name="Malik Moussaoui"
            />
            <Text
              fontSize={["sm", "md"]}
              fontWeight="bold"
              color="#264978"
              fontFamily="caption"
            >
              <Link
                href="https://www.linkedin.com/in/malik-moussaoui-022a5924"
                _hover={{ textDecoration: "none" }}
                isExternal
              >
                Malik Moussaoui, Founder.
              </Link>
            </Text>
          </HStack>
        </VStack>
      </Stack>
    </section>
  );
};

export default About;
