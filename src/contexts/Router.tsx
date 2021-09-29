import React from "react";
import { Route } from "react-router-dom";
import RootLayout from "../layouts/Root";
import routes from "../routes";
import { createClient, Provider } from "urql";
import useAuth from "./auth";
import Loading from "../widgets/Loading";

const graphqlURL = import.meta.env?.VITE_GRAPHQL_URL as string;
const getClient = (token: string) => {
  return createClient({
    url: graphqlURL,
    fetchOptions: {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    },
  });
};

const Router: React.FC = () => {
  const { isLoggedIn, accessToken } = useAuth();

  return isLoggedIn ? (
    <Provider value={getClient(accessToken)}>
      <RootLayout>
        {routes.map((r) => (
          <Route {...r} key={r.path as string}></Route>
        ))}
      </RootLayout>
    </Provider>
  ) : (
    <Loading></Loading>
  );
};

export default Router;
