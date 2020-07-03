import React, { Component } from "react";
import Party from "./Party";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      classInput: "Barbarian",
      levelInput: 1,
    };
  }

  handleName = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  handleClass = (event) => {
    this.setState({ classInput: event.target.value });
  };

  handleLevel = (event) => {
    this.setState({ levelInput: event.target.value });
  };

  addCharacter = () => {
    const { nameInput, classInput, levelInput } = this.state;
    axios.post("/api/character", {
      name: nameInput,
      charClass: classInput,
      level: levelInput,
    });
  };

  render() {
    return (
      <div className="App">
        <section className="App-header">
          Dungeons and Dragons Party Maker
          <h1>Add a Character</h1>
          <div className="char-creator">
            <div>
              <p>Character Name</p>
              <input onChange={this.handleName} />
            </div>
            <div>
              <p>Character Class</p>
              <select defaultValue={"Barbarian"} onChange={this.handleClass}>
                <option>Barbarian</option>
                <option>Bard</option>
                <option>Cleric</option>
                <option>Druid</option>
                <option>Fighter</option>
                <option>Monk</option>
                <option>Paladin</option>
                <option>Ranger</option>
                <option>Rogue</option>
                <option>Sorcerer</option>
                <option>Warlock</option>
                <option>Wizard</option>
              </select>
            </div>
            <div>
              <p>Character Level</p>
              <input
                defaultValue={1}
                type="number"
                min={1}
                max={20}
                onChange={this.handleLevel}
              />
            </div>
          </div>
          <button onClick={this.addCharacter}>Add Character</button>
        </section>
        <section>
          <Party />
        </section>
      </div>
    );
  }
}
