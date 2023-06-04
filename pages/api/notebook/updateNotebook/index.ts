import { promises as fsPromises } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import * as path from "path";
import * as process from "process";

export async function updateHandler(req: NextApiRequest, res: NextApiResponse) {
  const dbPath = path.join(process.cwd(), "database.json");

  try {
    const sentNote = JSON.parse(req.body);

    const { _id } = sentNote;

    const data = await fsPromises.readFile(dbPath, {
      encoding: "utf8",
      flag: "r+",
    });

    const database = JSON.parse(data);

    const existingDataIndex = database.findIndex(
      (note: { _id: string }) => note._id === _id
    );

    if (existingDataIndex !== -1) {
      database[existingDataIndex] = sentNote;
    } else {
      database.push(sentNote);
    }

    await fsPromises.writeFile(dbPath, JSON.stringify(database), {
      encoding: "utf8",
      flag: "r+",
    });
    return res.status(200).json({ message: "Note Recorded" });
  } catch (err) {
    console.error(err, "at api route");
    res.status(500).json({ error: "Server update error" });
  }
}

export default updateHandler;
