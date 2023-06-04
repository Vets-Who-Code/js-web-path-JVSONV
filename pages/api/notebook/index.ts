import { NextApiResponse } from "next";
import { getDBpath } from "../../vetsWhoCode";

export default async function readHandler(res: NextApiResponse) {
  const fsPromises = require("fs/promises");
  const process = require("process");
  const path = require("path");

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
