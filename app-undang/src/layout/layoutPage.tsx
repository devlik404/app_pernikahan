import { useEffect, useState } from "react";
import {
  Image,
  Text,
  Box,
  Button,
  Center,
  IconButton,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { FaEnvelopeOpen,FaEnvelope } from "react-icons/fa";
import "animate.css/animate.min.css"; // Import Animate.css
import { Link, useParams } from "react-router-dom";

function LayoutPage() {
  const { name } = useParams();

  const { isOpen, onToggle } = useDisclosure();
  const [showInvite, setShowInvite] = useState(false);
  const [buttonPosition, setButtonPosition] = useState("4");
  const [isBouncing, setIsBouncing] = useState(true);

  useEffect(() => {
    if (!isBouncing) return;

    const interval = setInterval(() => {
      const button = document.getElementById("bouncing-button");
      if (button) {
        button.classList.remove("animate__animated", "animate__bounce");
        setTimeout(
          () => button.classList.add("animate__animated", "animate__bounce"),
          10
        ); // Re-add the class with a slight delay
      }
    }, 2000); // Repeat every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isBouncing]);

  const handleClick = () => {
    setIsBouncing(false); // Stop bouncing
    onToggle();
    setTimeout(() => setShowInvite(true), 500); // Delay to show the invite button
    setButtonPosition(isOpen ? "4" : "46vh"); // Adjust button position when open or not
    if (!isBouncing) {
      setTimeout(() => setIsBouncing(true), 500);
    }
  };

  // const handleOpenInvite = () => {
  //   onToggle(); // Close the envelope after opening
  //   setShowInvite(false); // Hide the "Buka Undangan" button
  //   setButtonPosition("4"); // Set button position back to initial position
  //   setTimeout(() => setIsBouncing(true), 500); // Restart bouncing animation after a delay
  // };

  const handleBoxClick = () => {
    onToggle(); // Close the box
    setTimeout(() => {
      setButtonPosition("4"); // Set button position back to initial position
      setIsBouncing(true); // Restart bouncing animation
    }, 500); // Delay to ensure the box has closed
  };
  console.log(name+"ini");
  return (
    <Box
      minH="100vh"
      bgImage="url('/src/assets/bgMain.jpg')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      {isOpen && (
        <>
        
          <Box
            position="absolute"
            bottom="0"
            left="50%"
            transform="translateX(-50%)"
            width="100%"
            height="50vh"
            bg="#82c2df"
            boxShadow="xl"
            borderRadius="md"
            p="4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            animation="slideUp 0.5s forwards"
            zIndex="1"
            onClick={handleBoxClick} 
          >
        
            <Image
              src="/src/assets/btm.png" 
              alt="Bunga"
              position="absolute"
              bottom="0"
              right="0"
              objectFit="contain"
              className=" animate__animated animate__fadeInRight"
              
               
            />
            <Image
              src="/src/assets/btmleft.png" 
              alt="Bunga"
              position="absolute"
              bottom="0"
              left="0"
              objectFit="contain"
              className="animate__animated animate__fadeInLeft"
            />
            <Text fontSize="md" m="2" className="dosis">
          Hi {name ? name : 'Anonym'} you are Invited To The Wedding Of
            </Text>
            <Text fontSize="5xl" className="dancing-script">
              Soleh & Dewi
            </Text>
            <Center w="90%" p="5">
              <Divider
                orientation="horizontal"
                borderWidth="1px"
                borderColor="blue.900"
              />
            </Center>
            {showInvite && (
              <Button
                bg="blue.300"
                // onClick={handleOpenInvite}
              >
                <Link to={name ? `home`: "home"} className="dosis"> Open Invited </Link>
              </Button>
            )}
            <Center width="50%" p="5">
              <Divider orientation="horizontal" borderColor="blue.900" />
            </Center>
          </Box>
        </>
      )}

      <Center
        position="absolute"
        bottom={buttonPosition} // Adjust button position
        left="50%"
        transform="translateX(-50%)"
        p="none"
        zIndex="1"
        style={{
          transition: "bottom 0.5s", // Transition for bottom position change
        }}
      >
        <IconButton
          id="bouncing-button"
          className={isBouncing ? "animate__animated animate__bounce" : ""}
          icon={isOpen ? <FaEnvelopeOpen/> : <FaEnvelope />}
          bg="#82c2df"
          size="lg"
          borderRadius={isOpen ? "50% 50% 0 0" : "50%"}
          color="blue.900"
          border="none"
          onClick={handleClick}
          style={{
            position: "relative", // Set button position relative to the containing box
            transition: "transform 0.5s", // Transition for button transformation
            transform: isOpen ? "translateY(-50%)" : "translateY(0)", // Set button transformation when open or not
          }}
          aria-label=""
        />
      </Center>

      <style jsx>{`
        @keyframes slideUp {
          from {
            bottom: -50vh;
          }
          to {
            bottom: 0;
          }
        }
      `}</style>
    </Box>
  );
}

export default LayoutPage;
