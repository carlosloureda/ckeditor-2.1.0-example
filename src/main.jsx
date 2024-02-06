import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./index.css";
// Importa tus componentes
import { View } from "./components/View";
import { Edit } from "./components/Edit";

// Define la aplicación con rutas usando BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/view" />
        </Route>
        <Route path="/view" component={View} />
        <Route path="/edit" component={Edit} />
        {/* Si RedirectToView es un componente que solo realiza una redirección,
            puedes simplemente usar <Redirect to="/view" /> como se muestra arriba. */}
      </Switch>
    </BrowserRouter>
  );
}

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
