import { NextApiRequest, NextApiResponse } from "next";
import { promises as fsPromises } from "fs";
import * as path from "path";
import * as process from "process";

export async function updateHandler(req: NextApiRequest, res: NextApiResponse) {
  // const dbDir = path.join(process.cwd(), "database");
  const dbPath = path.join(process.cwd(), "database.json");
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
      (note: { _id: string }) => note._id === noteId
    );

    if (existingDataIndex !== -1) {
      database[existingDataIndex] = newData;
    } else {
      database.push(newData);
    }

    const fileContents = await fsPromises.writeFile(dbPath, JSON.stringify(database));
    res.status(200).json({message: "Note Recorded"});
  } catch (err) {
    console.error(err, "at api route");
    res.status(500).json({ error: "Server update error" });
  }
}

export default updateHandler;
