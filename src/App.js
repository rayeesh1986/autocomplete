import React, { Component, Fragment } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search/Search";
import Listing from "./Search/Listing";

class App extends Component {
  state = {
    searchdata: "",
    users: []
  };

  onChangeData = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    console.log("componentDidMount");
  }

  async componentDidUpdate() {}

  onKeyUp = async e => {
    const { searchdata } = this.state;
    if (searchdata !== "") {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${searchdata}`
      );

      const users = await res.data.items;
      this.setState({ users });
    } else {
      this.setState({ users: [] });
    }
  };

  render() {
    const { searchdata, users } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <Search
                onChange={this.onChangeData}
                searchdata={searchdata}
                onKeyUp={this.onKeyUp}
              />
              <Listing users={users} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
