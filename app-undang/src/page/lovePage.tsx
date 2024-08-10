import { Box, Center, Text, SimpleGrid, Image } from '@chakra-ui/react';
import BottomNav from '../components/bottomNav';

function LovePage() {
  const photos = [
    '/src/assets/OIP.jpeg',
    '/src/assets/OIP (2).jpeg',
    '/src/assets/OIP.jpeg',
    '/src/assets/OIP (2).jpeg',
    '/src/assets/OIP.jpeg',
    // Tambahkan path ke foto mempelai lainnya
  ];

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/src/assets/OIP.jpeg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      p="4"
    >
      {/* Overlay untuk membuat teks lebih terbaca */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(255, 255, 255, 0.6)"
        zIndex="0"
      />

      {/* Konten Halaman Love */}
      <Center
        zIndex="1"
        p="4"
        borderRadius="md"
        boxShadow="lg"
        bg="rgba(255, 255, 255, 0.8)"
        flexDirection="column"
        mb="8"
      >
      
        <Text
          fontFamily="serif"
          fontSize="2xl"
          textAlign="center"
          mb="4"
          dir="rtl"
        >
          "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ"
        </Text>
        <Text
          fontFamily="serif"
          fontSize="lg"
          textAlign="center"
          mb="4"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir." (QS. Ar-Rum: 21)
        </Text>
      </Center>

      {/* Album Foto Mempelai */}
      <Center
        zIndex="1"
        p="4"
        borderRadius="md"
        boxShadow="lg"
        bg="rgba(255, 255, 255, 0.8)"
        flexDirection="column"
        mb="8"
      >
        <Text
          fontFamily="serif"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          mb="4"
        >
          Album Foto Mempelai
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing="4">
          {photos.map((photo, index) => (
            <Image
              key={index}
              src={photo}
              alt={`photo-${index + 1}`}
              borderRadius="md"
              boxShadow="lg"
            />
          ))}
        </SimpleGrid>
      </Center>
      <BottomNav />
    </Box>
  );
}

export default LovePage;
