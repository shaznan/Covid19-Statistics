import "./App.css";
import { Chart, Cards, CountryPicker } from "./Components";
import { fetchData } from "./api";

// dependancies:
//  npm install --save @material-ui/core
// npm install --save axios react-chartjs-2 react-countup classnames

import React, { Component } from "react";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
