import { NextApiRequest, NextApiResponse } from "next";

export async function updateHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { noteId } = request.query;
  console.log(request.body);
  if (request.method === "PUT") {
    const res = await fetch(
      `https://crudcrud.com/api/abc4c16406da459c9ae40cddebc93af3/allNotes/${noteId}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(JSON.parse(request.body)),
      }
    );
    console.log("updated a Note");

    return response.json(res);
  }

  if (request.method === "DELETE") {
    const res = await fetch(
      `https://crudcrud.com/api/abc4c16406da459c9ae40cddebc93af3/allNotes/${noteId}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    );

    return response.json(res);
  }
}

export default updateHandler;
