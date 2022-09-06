import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import QHeading from "../elements/QHeading";
import QInput from "../elements/Input";
import Button from "../elements/Button";
import Map from "../components/Map";

// icons
import { BsPerson, BsInbox, BsPhone, BsCheckCircle } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";

import { useState, useRef, useEffect } from "react";

// helpers
import requestMailer from "../helpers/mailSend";

const Contact = () => {
  const defaultState = {
    name: "",
    email: "",
    content: "",
  };

  // sending mail
  const [isPending, setLoadingStatus] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [response, setResponse] = useState(true);
  const [emailObject, updateEmailObject] = useState(defaultState);

  const formRef = useRef();

  const sendEmail = () => {
    // todo
  };

  useEffect(() => {
    formRef.current.addEventListener("submit", event => event.preventDefault());
  }, []);

  const changeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    updateEmailObject({ ...emailObject, [name]: value });
  };

  // returning elements
  return (
    <section
      style={{ marginTop: "100px" }}
      id="scr-cnt"
      className="contact-section"
    >
      <QHeading lineHeight="80px">stay in touch</QHeading>
      <Text>
        We aim to build a solid relationship with our clients so that all their
        concerns are addressed and they feel comfortable recommending us to
        their friends.
        <br />
        <br />
      </Text>
      <div className="reach-methods">
        <Box className="map" minH="100%" w="full">
          <Map />
        </Box>

        <FormControl ref={formRef} as={"form"} isRequired>
          {showForm ? (
            <Stack gap="10px">
              <QInput
                icon={BsPerson}
                type="text"
                placeholder="full name"
                disabled={isPending}
                name="name"
                onChange={changeHandler}
              />
              <QInput
                icon={HiOutlineMail}
                type="email"
                placeholder="your email"
                disabled={isPending}
                name="email"
                onChange={changeHandler}
              />
              <QInput
                type="text"
                placeholder="feel free to say anything ..."
                height="150px"
                area={true}
                disabled={isPending}
                name="content"
                onChange={changeHandler}
              />

              <HStack justifyContent={"space-between"}>
                <HStack justifyContent={"flex-start"}>
                  <Link href="https://twitter.com/MuditelS" isExternal>
                    <IconButton icon={<Icon as={AiOutlineTwitter} />} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/ciw-telecom/"
                    isExternal
                  >
                    <IconButton icon={<Icon as={AiFillLinkedin} />} />
                  </Link>

                  <VStack align="start" spacing="1px">
                    <HStack>
                      <Icon color="blue" as={BsPhone} />
                      <Link fontWeight="600" href="tel:+971 4 8821851">
                        +971 4 8821851
                      </Link>
                    </HStack>

                    <HStack>
                      <Icon color="blue" as={BsInbox} />
                      <Link fontWeight="600" href="mailto:info@muditel.com">
                        info@muditel.com
                      </Link>
                    </HStack>
                  </VStack>
                </HStack>

                <Button type="submit" disabled={isPending} onClick={() => {
                  // todo
                }}>
                  {isPending ? "..." : "Send"}
                </Button>
              </HStack>
            </Stack>
          ) : (
            <Stack height="353px" justifyContent="center" alignItems="center">
              <Alert
                status={response === true ? "success" : "error"}
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="100%"
                bgColor="transparent"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  {response === true
                    ? "Message sent !"
                    : "Failed to send your message"}
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                  {response === true
                    ? "We will try to respond to your message as soon as possible. "
                    : "Something went wrongg, try to reach us through phone number or email"}
                </AlertDescription>
              </Alert>
            </Stack>
          )}
        </FormControl>
      </div>
    </section>
  );
};

export default Contact;
