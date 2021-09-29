import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./contexts/auth";
import Router from "./contexts/Router";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Router></Router>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
