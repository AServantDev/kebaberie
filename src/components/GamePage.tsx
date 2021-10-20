import React from 'react';
import { useLocation } from 'react-router-dom';

import { HStack, VStack } from '@chakra-ui/react';

import { Card } from './Card';
import { usePlayer } from './context/PlayerContext';

export const GamePage = (): JSX.Element => {
  const location = useLocation().pathname.split("/");
  console.log(location);
  const players = usePlayer();
  const displayPlayers = () => {
    return players
      .filter((player) => player.games.includes(location[2]))
      .map((filteredPlayer) => {
        console.log(filteredPlayer.games);

        return (
          <HStack>
            <Card
              key={filteredPlayer.name}
              image={filteredPlayer.image}
              name={filteredPlayer.name}
              meta={filteredPlayer.meta}
              twitter={filteredPlayer.twitter}
              twitch={filteredPlayer.twitch}
            />
          </HStack>
        );
      });
  };
  return <VStack>{displayPlayers()}</VStack>;
};
