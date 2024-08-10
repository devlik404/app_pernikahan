import { Box, Center, Text, Input, Button, VStack } from '@chakra-ui/react';
import BottomNav from '../components/bottomNav';

function RSVPPage() {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      p="4"
    >
      <Center
        p="4"
        borderRadius="md"
        boxShadow="lg"
        bg="white"
        flexDirection="column"
      >
        <Text
          fontFamily="serif"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          mb="4"
        >
          RSVP
        </Text>
        <VStack spacing="4" width="100%">
          <Input placeholder="Nama" />
          <Input placeholder="Nomor Telepon" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Alamat" />
          <Button colorScheme="teal">Kirim</Button>
        </VStack>
      </Center>
      <BottomNav/>
    </Box>
  );
}

export default RSVPPage;
