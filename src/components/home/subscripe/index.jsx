import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button, Container } from "../../../generic/style";
import { SubscirpeWrapper } from "./style";
import subsciprImg from "../../../assets/img/subscripe.png";
import { useState } from "react";
import { useRef } from "react";
const Subscirpe = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  const ref = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const value2 = value.trim();
    if (!value2 || !value2.includes("@")) {
      setState(true);
      return;
    } else {
      setState(false);
      setValue("");
    }
  };
  return (
    <Container>
      <SubscirpeWrapper>
        <Box>
          <Typography variant="h2">Subscribe Our Newsletter</Typography>
          <Typography variant="body1" width={"80%"} p={"12px 0"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
            tempor, accumsan sit amet nunc cursus.
          </Typography>
          <SubscirpeWrapper.Form onSubmit={(e) => sendEmail(e)}>
            <input
              type="text"
              placeholder="Enter mail..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <Button $sm>Subscribe</Button>
          </SubscirpeWrapper.Form>
          {state && <p className="eror">Please enter an email !!!</p>}
        </Box>
        <Box>
          <img src={subsciprImg} alt="" />
        </Box>
      </SubscirpeWrapper>
    </Container>
  );
};

export default Subscirpe;
