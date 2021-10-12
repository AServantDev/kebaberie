import React from 'react';
import { FiTwitch, FiTwitter } from 'react-icons/fi';

import { Box, Heading, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';

interface Props {
  name: string;
  twitch?: string;
  twitter: string;
  link?: string;
  meta: string;
  image: string;
}

export const Card = ({
  name,
  twitter,
  meta,
  image,
  twitch,
}: Props): JSX.Element => {
  return (
    <Box
      w="sm"
      borderWidth="2px"
      borderRadius="lg"
      bg="gray.700"
      overflow="hidden"
    >
      <Image src={image} w="full" />
      <Box p={4}>
        <Heading>{name}</Heading>
        <Text color="gray.500">{meta}</Text>
        <VStack>
          <HStack>
            <Icon as={FiTwitter} />
            <Text as={"a"} href={twitter}>
              {name}
            </Text>
          </HStack>
          <HStack>
            <Icon as={FiTwitch} />
            <Text as={"a"} href={twitch}>
              {name}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
