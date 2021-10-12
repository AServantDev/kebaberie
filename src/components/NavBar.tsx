import React from 'react';

import { Box, HStack } from '@chakra-ui/react';

import { NavBarItem } from './NavBarItem';

export const NavBar = (): JSX.Element => {
  return (
    <HStack
      h="xs"
      px={{ base: 4, sm: 4, "2xl": 8 }}
      alignItems="center"
      justifyContent="flex-start"
      spacing="4"
      w="full"
    >
      <Box>
        <NavBarItem text="Home" to="/" />
      </Box>
      <Box>
        <NavBarItem text="Les joueurs" to="/players" />
      </Box>
    </HStack>
  );
};
