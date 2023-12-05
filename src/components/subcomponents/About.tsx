import { Heading, Box, Text } from "@chakra-ui/react";
import React from "react";

const About: React.FC = () => {
  return (
    <Box>
      <Heading
        fontSize="48px"
        fontWeight="bold"
        textAlign="center"
        color="white"
      >
        We are Crewlock
      </Heading>
      <Text fontSize="24px" textAlign="center" color="white">
        At CrewLock, we believe in the power of collaboration, creativity, and
        connection. Whether you're a director, cinematographer, editor, or any
        other role in the filmmaking industry, CrewLock is your dedicated space
        to showcase your talent, build meaningful connections, and bring your
        cinematic visions to life.
      </Text>
    </Box>
  );
};

export default About;
