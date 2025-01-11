"use server";

import { z } from "zod";
import { peopleInsertSchema, peopleTable } from "@/db/schema";
import { db } from "@/db/index";
import { auth as clerkAuth } from "@clerk/nextjs/server";

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
  console.log("Person created", data);
}
