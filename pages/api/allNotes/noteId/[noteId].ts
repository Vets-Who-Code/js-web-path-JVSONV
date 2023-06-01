import { NextApiRequest, NextApiResponse } from "next";

export async function updateHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { noteId } = request.query;
  console.log(request.body);
  if (request.method === "PUT") {
    const res = await fetch(
      `https://crudcrud.com/api/a780185ec0464c27adf81c0ae4b22900/allNotes/${noteId}`,
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
      `https://crudcrud.com/api/a780185ec0464c27adf81c0ae4b22900/allNotes/${noteId}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    );

    return response.json(res);
  }
}

export default updateHandler;
