import { Flex, Heading, VStack } from '@chakra-ui/react';

import { Card } from './Card';
import { usePlayer } from './context/PlayerContext';

export const Players = (): JSX.Element => {
  const players = usePlayer();
  const displayPlayers = () => {
    return players?.map((player) => {
      return (
        <Card
          key={player.name}
          avatar={player.avatar}
          name={player.name}
          title={player.title}
          twitter={player.twitter}
          twitch={player.twitch}
        />
      );
    });
  };

  return (
    <VStack w="full">
      <Heading as="h2" size="xl">
        Découvrez nos maitres Kébabiers
      </Heading>
      <Flex justify="space-around" w="full" wrap="wrap">
        {displayPlayers()}
      </Flex>
    </VStack>
  );
};
