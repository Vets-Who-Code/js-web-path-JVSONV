import { NextApiRequest, NextApiResponse } from "next";

async function handler(request: NextApiRequest, response: NextApiResponse) {
  console.log(request.method);
  if (request.method === "GET") {
    const res = await fetch(
      `https://crudcrud.com/api/b58d803c5edd40389b9eb138048116d3/allNotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("get got");

    const data = await res.json();
    return response.json({ data });
  }

  if (request.method === "POST") {
    const note = request.body;

    console.log(note);

    const res = await fetch(
      `https://crudcrud.com/api/b58d803c5edd40389b9eb138048116d3/allNotes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.parse(note)),
      }
    );

    return response.json(res);
  }

  if (request.method === "DELETE") {
    const res = await fetch(
      `https://crudcrud.com/api/b58d803c5edd40389b9eb138048116d3/allNotes`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    );

    return response.json(res);
  }
}

export default handler;
