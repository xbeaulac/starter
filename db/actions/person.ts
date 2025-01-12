"use server";

import { z } from "zod";
import {
  peopleInsertSchema,
  peopleTable,
  peopleUpdateSchema,
} from "@/db/schema";
import { db } from "@/db";
import { auth as clerkAuth } from "@clerk/nextjs/server";
import { and, desc, eq, sql } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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
    .where(eq(peopleTable.user_id, user.userId))
    .orderBy(desc(peopleTable.updated_at));
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
    .set({
      ...data,
      birthday: data.birthday?.toISOString(),
      updated_at: sql`NOW()`,
    })
    .where(and(eq(peopleTable.id, id), eq(peopleTable.user_id, user.userId)));
  console.log("Updated person", id);
  redirect("/");
}

export async function deletePerson(id: number) {
  const user = await auth();
  await db
    .delete(peopleTable)
    .where(and(eq(peopleTable.id, id), eq(peopleTable.user_id, user.userId)));
  console.log("Deleted person", id);
  revalidatePath("/");
}
