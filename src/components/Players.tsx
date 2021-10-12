import { Flex, Heading, VStack } from '@chakra-ui/react';

import { Card } from './Card';

export const Players = (): JSX.Element => {
  return (
    <VStack w="full">
      <Heading as="h2" size="xl">
        Découvrez nos maitres Kébabiers
      </Heading>
      <Flex justify="space-around" w="full" wrap="wrap">
        <Card
          image="orthou.png"
          name="STO_Ortou"
          meta="La Salade"
          twitter="https://twitter.com/STO_Ortou"
          twitch="https://www.twitch.tv/ortougatza"
        />
        <Card
          image="Zag.jpg"
          name="MrZagreus"
          meta="La Tomate"
          twitter="https://twitter.com/MrZagreus"
          twitch="https://www.twitch.tv/mrzagreus"
        />
        <Card
          image="astrus.jpg"
          name="STO_Astrus"
          meta="L'Oignon"
          twitter="https://twitter.com/STO_Astrus"
          twitch="https://www.twitch.tv/astrus9K"
        />
      </Flex>
    </VStack>
  );
};
