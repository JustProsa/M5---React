import React, { Component } from "react";
import MyNav from "./components/navbar/Navigation";
import LatestRelease from "./components/release/LatestRelease";
import ReservationForm from "./components/reservationForm/ReservationForm";
import LifeCycleExample from "./components/lifeCycleExample/LifeCycleExample";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      books: [],
      isLoading: false,
      error: null,
    };
  }

  async getBooks() {
    try {
      this.setState({ isLoading: true });
      const res = await fetch("https://epibooks.onrender.com/");
      const data = await res.json();
      this.setState({ books: data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);
    return (
      <div>
        <MyNav />
        {/* <ReservationForm /> */}
        {!this.state.isLoading && this.state.books && (
          <LatestRelease books={this.state.books} />
        )}
        {/* <LifeCycleExample /> */}
      </div>
    );
  }
}

export default App;
