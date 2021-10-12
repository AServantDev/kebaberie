import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';

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
  <ChakraProvider theme={theme}>
    <Router>
      <div>
        <Layout>
          <Route exact path="/players">
            <Players />
          </Route>
        </Layout>
      </div>
    </Router>
  </ChakraProvider>
);

ReactDom.render(<App />, document.getElementById("app"));
