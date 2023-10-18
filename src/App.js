import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch } from "react-router-dom"; // Rout
import { Hstyle  , Cont} from "./localStyle";
export const metadata = {
  title: "Rizzq Store",
  description: "Chic brands is here",
  authors: [
    { name: "Rizzq team", url: "Rizzq-vercel.app" },
  ],
  keywords: "Store, Brands, Chic clothes",
};

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Router></Router>
      <Switch>
        <Cont
          style={{ height: "100vh", display: "grid", "align-items": "center" }}
        >
          <Hstyle
            style={{
              color: "rgb(94, 94, 94)",
              "text-align": "center",
            }}
          >
          🌟 Welcome to Rizzq store - Your Ultimate Destination for Trendsetting Branded Clothing! 🌟 {" "}
            <span style={{ color: "rgb(76, 227, 160)" }}>Rizzq store </span>{" "}
             is under construction ..
          </Hstyle>
        </Cont>
      </Switch>
    </Router>
  );
}

export default App;
