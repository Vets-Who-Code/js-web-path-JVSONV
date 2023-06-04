import { NextApiRequest, NextApiResponse } from "next";
import * as process from "node:process";
import * as path from "node:path";
import * as fsPromises from "node:fs/promises";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  const dbPath = path.join(process.cwd(), "database.json");
  // const dbPath = path.relative(process.cwd(), "/database.json");
  // const realPath = fsPromises.realpath("../../../../database.json");

  try {
    const { noteId } = req.query;
    const data = await fsPromises.readFile(dbPath, "utf8");
    const database = JSON.parse(data);

    const newData = database.filter(
      (note: { _id: string; note: string }) => note._id !== noteId
    );

    await fsPromises.writeFile(dbPath, JSON.stringify(newData));
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server delete error" });
  }
}
