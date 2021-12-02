import React from 'react';
import { FiTwitch, FiTwitter } from 'react-icons/fi';

import { HStack, Icon, Image, Spacer, Text, VStack } from '@chakra-ui/react';

interface Props {
  name: string;
  link?: string;
  title: string;
  description: string;
  avatar?: string;
  twitch?: string;
  twitter?: string;
}

export const GamerCard = ({
  name,
  link,
  title,
  description,
  avatar,
  twitch,
  twitter,
}: Props): JSX.Element => {
  const twitchName = twitch?.split("/")[3];
  const twitterName = twitter?.split("/")[3];
  return (
    <HStack w="100%" fontSize={{ base: "12px", md: "15px", lg: "26px" }}>
      <Image align="left" borderRadius="full" boxSize="150px" src="/Zag.jpg" />
      <VStack mb="0.5" align="left">
        <HStack>
          <Text as="u">{name}</Text>

          {twitter !== null && (
            <HStack>
              <Icon color="skyblue " as={FiTwitter} />
              <Text _hover={{ color: "teal" }} as={"a"} href={twitter}>
                {twitterName}
              </Text>
            </HStack>
          )}
          {twitch !== null && (
            <HStack>
              <Icon color="purple" as={FiTwitch} />
              <Text _hover={{ color: "teal" }} as={"a"} href={twitch}>
                {twitchName}
              </Text>
            </HStack>
          )}
        </HStack>
        <Text color="gray.500">{title}</Text>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
};
