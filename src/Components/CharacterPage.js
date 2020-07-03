import React, { Component } from "react";
import axios from "axios";

export default class CharacterPage extends Component {
  constructor() {
    super();
    this.state = {
      character: { character_name: "", character_id: null },
    };
  }

  componentDidMount() {
    axios.get(`/api/character/${this.props.match.params.id}`).then((res) => {
      this.setState({ character: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.character.character_name}</h1>
        <h2>{`Level ${this.state.character.character_level}`}</h2>
      </div>
    );
  }
}
