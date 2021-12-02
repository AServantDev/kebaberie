import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { CloudProvider } from './components/context/CloudinaryContext';
import { PlayersProvider } from './components/context/PlayerContext';
import { GamePage } from './components/GamePage';
import { Layout } from './components/Layout';
import { Players } from './components/Players';

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  config,
  fonts: { body: "Inter" },
  breakpoints,
});

const App = () => (
  <CloudProvider>
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
  </CloudProvider>
);

ReactDom.render(<App />, document.getElementById("app"));
