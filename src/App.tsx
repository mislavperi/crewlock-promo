import { ChakraProvider, theme } from "@chakra-ui/react";
import { useEffect, useRef, useCallback, useState } from "react";
import Overlay from "./components/Overlay";
import Page from "./components/Page";
import Home from "./components/subcomponents/Home";
import About from "./components/subcomponents/About";

const sections = [
  {
    id: "home",
    href: "#",
    bgImage:
      "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg",
    component: <Home />,
  },
  {
    id: "about",
    href: "#about",
    bgImage:
      "https://images.pexels.com/photos/8089662/pexels-photo-8089662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    component: <About />,
  },
  {
    id: "features",
    href: "#features",
    component: <Home />,
  },
  {
    id: "contact",
    href: "#contact",
    component: <Home />,
  },
];

export const App = () => {
  const sectionsRef = useRef([]);
  const [visibleSection, setVisibleSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          setVisibleSection(entry.target.id);
        }
      });
    });
    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const refCallback = useCallback((element: any) => {
    if (element) {
      // @ts-ignore
      sectionsRef.current.push(element);
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <header>
        <Overlay nav={sections} visibleSection={visibleSection} />
      </header>
      {sections.map((section, index) => (
        <Page {...{ section, refCallback }} key={index} />
      ))}
    </ChakraProvider>
  );
};
