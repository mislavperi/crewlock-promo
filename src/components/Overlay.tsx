import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";

const activeStyle = {
  color: "grey",
  fontSize: "32px",
};

interface Nav {
  id: string;
  href: string;
}

interface ComponentProps {
  nav: Nav[];
  visibleSection: string;
}

const Overlay: React.FC<ComponentProps> = ({ nav, visibleSection }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={9999}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Flex direction="column" m="10">
        {nav.map((item) => {
          return (
            <Link
              fontSize="lg"
              mb={2}
              key={item.id}
              p={3}
              href={item.href}
              color="white"
              style={item.id === visibleSection ? activeStyle : {}}
            >
              {item.id}
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Overlay;
