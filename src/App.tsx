import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/Root";
import routes from "./routes";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <RootLayout>
          <Switch>
            {routes.map((r) => (
              <Route {...r}></Route>
            ))}
          </Switch>
        </RootLayout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
