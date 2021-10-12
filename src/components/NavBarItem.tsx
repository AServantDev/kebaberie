import React from 'react';
import { Link } from 'react-router-dom';

import { HStack, Text } from '@chakra-ui/react';

interface Props {
  text: string;
  to: string;
}
export const NavBarItem = ({ text, to }: Props): JSX.Element => {
  return (
    <HStack
      as={Link}
      to={to}
      py="2"
      px="2"
      borderRadius="md"
      _hover={{ bg: "gray.700", textDecoration: "underline" }}
      cursor="pointer"
      w="full"
    >
      <Text fontSize="md" _hover={{ textDecoration: "underline" }}>
        {text}
      </Text>
    </HStack>
  );
};
