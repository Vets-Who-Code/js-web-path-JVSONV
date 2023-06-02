import * as fsPromises from "fs/promises";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Metadata } from "next";

import { useRouter } from "next/router";
import AllNotes from "../../components/VetsWhoCode_Components/AllNotes";
import Main from "../../components/VetsWhoCode_Components/Main";
import Counter from "../../components/VetsWhoCode_Components/Counter";
import StarWars from "../../components/VetsWhoCode_Components/StarWarsFetch";

export const metadata: Metadata = {
  description: "Jason Vallery's VetsWhoCode Work",
  title: "Jason Vallery's VetsWhoCode Work",
};

type NoteObj = {
  _id: string;
  note: string;
};

export const getServerSideProps: GetServerSideProps<{
  notes: NoteObj[];
}> = async () => {
  // const data = await fsPromises.readFile("/pages/database.json", "utf8");
  const database: NoteObj[] = [];
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
