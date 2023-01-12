import React from "react";
import { Button } from "@chakra-ui/react";

export interface iButtons {
  props: React.CSSProperties;
}

export const Buttons = ({ ...props }) => {
  return <Button variant="unstyled" {...props}></Button>;
};
