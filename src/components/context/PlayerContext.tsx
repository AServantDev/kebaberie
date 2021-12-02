import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const baseUrl = "http://127.0.0.1:3333";

const PlayerContext = createContext<Player[]>([]);

interface Player {
  name: string;
  twitch?: string;
  twitter: string;
  link?: string;
  title: string;
  avatar: string;
  description: string;
  key: string;
  players: [];
  games: string[];
  id: number;
}

type WithChildren<T = {}> = T & { children: JSX.Element };

const PlayersProvider = ({ children }: WithChildren) => {
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    axios.get<{ players: Player[] }>(baseUrl + "/players").then((response) => {
      setPlayers(response.data.players);
    });
  }, []);

  return (
    <PlayerContext.Provider value={players}>{children};</PlayerContext.Provider>
  );
};

const usePlayer = () => useContext(PlayerContext);

export { PlayersProvider, usePlayer };
