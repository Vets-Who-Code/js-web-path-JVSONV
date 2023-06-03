import * as fsPromises from "fs/promises";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Metadata } from "next";

import { useRouter } from "next/router";
import AllNotes from "../../components/VetsWhoCode_Components/AllNotes";
import Counter from "../../components/VetsWhoCode_Components/Counter";
import Main from "../../components/VetsWhoCode_Components/Main";
import StarWars from "../../components/VetsWhoCode_Components/StarWarsFetch";

export const metadata: Metadata = {
  description: "Jason Vallery's VetsWhoCode Work",
  title: "Jason Vallery's VetsWhoCode Work",
};

type NoteObj = {
  _id: string;
  note: string;
};

export const getDBpath = () => {
  const process = require("process");
  const path = require("path");
  const dbPath = path.join(process.cwd(), "database.json");
  return dbPath;
};

export const getServerSideProps: GetServerSideProps<{
  notes: NoteObj[];
}> = async () => {
  const fsPromises = require("fs/promises");
  const process = require("process");
  const path = require("path");

  console.log(process.cwd());
  const dbPath = path.join(process.cwd(), "database.json");

  // const realPath = await fsPromises.realpath("./database.json")
  const data = await fsPromises.readFile("database.json", "utf8");
  const database = JSON.parse(data);
  return {
    props: {
      notes: database,
    },
  };
};

export default function VetsWhoCode({
  notes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const refreshData = () => {
    if (router.isReady) {
      router.replace(router.asPath);
    }
  };

  return (
    <>
      <Main>
        <Counter />
        <StarWars />
      </Main>
      <AllNotes
        notebook={notes}
        onUpdateHandler={refreshData}
      />
    </>
  );
}
