import React from "react";
import { render } from "react-dom";
import { SimplePieChart } from "./simplePieChart";

const styles = {
  textAlign: "center"
};


const App = () => (
  <div style={styles}>
    <SimplePieChart />
  </div>
);

render(<App />, document.getElementById("root"));
