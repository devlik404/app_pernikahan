import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaHome, FaCalendarAlt, FaMapMarkerAlt, FaHeart, FaEnvelopeOpenText, FaMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BottomNav() {
  const color = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box
      pos="fixed"
      bottom="0"
      left="0"
      right="0"
      bg={"#96C9F4"}
      shadow="md"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      p="2"
      zIndex={"2"}
    >
       <Link to={"/home"}>
      <IconButton aria-label="Home" icon={<FaHome />} color={color}   _hover={{ color: "black" }}/>
      </Link>
      <Link to={"/date"}>
      <IconButton aria-label="Event" icon={<FaCalendarAlt />} color={color}   _hover={{ color: "yellow"}}/>
      </Link>
      {/* <Link to={"/location"}>
      <IconButton aria-label="Location" icon={<FaMapMarkerAlt />} color={color}   _hover={{ color: "green" }}/>
      </Link> */}
      <Link to={"/love"}>

      <IconButton aria-label="Love" icon={<FaHeart />} color={color}   _hover={{ color: "red" }}/>
      </Link>
      
      <Link to="/rsvp">
        <IconButton
          aria-label="RSVP"
          icon={<FaEnvelopeOpenText />}
          color={color}
          _hover={{ color: "black" }}
        />
      </Link>
      
    </Box>
  );
}

export default BottomNav;
