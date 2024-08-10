import { Box, Center, Text } from '@chakra-ui/react';
import BottomNav from '../components/bottomNav';

function LocationPage() {
  return (
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
  );
}

export default LocationPage;
