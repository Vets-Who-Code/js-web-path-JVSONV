import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userID: string } }
) {
  const { userID } = params;
  console.log(userID, "params");
  const res = await fetch(
    `https://crudcrud.com/api/3896f732e2704e53b98afe358b83002d/allNotebooks/${userID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return NextResponse.json({ data });
}

export async function PUT(
  request: Request,
  { params }: { params: { userID: string } }
) {
  const { body } = await request.json();
  const { userID } = params;
  const res = await fetch(
    `https://crudcrud.com/api/3896f732e2704e53b98afe358b83002d/allNotebooks/${userID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body }),
    }
  );

  const data = await res.json();
  return NextResponse.json({ data });
}
