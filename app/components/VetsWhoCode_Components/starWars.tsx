"use client";
import { useState } from "react";

type StarWarsCharacterObj = {
  name: string;
  birthYear: string;
  films: {title: string}[];
};

// const getFilm = async (film) => {
//   const filmData = await fetch(film, {
//     method: "GET",
//     head: { "Content-type": "application/json" },
//   });

//   const movie = await filmData.json();
//   return movie;
// };

// const apiCallButton = document.querySelector(".call-out");
// const dataContainer = document.querySelector(".data-container");

// const callAPIButton = () => {
//   apiCallButton.disabled = true;
//   const randomNum = Math.floor(Math.random() * (83 - 1) + 1);
//   if (document.querySelector(".card")) {
//     document.querySelector(".card").remove();
//   }
//   dataContainer.append(
//     makeElement("p", "Loading Star Wars character info...", "loading")
//   );
//   new Promise((r) => setTimeout(r, 1000))
//     .then(() =>
//       fetch(`https://swapi.dev/api/people/${randomNum}`, {
//         method: "GET",
//         head: { "Content-type": "application/json" },
//       })
//     )
//     .then((data) => {
//       if (data.status === 404) throw new Error(data.status);
//       return data.json();
//     })
//     .then((characterData) => {
//       const filmData = async (characterData) => {
//         const allPromises = [];
//         characterData.films.forEach((film) => {
//           allPromises.push(getFilm(film));
//         });
//         const allFilms = await Promise.all(allPromises).catch((err) => {});
//         const createCharacterElement = (character, filmArr) => {
//           const characterCard = makeElement("div", "", "card");
//           const dataElement = makeCharacterInfo(character, filmArr);
//           dataContainer.append(characterCard);
//           characterCard.append(...dataElement);
//           apiCallButton.disabled = false;
//         };
//         createCharacterElement(characterData, allFilms);
//       };
//       filmData(characterData);
//     })
//     .catch((r) => {
//       dataContainer.append(
//         makeElement("p", `An error has occured: ${r} `, "error")
//       );
//     })
//     .finally(() => {
//       document.querySelector(".loading").remove();
//     });
// });

const starWars = (props: StarWarsCharacterObj) => {
  const [gettingData, setGettingData] = useState(false);

  const standardCharacterDisplay = (
    <>
      <h1 className="subject">{props.name}</h1>
      <p className="subject">Birth Year : {props.birthYear}</p>
    </>
  );

  return (
    <div>
      <h1>Get a random Star Wars Character</h1>
      <h2>Click below!</h2>
      {gettingData && standardCharacterDisplay}
      {gettingData && (
        <ul className="film-list">
          {props.films.map((film) => {
            return <li className="movie">{film.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default starWars;
