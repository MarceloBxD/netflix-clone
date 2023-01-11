import { Avatar, Button, Text, Flex, Img, Input } from "@chakra-ui/react";
import {
  SearchIcon,
  TriangleDownIcon,
  BellIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import NetflixLogo from "../../assets/images/netflix-logo.png";
import React, { useEffect, useState } from "react";
import { Menus } from "../Menus";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { users } from "../../helpers/users";
import { iUser } from "../../helpers/users";

export const Header = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [onTop, setOnTop] = useState<boolean>(true);
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onTop]);

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      px="65px"
      h="68px"
      position="fixed"
      top="0"
      fontSize="14px"
      bgColor={onTop ? "rgb(0,0,0)" : "transparent"}
      transition={onTop ? "all 0.5s ease" : "all 0.5s ease"}
    >
      <Flex gap="50px">
        <Img w="100px" cursor="pointer" src={NetflixLogo} />
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "10px",
              color: "#fff",
            }}
          >
            <Text cursor="pointer" fontWeight="bold">
              Início
            </Text>
            <Text
              _hover={{ opacity: "0.8", transition: "0.7s all ease" }}
              cursor="pointer"
            >
              Séries
            </Text>
            <Text
              _hover={{ opacity: "0.8", transition: "0.7s all ease" }}
              cursor="pointer"
            >
              Filmes
            </Text>
            <Text
              _hover={{ opacity: "0.8", transition: "0.7s all ease" }}
              cursor="pointer"
            >
              Bombando
            </Text>
            <Text
              _hover={{ opacity: "0.8", transition: "0.7s all ease" }}
              cursor="pointer"
            >
              Minha lista
            </Text>
            <Text
              _hover={{ opacity: "0.8", transition: "0.7s all ease" }}
              cursor="pointer"
            >
              Navegar por idiomas
            </Text>
          </ul>
        </nav>
      </Flex>
      <Flex color="#fff" align="center" justify="center">
        <nav>
          <ul
            style={{
              alignItems: "center",
              display: "flex",
              gap: "20px",
              listStyle: "none",
            }}
          >
            <Button variant="unstyled">
              <SearchIcon onClick={() => setShowInput(!showInput)} />
            </Button>
            {showInput && <Input placeholder="Títulos, gente e gêneros" />}
            <li style={{ cursor: "pointer" }}>Infantil</li>
            <Button variant="unstyled">
              <BellIcon />
            </Button>
            <Menu>
              <MenuButton>
                <Flex
                  cursor="pointer"
                  onClick={() => setOpenAccordion(!openAccordion)}
                  align="center"
                  gap="10px"
                >
                  <Avatar src="" />
                  <TriangleDownIcon
                    style={{
                      transform: hover ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.5s ease",
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  />
                </Flex>
              </MenuButton>
              <MenuList w="250px" p="0">
                {users.map((user: iUser) => (
                  <Flex flexDir="column" key={user.id}>
                    <MenuItem
                      bgColor="rgba(0,0,0,0.9)"
                      _hover={{
                        textDecoration: "underline",
                      }}
                    >
                      <Avatar size="sm" src="" />
                      {user.email}
                    </MenuItem>
                  </Flex>
                ))}
                <MenuItem
                  _hover={{ textDecoration: "underline" }}
                  bgColor="rgba(0,0,0,0.9)"
                  color="#fff"
                >
                  Gerenciar perfis
                </MenuItem>
                <MenuItem
                  _hover={{ textDecoration: "underline" }}
                  bgColor="rgba(0,0,0,0.9)"
                >
                  Transferir perfil
                </MenuItem>
                <MenuItem
                  _hover={{ textDecoration: "underline" }}
                  bgColor="rgba(0,0,0,0.9)"
                >
                  Conta
                </MenuItem>
                <MenuItem
                  _hover={{ textDecoration: "underline" }}
                  bgColor="rgba(0,0,0,0.9)"
                >
                  Central de ajuda
                </MenuItem>
                <hr />
                <MenuItem
                  _hover={{ textDecoration: "underline" }}
                  bgColor="rgba(0,0,0,0.9)"
                >
                  Sair do netflix
                </MenuItem>
              </MenuList>
            </Menu>
          </ul>
        </nav>
      </Flex>
    </Flex>
  );
};
