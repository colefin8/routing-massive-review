import React, { Component } from "react";
import Character from "./Character";
import axios from "axios";

export default class Party extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/party")
      .then((res) => {
        this.setState({ characters: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <section>
        {this.state.characters.map((e, i) => {
          return <Character key={i} info={e} />;
        })}
      </section>
    );
  }
}
