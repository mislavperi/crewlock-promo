import React from "react";
import { Heading, Text, Image, Flex } from "@chakra-ui/react";

const Features: React.FC = () => {
  return (
    <Flex width="100%" alignItems="center" flexDir="column">
      <Heading fontSize="48px" textAlign="center" color="white">
        Crewlock platform helps you
      </Heading>
      <Flex flexWrap="wrap" maxWidth="70%" align="center" justify="center">
        <Flex m={5} direction="column" align="center">
          <Image
            src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1600"
            height={300}
          />
          <Text color="white" m={5} fontSize="xl">
            Find a perfect film crew for your next project
          </Text>
        </Flex>
        <Flex m={5} direction="column" align="center">
          <Image
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
            height={300}
          />
          <Text color="white" m={5} fontSize="xl">
            Connect with people from the industry
          </Text>
        </Flex>
        <Flex m={5} direction="column" align="center">
          <Image
            src="https://images.pexels.com/photos/2760847/pexels-photo-2760847.jpeg?auto=compress&cs=tinysrgb&w=1600"
            height={300}
          />
          <Text color="white" m={5} fontSize="xl">
            Rent out the gear for your next session
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Features;
