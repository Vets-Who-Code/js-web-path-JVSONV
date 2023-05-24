import { v4 as uuidv4 } from "uuid";
export type Films = {
  uuid: string;
  title: string;
};

const randomNum = Math.floor(Math.random() * (83 - 1) + 1);

export const getCharacter = async () => {
  
}

const getAllMovieData = async (filmsList: string[]) => {
  return await Promise.all(filmsList.map((film) => getFilmData(film)));
};

const getFilmData = async (film: string) => {
  const filmData = await fetch(film, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });

  const movieData: Films = await filmData.json();

  movieData.uuid = uuidv4();

  return movieData;
};
