import { ChakraProvider, theme } from "@chakra-ui/react";
import { useEffect, useRef, useCallback, useState } from "react";
import Overlay from "./components/Overlay";
import Page from "./components/Page";
import Home from "./components/subcomponents/Home";
import About from "./components/subcomponents/About";
import Features from "./components/subcomponents/Features";
import Contact from "./components/subcomponents/Contact";

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
      "https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg",
    component: <About />,
  },
  {
    id: "features",
    href: "#features",
    bgImage: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg",
    component: <Features />,
  },
  {
    id: "contact",
    href: "#contact",
    bgImage: "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg",
    component: <Contact />,
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
