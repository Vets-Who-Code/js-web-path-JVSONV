
import { NextApiResponse } from "next";

export default async function readHandler(res: NextApiResponse) {
  const fsPromises = require("fs/promises");

  const realPath = fsPromises.realpath("../../../../database.json");

  try {
    const data = await fsPromises.readFile(realPath, "utf8");
    const database = JSON.parse(data);
    res.status(200).json(database);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server read error" });
  }
}
