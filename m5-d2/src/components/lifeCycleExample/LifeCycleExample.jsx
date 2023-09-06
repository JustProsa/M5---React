import React, { Component } from "react";

export class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
      errors: null,
    };
  }

  async getProducts() {
    const data = await fetch("https://epibooks.onrender.com/");
    const response = data.json();
    this.setState({ products: response });
  }

  componentDidMount() {
    // Il componente sta per essere montato
    this.getProducts();
  }

  componentDidUpdate() {
    // Il componente (stati o props) sta per essere aggiornato
  }

  componentWillUnmount() {
    // Il componente sta per essere smontato
  }

  render() {
    console.log(this.state.products);
    return <div></div>;
  }
}

export default LifeCycleExample;
