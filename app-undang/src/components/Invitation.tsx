import { Text,Box, Center } from "@chakra-ui/react";
import ReactTypingEffect from 'react-typing-effect';
function Invitation() {
    return (
        <Box
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgImage="url('../src/assets/bunga.jpg')"
        bgPosition="center"
        // bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
     

      >
        {/* Overlay untuk membuat teks lebih terbaca */}
        {/* <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(255, 255, 255, 0.6)"
          zIndex="0"
        /> */}
     <Text fontSize="3xl">
                The Wedding Of
            </Text>
            <Text fontSize="6xl">
                Soleh & Dewi
            </Text>
        {/* Animasi tulisan mengetik */}
        <Center
          zIndex="1"
        
        >
         
          <ReactTypingEffect
            text={['Adik Soleh & Dewi', '1 November 2024']}
            speed={200}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
          />
        </Center>
      </Box>
      
      );
}

export default Invitation;
