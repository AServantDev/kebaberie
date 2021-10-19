import { Flex, Heading, VStack } from '@chakra-ui/react';

import { Card } from './Card';
import { usePlayer } from './context/PlayerContext';

export const Players = (): JSX.Element => {
  // const [players, setPlayers] = useState<Player[]>([]);
  const players = usePlayer();
  const displayPlayers = () => {
    return players?.map((player) => {
      return (
        <Card
          key={player.name}
          image={player.image}
          name={player.name}
          meta={player.meta}
          twitter={player.twitter}
          twitch={player.twitch}
        />
      );
    });
  };

  // useEffect(() => {
  //   axios.get<{ players: Player[] }>(baseUrl + "/players").then((response) => {
  //     setPlayers(response.data.players);
  //     console.log(response.data);
  //   });
  // }, []);

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
