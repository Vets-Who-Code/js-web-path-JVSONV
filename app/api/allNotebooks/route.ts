import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  console.log(req, "here");

  const initialNotebook = {
    userNotes: {},
  };

  const res = await fetch(
    `https://crudcrud.com/api/3896f732e2704e53b98afe358b83002d/allNotebooks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(initialNotebook),
    }
  );
  
  const data = await res.json();
  return NextResponse.json({data});
}

