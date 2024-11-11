"use server";

import dbConnect from "@/lib/db";

export default async function test() {
  const db = await dbConnect();
}
