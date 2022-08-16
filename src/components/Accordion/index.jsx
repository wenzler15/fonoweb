import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

import { Container } from "./styles";

function AccordionComponent({ title = "", children }) {
  return (
    <Container>
      <Accordion sx={{ border: 0, padding: 0 }}>
        <AccordionSummary expandIcon={<FiChevronDown />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default AccordionComponent;
