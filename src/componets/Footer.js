import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#FFA8E2">
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        color="white"
        fontWeight="bold"
      >
        <Image
          p="2rem"
          justifyContent="center"
          alignItems="center"
          src="https://picsum.photos/200/300"
        />
        <VStack p="2rem">
          <Link to="/">The Green</Link>
          <Link to="/"> The White</Link>
          <Link to="/"> The Blue</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">Hello</Link>
          <Link to="/">Hi</Link>
          <Link to="/">Lol</Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Footer;
