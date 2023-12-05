import { Heading, Box, Text } from "@chakra-ui/react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Box>
      <Heading
        fontSize="48px"
        fontWeight="bold"
        textAlign="center"
        color="white"
      >
        Interested in Crewlock?
      </Heading>
      <Text fontSize="24px" textAlign="center" color="white" maxWidth={1000}>
        Contact us at info@crewlock.com
      </Text>
    </Box>
  );
};

export default Contact;
