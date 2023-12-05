import { Flex } from "@chakra-ui/react";
import React from "react";

interface PageProps {
  section: {
    id: string;
    bgImage?: string;
    component?: React.ReactNode;

  };
  refCallback: any;
}

const Page: React.FC<PageProps> = ({ section, refCallback }) => {
  const { id, bgImage, component } = section;

  return (
    <Flex
      height="120vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      id={id}
      ref={refCallback}
    >
      {component}
    </Flex>
  );
};

export default Page;
