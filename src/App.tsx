import "./App.css";
import React, { useState } from "react";
import { Button, Flex, Img, Text } from "@chakra-ui/react";
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
      <Flex flexDir="column" mt="-550px" ml="80px" gap="30px">
        <Text color="#fff" maxW="300px" fontWeight="700" fontSize="30px">
          Casamento às cegas
        </Text>
        <Text color="#fff" maxW="500px" fontWeight="500">
          Um reality onde tenta-se formar um casal, baseando somente nas
          conversas que eles possuem, e suas experiências vivídas, porém com uma
          condição . Os participantes não podem ver seus parceiros.
        </Text>
        <Flex gap="30px">
          <Buttons
            title="Assistir"
            fontWeight="bold"
            width="130px"
            bgColor="#fff"
            color="#000"
            _hover={{ opacity: "0.8" }}
            onClick={() => alert("clicou em assistir")}
          >
            Assistir
          </Buttons>
          <Buttons
            title="Assistir"
            fontSize="17px"
            w="200px"
            fontWeight="bold"
            _hover={{ opacity: "0.8" }}
            color="#fff"
            bgColor="rgba(0,0,0,0.4)"
            onClick={() => alert("clicou em mais informações")}
          >
            Mais informações
          </Buttons>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
