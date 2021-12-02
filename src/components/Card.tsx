import React from 'react';
import { FiTwitch, FiTwitter } from 'react-icons/fi';

import { Box, Heading, HStack, Icon, Image, Text } from '@chakra-ui/react';
import { AdvancedImage } from '@cloudinary/react';

import { useCloud } from './context/CloudinaryContext';

interface Props {
  name: string;
  twitch?: string;
  twitter: string;
  link?: string;
  title: string;
  avatar: string;
}

export const Card = ({
  name,
  twitter,
  title,
  avatar,
  twitch,
}: Props): JSX.Element => {
  const cld = useCloud();
  const myImage = cld.image("sample");
  return (
    <Box
      w="sm"
      borderWidth="2px"
      borderRadius="lg"
      bg="gray.700"
      overflow="hidden"
      marginBottom="2em"
    >
      <AdvancedImage as={Image} cldImg={myImage} w="full" />
      <Box p={4}>
        <Heading>{name}</Heading>
        <Text color="gray.500">{title}</Text>
        <HStack w="100%">
          {twitter !== null && (
            <HStack>
              <Icon as={FiTwitter} />
              <Text as={"a"} href={twitter}>
                {name}
              </Text>
            </HStack>
          )}
          {twitch !== null && (
            <HStack>
              <Icon as={FiTwitch} />
              <Text as={"a"} href={twitch}>
                {name}
              </Text>
            </HStack>
          )}
        </HStack>
      </Box>
    </Box>
  );
};
