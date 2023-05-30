import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Metadata } from "next";

import { useRouter } from "next/router";
import AllNotes from "../../components/VetsWhoCode_Components/AllNotes";
import Main from "../../components/VetsWhoCode_Components/Main";

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
  const res = await fetch(
    `https://crudcrud.com/api/abc4c16406da459c9ae40cddebc93af3/allNotes`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("rerendered");
  const data = await res.json();

  return {
    props: {
      notes: data,
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
      <Main />
      <AllNotes
        notebook={notes}
        onUpdateHandler={refreshData}
      />
    </>
  );
}
