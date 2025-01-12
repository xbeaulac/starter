"use server";

import { z } from "zod";
import {
  peopleInsertSchema,
  peopleTable,
  peopleUpdateSchema,
} from "@/db/schema";
import { db } from "@/db/index";
import { auth as clerkAuth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

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
  redirect("/");
}

export async function readPeople() {
  const user = await auth();
  const people = db
    .select()
    .from(peopleTable)
    .where(eq(peopleTable.user_id, user.userId));
  console.log("Read people");
  return people;
}

export async function readPerson(id: number) {
  const user = await auth();
  const person = await db
    .select()
    .from(peopleTable)
    .where(and(eq(peopleTable.id, id), eq(peopleTable.user_id, user.userId)));
  console.log("Read person", id);
  return person[0];
}

export async function updatePerson(
  id: number,
  data: z.infer<typeof peopleUpdateSchema>,
) {
  const user = await auth();
  await db
    .update(peopleTable)
    .set({ ...data, birthday: data.birthday?.toISOString() })
    .where(and(eq(peopleTable.id, id), eq(peopleTable.user_id, user.userId)));
  console.log("Updated person", id);
  redirect("/");
}
