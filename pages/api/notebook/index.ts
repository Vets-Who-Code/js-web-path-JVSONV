import { NextApiResponse } from "next";
import * as process from "node:process";
import * as path from "node:path";
import * as fsPromises from "node:fs/promises";

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
