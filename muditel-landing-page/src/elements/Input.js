import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const CInput = props => {
  const [isActive, update] = useState(false);
  const inputRef = useRef();

  // focus effect funcionalitiy
  useEffect(() => {
    window.addEventListener("click", event => {
      update(event.target === inputRef.current);
    });

    return () => window.removeEventListener("click", null);
  });

  const _props = {
    ref: inputRef,
    h: "50px",
    bgColor: "#D6D8E3",
    variant: "filled",
    _focus: { borderColor: "blue" },
    required: true,
  };

  return (
    <InputGroup>
      {props.area ? (
        ""
      ) : (
        <InputLeftElement
          h="50px"
          children={
            <Icon color={isActive ? "blue" : "w_blue"} as={props.icon} />
          }
        />
      )}

      {!props.area ? (
        <Input {..._props} {...props} isRequired={true} />
      ) : (
        <Textarea {..._props} {...props} resize={"none"} isRequired={true} />
      )}
    </InputGroup>
  );
};

export default CInput;
