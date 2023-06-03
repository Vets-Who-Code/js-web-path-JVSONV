
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const fsPromises = require("fs/promises");

  const realPath = fsPromises.realpath("../../../../database.json");

  try {
    const { noteId } = req.query;

    const data = await fsPromises.readFile(realPath, "utf8");

    const database = JSON.parse(data);

    const newData = {
      _id: noteId,
      note: req.body,
    };
    const existingDataIndex = database.findIndex(
      (note: { _id: string; note: string }) => note._id === noteId
    );

    if (existingDataIndex !== -1) {
      database[existingDataIndex] = newData;
    } else {
      database.push(newData);
    }

    await fsPromises.writeFile(
      realPath,
      JSON.stringify(database)
    );
    res.status(200).json({ message: "Data created/updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server update error" });
  }
}
