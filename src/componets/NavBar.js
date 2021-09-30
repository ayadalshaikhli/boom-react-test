import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Flex, Icon, Image, Text, Box, Badge } from "@chakra-ui/react";
import { MdMenu, MdShoppingBasket } from "react-icons/md";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);
  return (
    <Flex
      backgroundColor="#FFA8E2"
      alignItems="center"
      flexDir="row"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon
        fill="white"
        cursor="pointer"
        w={30}
        h={30}
        as={MdMenu}
        onClick={() => openMenu()}
      ></Icon>
      <Link to="/">
        <Image
          w={100}
          h={100}
          src="https://cdn.shopify.com/s/files/1/0251/8345/3269/files/Abi_Bath_Bomb_Logo_V3_300x300.png?v=1611668617"
        />{" "}
      </Link>
      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
          onClick={() => openCart()}
        ></Icon>
        <Badge backgroundColor="#FF38BD" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
