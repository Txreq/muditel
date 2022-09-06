import {
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
import { BsPerson, BsInbox, BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

import { useState, useRef } from "react";

const Contact = () => {
  const defaultEMOState = {
    name: "",
    email: "",
    content: "",
  };

  // sending mail
  const [isPending, setLoadingStatus] = useState(false);
  const [emailObject, updateEmailObject] = useState(defaultEMOState);

  const formRef = useRef();

  const isValid = () => {
    let isv = true;
    for (const [key, value] of Object.entries(emailObject)) {
      if (value.length === 0) {
        isv = false;
        break;
      }
    }

    return isv;
  };

  const sendEmail = () => {
    setLoadingStatus(true);

    let headers = new Headers().append(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    let body = new URLSearchParams();
    body.append("name", emailObject.name);
    body.append("email", emailObject.email);
    body.append("content", emailObject.content);

    fetch("https://agonagbiaiujbnagohnad.tareqdev.repl.co/send", {
      method: "POST",
      redirect: "follow",
      headers: headers,
      body: body,
    })
      .then(_ => {
        setLoadingStatus(false);
        updateEmailObject({ ...defaultEMOState });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

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
          <Stack gap="10px">
            <QInput
              icon={BsPerson}
              type="text"
              placeholder="full name"
              disabled={isPending}
              name="name"
              onChange={changeHandler}
              value={emailObject.name}
            />
            <QInput
              icon={HiOutlineMail}
              type="email"
              placeholder="your email"
              disabled={isPending}
              name="email"
              value={emailObject.email}
              onChange={changeHandler}
            />
            <QInput
              type="text"
              placeholder="feel free to say anything ..."
              height="150px"
              area={true}
              disabled={isPending}
              name="content"
              value={emailObject.content}
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

              <Button
                type="submit"
                disabled={isPending}
                onClick={() => {
                  if (isValid()) {
                    sendEmail();
                  }
                }}
              >
                {isPending ? "..." : "Send"}
              </Button>
            </HStack>
          </Stack>
        </FormControl>
      </div>
    </section>
  );
};

export default Contact;
