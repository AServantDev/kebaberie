import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import {
    Box, Button, HStack, Menu, MenuButton, MenuList, useBreakpointValue
} from '@chakra-ui/react';

import { NavBarItem } from './NavBarItem';

export const NavBar = (): JSX.Element => {
  const text = useBreakpointValue({ base: "lol", sm: "players" });
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
        <NavBarItem text={text} to="/players" />
      </Box>

      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<FiChevronDown />}>
            Les jeux
          </MenuButton>
          <MenuList>
            <NavBarItem text="Smash Bros Ultimate" to="/game/smash" />
            <NavBarItem text="Monster Hunter" to="/game/mh" />
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};
