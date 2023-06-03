import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fsPromises = require("fs/promises");

  const realPath = fsPromises.realpath("../../../../database.json");

  try {
    const { noteId } = req.query;
    const data = await fsPromises.readFile(realPath, "utf8");
    const database = JSON.parse(data);

    const newData = database.filter((note: { _id: string; note: string }) => note._id !== noteId);

    await fsPromises.writeFile(
      realPath,
      JSON.stringify(newData)
    );
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server delete error" });
  }
};

