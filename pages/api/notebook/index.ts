import {NextApiResponse } from "next";
import * as fsPromises from "fs/promises";

export default async function readHandler(res: NextApiResponse){
  try {
    const data = await fsPromises.readFile("/database.json", "utf8");
    const database = JSON.parse(data);
    res.status(200).json(database);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};