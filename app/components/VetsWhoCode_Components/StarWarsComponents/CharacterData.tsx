import React from "react";
import { Character } from "../starWarsFetch";
import classes from "../../../CSS/starWars.module.css"

type Props = {
  character: Character;
};

const CharacterData = (props: Props) => {
  return (
    <div className={classes.character}>
      <h3 className={classes.character__name}>{props.character.name}</h3>
      <div className={classes.description}>
        <p className={classes.description__subject}>
          <strong className={classes.subject}>Gender :</strong>
          <span className={classes.subject__detail}> {props.character.gender}</span>
        </p>
        <p className={classes.description__subject}>
          <strong className={classes.subject}>Birth Year: </strong>
          <span className={classes.subject__detail}> {props.character.birth_year}</span>
        </p>
        <p className={classes.description__subject}>
          <strong className={classes.subject}>Height : </strong>
          <span className={classes.subject__detail}> {props.character.height}</span>
        </p>
        <p className={classes.description__subject}>
          <strong className={classes.subject}>Hair Color : </strong>
          <span className={classes.subject__detail}> {props.character.hair_color}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterData;
