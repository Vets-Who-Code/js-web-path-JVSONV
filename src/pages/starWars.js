const makeElement = (tagname, innerText, classes) => {
  const element = document.createElement(tagname);
  element.classList = classes;
  element.innerText = innerText;
  return element;
};

const makeFilmList = (filmsArr) => {
  const ulTag = document.createElement("ul");
  ulTag.innerText = "Films";
  filmsArr.forEach((film) => {
    ulTag.append(makeElement("li", film.title, "movie"));
  });
  return ulTag;
};

const makeCharacterInfo = (character, filmArr) => {
  return [
    makeElement("h1", character.name, "subject"),
    makeElement("p", `Birth Year : ${character.birth_year}`, "subject"),
    makeFilmList(filmArr),
  ];
};

const getFilm = async (film) => {
  const filmData = await fetch(film, {
    method: "GET",
    head: { "Content-type": "application/json" },
  });

  const movie = await filmData.json();
  return movie;
};

const apiCallButton = document.querySelector(".call-out");
const dataContainer = document.querySelector(".data-container");

apiCallButton.addEventListener("click", () => {
  apiCallButton.disabled = true;
  const randomNum = Math.floor(Math.random() * (83 - 1) + 1);
  if (document.querySelector(".card")) {
    document.querySelector(".card").remove();
  }
  dataContainer.append(
    makeElement("p", "Loading Star Wars character info...", "loading")
  );
  new Promise((r) => setTimeout(r, 1000))
    .then(() =>
      fetch(`https://swapi.dev/api/people/${randomNum}`, {
        method: "GET",
        head: { "Content-type": "application/json" },
      })
    )
    .then((data) => {
      if (data.status === 404) throw new Error(data.status);
      return data.json();
    })
    .then((characterData) => {
      const filmData = async (characterData) => {
        const allPromises = [];
        characterData.films.forEach((film) => {
          allPromises.push(getFilm(film));
        });
        const allFilms = await Promise.all(allPromises).catch((err) => {});
        const createCharacterElement = (character, filmArr) => {
          const characterCard = makeElement("div", "", "card");
          const dataElement = makeCharacterInfo(character, filmArr);
          dataContainer.append(characterCard);
          characterCard.append(...dataElement);
          apiCallButton.disabled = false;
        };
        createCharacterElement(characterData, allFilms);
      };
      filmData(characterData);
    })
    .catch((r) => {
      dataContainer.append(
        makeElement("p", `An error has occured: ${r} `, "error")
      );
    })
    .finally(() => {
      document.querySelector(".loading").remove();
    });
});
