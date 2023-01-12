import "./App.css";
import React, { useState } from "react";
import { Button, Flex, Img } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";

const img =
  "https://occ-0-600-1380.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR6IL2rjqk3GH2zgh4NPdPCpbJU1IK6s46cQckbHMDqFWYA_7gsxv2Nx4tyVQxUMLiWy3pkzlLX6yWZyHv75srPyIxOXqkzkR6XL.webp?r=e35";

function App() {
  return (
    <Flex h="100%" w="100%" flexDir="column">
      <Header />
      <Img
        objectFit="cover"
        backgroundSize="cover"
        backgroundPosition="center"
        h="800px"
        src="https://occ-0-600-1380.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR6IL2rjqk3GH2zgh4NPdPCpbJU1IK6s46cQckbHMDqFWYA_7gsxv2Nx4tyVQxUMLiWy3pkzlLX6yWZyHv75srPyIxOXqkzkR6XL.webp?r=e35"
      />
      <Flex mt="-350px" ml="80px" gap="30px">
        <Buttons
          title="Assistir"
          fontWeight="bold"
          width="130px"
          bgColor="#fff"
          color="#000"
          onClick={() => alert("clicou em assistir")}
        >
          Assistir
        </Buttons>
        <Buttons
          title="Assistir"
          fontSize="15px"
          w="200px"
          fontWeight="bold"
          color="#fff"
          bgColor="rgba(0,0,0,0.5)"
          onClick={() => alert("clicou em mais informações")}
        >
          Mais informações
        </Buttons>
      </Flex>
    </Flex>
  );
}

export default App;
