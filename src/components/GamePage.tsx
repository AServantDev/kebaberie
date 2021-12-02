import React from 'react';
import { useLocation } from 'react-router-dom';

import { Box, HStack, StackDivider, VStack } from '@chakra-ui/react';

import { usePlayer } from './context/PlayerContext';
import { GamerCard } from './GamerCard';

export const GamePage = (): JSX.Element => {
  const location = useLocation().pathname.split("/");
  const players = usePlayer();
  const displayPlayers = () => {
    return players
      .filter((player) => player.games.includes(location[2]))
      .map((filteredPlayer) => {
        console.log(filteredPlayer.twitter?.split("/")[3]);
        return (
          <GamerCard
            key={filteredPlayer.name}
            avatar={filteredPlayer.avatar}
            name={filteredPlayer.name}
            title={filteredPlayer.title}
            twitter={filteredPlayer.twitter}
            twitch={filteredPlayer.twitch}
            description={filteredPlayer.description}
          />
        );
      });
  };
  return (
    <VStack
      w="90%"
      align="stretch"
      divider={<StackDivider borderColor="gray.200" />}
    >
      {displayPlayers()}
    </VStack>
  );
};
