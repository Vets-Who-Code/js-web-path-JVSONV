
export const getAllFilms = async (character: {films: string[]}, id: number) => {
  const allFilms: Promise<unknown>[] = [];

  character.films.map(film => allFilms.push(getData(film, id)))

  return await Promise.all(allFilms);
}

const getData = async (endpoint: string, id: number) => {
  
  const result = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const res = await fetch(
        `https://swapi.dev/api/${endpoint}/${randomNum}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );

      if (!res.ok) {
        reject(res.ok);
      } else {
        resolve(res.json());
      }
    }, 1000);
  })
    .then(res => {
      const allFilms: Promise<unknown>[] = [];

      

    })
    .catch((result) => {
      throw Error(
        `OOOP's there seems to be something wrong! ${result.ok} Please check the console.`
      );
    });
  return result;
};

export default getData;
