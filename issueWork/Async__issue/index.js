const randomNum = () => Math.floor(Math.random() * (83 - 1) + 1);

async function getStarWarsCharacter() {
  const data = await fetch(`https://swapi.dev/api/people/${randomNum()}`, {
    method: "GET",
    head: { "Content-type": "application/json" },
  });
  const character = await data.json();
  return character;
}

const getFilm = async (film) => {
  const filmData = await fetch(film, {
    method: "GET",
    head: { "Content-type": "application/json" },
  });

  const movie = await filmData.json();
  return movie;
};

const showData = () => {
  getStarWarsCharacter().then((character) => {
    console.log(character);
    dataContainer.innerHTML = `<div class="character-name">Name:${
      character.name
    }</div><div>Height:${
      character.height
    }</div><ul class="character-films">${character.films
      .map((film) => {
        return `<li>${film}</li>`;
      })
      .join("")}</ul>`;
  });
};

const apiCallButton = document.querySelector(".call-out");
const dataContainer = document.querySelector(".data-container");
apiCallButton.addEventListener("click", () => {
  showData();
});
