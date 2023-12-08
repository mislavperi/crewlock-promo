import { ChakraProvider, theme, Avatar } from "@chakra-ui/react";
import { useEffect, useRef, useCallback, useState } from "react";
import Overlay from "./components/Overlay";
import Page from "./components/Page";
import Home from "./components/subcomponents/Home";
import About from "./components/subcomponents/About";
import Features from "./components/subcomponents/Features";
import Contact from "./components/subcomponents/Contact";
import Reviews from "./components/subcomponents/Reviews";

const reviews = [
  {
    title: "Revolutionizing Collaboration in the Film Industry",
    review: "Crewlock has truly transformed the way professionals connect and collaborate in the film industry. As a filmmaker, I often struggled to find the right talent for my projects, but Crewlock has made the process seamless. The platform's intuitive interface allows me to easily browse through a diverse pool of skilled professionals, from cinematographers to sound engineers. The ability to review portfolios and connect with potential collaborators has significantly expedited my project planning. Kudos to Crewlock for creating a game-changing tool that enhances efficiency and creativity in the film industry.",
    profilePicture: <Avatar name='Segun Adebayo' size="2xl" src='https://bit.ly/dan-abramov' />,
    name: "Dan Abramov"
  },
  {
    title: "A Game-Changer for Freelancers and Productions with Crewlock",
    review: "Crewlock has become an indispensable tool for freelancers like myself working in the film industry. The platform provides a centralized hub for professionals to showcase their skills, making it easier than ever to connect with filmmakers and production teams. The rating and review system adds a layer of transparency, helping me make informed decisions about potential collaborations. The project management features are robust and user-friendly, streamlining communication and workflow. Whether you're a seasoned professional or just starting, Crewlock is a must-have for anyone looking to navigate the dynamic world of film production.",
    profilePicture: <Avatar name='Segun Adebayo' size="2xl" src='https://bit.ly/prosper-baba' />,
    name: "Prosper Otemuyiwa"

  },
  {
    title: "Connecting Creatives Like Never Before with Crewlock",
    review: "Crewlock is a game-changer for fostering collaboration and creativity within the film industry. As a director, I appreciate the platform's ability to connect me with talented professionals across various disciplines. The integrated messaging and project management tools make coordination a breeze, saving both time and energy. What sets Crewlock apart is its commitment to diversity and inclusion, ensuring that filmmakers have access to a wide array of talents and perspectives. I've successfully assembled diverse and highly skilled crews for my projects, thanks to Crewlock's innovative approach to connecting creatives. This platform is a true asset for anyone passionate about elevating their film projects to new heights.",
    profilePicture: <Avatar name='Segun Adebayo' size="2xl" src='https://bit.ly/sage-adebayo' />,
    name: "Sage Adebayo"
  }
]

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
    id: "reviews",
    href: "#reviews",
    bgImage: "https://images.pexels.com/photos/6648497/pexels-photo-6648497.jpeg",
    component: <Reviews reviews={reviews} />,
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
