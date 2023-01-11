import { Button } from "@chakra-ui/react";
import React from "react";

export interface iButtons {
  title: string;
}

export const Buttons = ({ title }: iButtons) => {
  return <Button bgColor="rgba(255, 255, 255, 0.8)">{title}</Button>;
};
