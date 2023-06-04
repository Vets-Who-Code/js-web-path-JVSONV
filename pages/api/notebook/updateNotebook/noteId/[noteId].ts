import { NextApiRequest, NextApiResponse } from "next";
import * as process from "node:process";
import * as path from "node:path";
import * as fsPromises from "node:fs/promises";

export async function handler(
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
      (note: { _id: string}) => note._id === noteId
    );

    if (existingDataIndex !== -1) {
      database[existingDataIndex] = newData;
    } else {
      database.push(newData);
    }

    await fsPromises.writeFile(dbPath, JSON.stringify(database));
    res.status(200).json({ message: "Data created/updated successfully" });
  } catch (err) {
    console.error(err, "at api route");
    res.status(500).json({ error: "Server update error" });
  }
}

export default handler;