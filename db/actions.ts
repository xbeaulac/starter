"use server";

import { z } from "zod";
import { peopleInsertSchema, peopleTable } from "@/db/schema";
import { db } from "@/db/index";
import { auth as clerkAuth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

async function auth() {
  const user = await clerkAuth();
  if (!user.userId) throw new Error("Unauthorized");
  return user;
}

export async function createPerson(data: z.infer<typeof peopleInsertSchema>) {
  const user = await auth();
  await db.insert(peopleTable).values({
    ...data,
    birthday: data.birthday.toISOString(),
    user_id: user.userId,
  });
  console.log("Created person", data);
}

export async function readPeople() {
  const user = await auth();
  const people = db
    .select()
    .from(peopleTable)
    .where(eq(peopleTable.user_id, user.userId));
  console.log("Read people", people);
  return people;
}
