import { Box, Text, Image } from "@chakra-ui/react";
import BottomNav from "../components/bottomNav";
import ReactTypingEffect from "react-typing-effect";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {

    const interval = setInterval(() => {
      const button = document.getElementById("decor-anim");
      if (button) {
        button.classList.remove("animate__animated", "animate__swing");
        setTimeout(
          () => button.classList.add("animate__animated", "animate__swing"),
          10
        ); // Re-add the class with a slight delay
      }
    }, 2000); // Repeat every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);


  return (
    <Box minH="100vh" bg="gray.100" color="gray.900" >
      <Box
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      
        position="relative"
        zIndex="1"
      >
        <Text fontSize="xl" className="playwrite-gb-s">
          Bismillahirahmanirrahiim
        </Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="25px"
        
        >
        <Text fontSize="xs" className="merriweather-light">
        By asking for the grace & ridho Allah SWT <br /> We intend to organize a wedding reception 
        </Text>
     
        
        </Box>
       
        <Text fontSize="2xl" className="raleway">
        <ReactTypingEffect
            text={["The Wedding Of"]}
            speed={200}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
          >
            </ReactTypingEffect>
       
        
        </Text>
        <Box
      // borderRadius="50%"
      // border="1px"
      // p="30px"
      textAlign="center"
      position="relative"
        >
        <Text fontSize="6xl" className="alex-brush-regular">
          Adik Soleh
        </Text>
        <Text fontSize="6xl" className="alex-brush-regular">
          &
        </Text>
        <Text fontSize="6xl" className="alex-brush-regular">
          Dewi Astuti
        </Text>
        </Box>
      </Box>

      <BottomNav />

      {/* Gambar Dekorasi */}
      <Image
    //  id="decor-anim"
        src="../src/assets/TL.png"
        alt="Decor 1"
        position="absolute"
        top="0"
        left="0"
        width="150px"
        className="windy windy-top-left"
      />
      <Image
        src="../src/assets/TR.png"
        alt="Decor 2"
        position="absolute"
        top="0"
        right="0"
        width="150px"
     
      className="animate__animated animate__fadeInRight"
      />
      <Image
        src="../src/assets/BL.png"
        alt="Decor 3"
        position="absolute"
        bottom="50px"
        left="0"
        width="150px"
        className="animate__animated animate__fadeInLeft"
      />
      <Image
        src="../src/assets/BR.png"
        alt="Decor 4"
        position="absolute"
        bottom="50px"
        right="1"
         width="150px"
        className="windyRight windy-bottom-right"
      />
    </Box>
  );
};
export default HomePage;
