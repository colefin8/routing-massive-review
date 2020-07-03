import React from "react";
import { withRouter, Link } from "react-router-dom";

function Character(props) {
  console.log(props);
  const {
    character_id,
    character_class,
    character_name,
    character_level,
  } = props.charInfo;
  return (
    <Link to={`/character/${character_id}`}>
      <h2>{character_name}</h2>
      <p>{`Level ${character_level} ${character_class}`}</p>
    </Link>
  );
}

export default withRouter(Character);
