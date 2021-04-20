import styles from "./App.module.css";
import { Chart, Cards, CountryPicker } from "./Components";
import { fetchData } from "./api";
import coverImage from "./images/cov19_image.png";

// dependancies:
//  npm install --save @material-ui/core
// npm install --save axios react-chartjs-2 react-countup classnames
//npm install --save chart.js

import React, { Component } from "react";
import { Container } from "@material-ui/core";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    console.log(data);

    return (
      <div>
        <img className={styles.image} src={coverImage} alt="cov-19 cover" />
        <Cards data={data} className={Container} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
