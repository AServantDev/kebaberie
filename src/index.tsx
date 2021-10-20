import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';

import { PlayersProvider } from './components/context/PlayerContext';
import { GamePage } from './components/GamePage';
import { Layout } from './components/Layout';
import { Players } from './components/Players';

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: { body: "Inter" },
});

const App = () => (
  <PlayersProvider>
    <ChakraProvider theme={theme}>
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route path="/players">
                <Players />
              </Route>
              <Route path={["/game/smash", "/game/mh"]}>
                <GamePage />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </ChakraProvider>
  </PlayersProvider>
);

ReactDom.render(<App />, document.getElementById("app"));
