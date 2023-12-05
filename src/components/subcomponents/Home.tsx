import { Heading, Box, Text } from "@chakra-ui/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <Box>
      <Heading
        fontSize="48px"
        fontWeight="bold"
        textAlign="center"
        color="white"
      >
        Welcome to Crewlock
      </Heading>
      <Text fontSize="24px" textAlign="center" color="white">
        Your window into your next crew
      </Text>
    </Box>
  );
};

export default Home;
