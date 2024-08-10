import { Box, Image, Center, IconButton, Text } from '@chakra-ui/react';
import BottomNav from '../components/bottomNav';
import { useEffect, useRef, useState } from 'react';
import { FaEnvelopeOpen, FaEnvelope, FaArrowDown } from 'react-icons/fa';

function DatePage() {
  const box2Ref = useRef<HTMLDivElement | null>(null);

  const handleScrollToBox2 = () => {
    if (box2Ref.current) {
      box2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isBouncing, _] = useState(true);

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
  return (
    <>
    
    <Box
    minH="100vh"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    // bgImage="url('/path/to/your/flower-image.jpg')"
    // bgPosition="center"
    // bgRepeat="no-repeat"
    // bgSize="cover"
    position="relative"
  >
  

    {/* Konten Halaman Date */}
    <Center
    
      p="4"
      borderRadius="md"
      bg="rgba(255, 255, 255, 0.8)"
      flexDirection="column"
    >
        <Text
        className="alex-brush-regular"
        fontSize="8xl"
        textAlign="center"
        mb="4"
        zIndex="1"
      >
        Save <br/>
       <Text
       fontSize="5xl" 
       >The</Text> 
         Date
      </Text>
        <IconButton
        mt="4"
          id="bouncing-button"
          className={isBouncing ? "animate__animated animate__bounce" : ""}
          icon={<FaArrowDown/>}
          bg="none"
          size="lg"
          borderRadius={"50%"}
          border="none"
          onClick={handleScrollToBox2}
          style={{
            position: "relative", // Set button position relative to the containing box
            transition: "transform 0.5s", // Transition for button transformation
          }}
          aria-label=""
        />
      </Center>
      <Image
    //  id="decor-anim"
        src="../src/assets/dek-top-2.png"
        alt="Decor 1"
        position="absolute"
        top="0"
        left="0"
        width="100px"
           
      className="animate__animated animate__fadeInLeft"
      />
      <Image
        src="../src/assets/dek-top.png"
        alt="Decor 2"
        position="absolute"
        top="0"
        right="0"
        width="100px"
    
      className="animate__animated animate__fadeInRight"
      />
      <Image
        src="../src/assets/blue-right-1.png"
        alt="Decor 3"
        position="absolute"
        bottom="0px"
        left="0"
        width="150px"
         className='windyleft windy-bottom-left'
      />
      <Image
        src="../src/assets/blue-right-2.png"
        alt="Decor 3"
        position="absolute"
        bottom="0px"
        left="0"
        width="150px"
       className='windyleft windy-bottom-left'
      />
      <Image
        src="../src/assets/blue-left-1.png"
        alt="Decor 4"
        position="absolute"
        bottom="50px"
        right="1"
         width="150px"
              className='windyleft windy-bottom-left'
      />
        <Image
        src="../src/assets/blue-left-2.png"
        alt="Decor 4"
        position="absolute"
        bottom="50px"
        right="1"
         width="150px"
         className='windyleft windy-bottom-left'
      />
      </Box>
    <Box
       ref={box2Ref}
       bg="#E1F5FE"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/path/to/your/flower-image.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
    >
    

      {/* Konten Halaman Date */}
      <Center
      
        p="4"
        borderRadius="md"
        bg="rgba(255, 255, 255, 0.8)"
        flexDirection="column"
      >
      

        <Text
          fontFamily="serif"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb="4"
          as='b'
        >
          Akad Nikah
        </Text>
        <Text
          fontFamily="serif"
          fontSize="xl"
          textAlign="center"
          as='b'
        >
        Juma'at  1 November 2024
        </Text>
        <Text
          fontFamily="serif"
          fontSize="md"
          textAlign="center"
          mt="2"
          as='b'
        >
          Waktu: 8:00 WIB - Selesai
        </Text>
        <Text
          fontFamily="serif"
          fontSize="lg"
          textAlign="center"
          mt="2"
        >
          Rumah Mempelai Wanita | Jl.Gatot Subroto Kabupaten Pandeglang
        </Text>
      
      </Center>
        <Text   
        fontFamily="serif"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          mb="4">&</Text>
      <Center
        p="4"
        borderRadius="md"
        bg="rgba(255, 255, 255, 0.8)"
        flexDirection="column"
      >
        <Text
          fontFamily="serif"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb="4"
          as='b'
        >
          Resepsi Pernikahan
        </Text>
        <Text
          fontFamily="serif"
          fontSize="xl"
          textAlign="center"
          as='b'
        >
          Jum'at 1 November 2024
        </Text>
        <Text
          fontFamily="serif"
          fontSize="md"
          textAlign="center"
          mt="2"
        >
          Waktu: 10:00 WIB - Selesai
        </Text>
        <Text
          fontFamily="serif"
          fontSize="lg"
          textAlign="center"
          mt="2"
        >
      Rumah Mempelai Wanita | Jl.Gatot Subroto Kabupaten Pandeglang
        </Text>

      </Center>
      <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/path/to/your/flower-image.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
    >
     
      {/* Konten Halaman Location */}
      <Center
        p="4"
        borderRadius="md"
        boxShadow="lg"
        bg="rgba(255, 255, 255, 0.8)"
        flexDirection="column"
      >
        <Text
          fontFamily="serif"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          mb="4"
        >
          Lokasi Acara
        </Text>
        <Text
          fontFamily="serif"
          fontSize="lg"
          textAlign="center"
          mb="4"
        >
          Pandeglang,Serang
        </Text>
        <Text
          fontFamily="serif"
          fontSize="md"
          textAlign="center"
          mb="4"
        >
          Kami dengan senang hati mengundang Anda ke acara pernikahan kami yang akan diadakan di Jl.Gatot Subroto,Pandeglang, Serang. Lokasi ini terletak di rumah mempelai wanita.
        </Text>
        <Box 
        boxSize="sm" 
        borderRadius="md"
         boxShadow="lg"
         display="flex"
         justifyContent="center"
         alignItems="center"
         >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63448.48191981934!2d106.07030817159685!3d-6.325273377951914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42235e286c1ed9%3A0x401e8f1fc28c2a0!2sPandeglang%2C%20Kec.%20Pandeglang%2C%20Kabupaten%20Pandeglang%2C%20Banten!5e0!3m2!1sid!2sid!4v1720109238170!5m2!1sid!2sid" width="400" height="300"  loading="lazy"></iframe>
      
        </Box>
        <Text
          fontFamily="serif"
          fontSize="md"
          textAlign="center"
          p="50px"
        >
          Alamat: Jl. Example No. 123, Jakarta
        </Text>
      </Center>
    </Box>
      
    </Box>
    <BottomNav/>
    </>
  );
}

export default DatePage;
