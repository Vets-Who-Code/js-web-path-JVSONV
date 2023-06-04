import { NextApiResponse } from "next";
import * as process from "process";
import * as path from "path";
import * as fsPromises from "fs/promises";

export default async function readHandler(res: NextApiResponse) {

  const dbPath = path.join(process.cwd(), "database.json");

  // const realPath = fsPromises.realpath("../../../../database.json");

  try {
    const data = await fsPromises.readFile(dbPath, "utf8");
    const database = JSON.parse(data);
    res.status(200).json(database);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server read error" });
  }
}
