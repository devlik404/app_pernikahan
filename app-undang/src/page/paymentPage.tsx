import { useState } from 'react';
import {
  Box,
  Center,
  Text,
  Input,
  Button,
  VStack,
  RadioGroup,
  Radio,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import BottomNav from '../components/bottomNav';

function PaymentPage() {
  const [attendance, setAttendance] = useState('');
  const [message, setMessage] = useState('');

  const handleAttendanceChange = (value:any) => {
    setAttendance(value);
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    alert(`Form submitted with attendance: ${attendance} and message: ${message}`);
  };

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
        width="100%"
        maxWidth="500px"
      >
        <Text
          fontFamily="serif"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          mb="4"
        >
          Konfirmasi Kehadiran
        </Text>
        <VStack spacing="4" width="100%">
          <RadioGroup onChange={handleAttendanceChange} value={attendance}>
            <Stack direction="row" spacing="4">
              <Radio value="hadir">Hadir</Radio>
              <Radio value="tidak_hadir">Tidak Hadir</Radio>
            </Stack>
          </RadioGroup>

          {attendance === 'tidak_hadir' && (
            <>
              <Input placeholder="Nama" />
              <Input placeholder="Nomor Telepon" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Jumlah Donasi" type="number" />
              <Textarea
                placeholder="Kartu Ucapan"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button colorScheme="teal" onClick={handleSubmit}>Bayar</Button>
            </>
          )}

          {attendance === 'hadir' && (
            <>
               <Input placeholder="Nama" />
               <Input placeholder="Nomor Telepon" />
              <Textarea
                placeholder="Kartu Ucapan"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button colorScheme="teal" onClick={handleSubmit}>Kirim</Button>
            </>
          )}
        </VStack>
      </Center>
      <BottomNav/>
    </Box>
  );
}

export default PaymentPage;
