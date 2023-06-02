import * as fsPromises from "fs/promises";
import { NextApiResponse } from "next";

export default async function readHandler(res: NextApiResponse) {
  try {
    const data = await fsPromises.readFile("/pages/database.json", "utf8");
    const database = JSON.parse(data);
    res.status(200).json(database);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server read error" });
  }
}
