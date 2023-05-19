import React from "react";
import { Character } from "../starWarsFetch";

type Props = {
  character: Character;
};

const CharacterData = (props: Props) => {
  return (
    <div className="character">
      <h3 className="starwars__name">{props.character.name}</h3>
      <div className="starwars__description">
        <p className="description__subject">
          <strong>Gender :</strong>
          <span className="subject__detail">{props.character.gender}</span>
        </p>
        <p className="description__subject">
          <strong>Birth Year: </strong>
          <span className="subject__detail">{props.character.birth_year}</span>
        </p>
        <p className="description__subject">
          <strong>Home World: </strong>
          <span className="subject__detail">{props.character.homeworld}</span>
        </p>
        <p className="description__subject">
          <strong>Height: </strong>
          <span className="subject__detail">{props.character.height}</span>
        </p>
        <p className="description__subject">
          <strong>Hair Color: </strong>
          <span className="subject__detail">{props.character.hair_color}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterData;
