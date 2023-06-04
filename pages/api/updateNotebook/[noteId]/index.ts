import { NextApiRequest, NextApiResponse } from "next";
import * as process from "process";
import * as path from "path";
import * as fsPromises from "fs/promises";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // const dbDir = path.join(process.cwd(), "database");
  const dbPath = path.join(process.cwd(), "database.json")
  // const dbPath = path.relative(process.cwd(), "/database.json" )
  // const realPath = fsPromises.realpath("../../../../database.json");

  try {
    const { noteId } = req.query;

    const data = await fsPromises.readFile(dbPath, "utf8");

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

    await fsPromises.writeFile(dbPath, JSON.stringify(database));
    res.status(200).json({ message: "Data created/updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server update error" });
  }
}
