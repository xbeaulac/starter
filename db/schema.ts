import {
  date,
  integer,
  pgPolicy,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { authenticatedRole } from "drizzle-orm/supabase";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

// 1. Drizzle Schema for a Person
export const peopleTable = pgTable(
  "people",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
    name: text().notNull(),
    birthday: date().notNull(),
    user_id: text()
      .notNull()
      .default(sql`requesting_user_id()`),
  },
  (table) => [
    pgPolicy("Enable read access for authenticated users only", {
      as: "permissive",
      to: authenticatedRole,
      for: "select",
      using: sql`requesting_user_id() = user_id`,
    }),
    pgPolicy("Enable insert for authenticated users only", {
      as: "permissive",
      to: authenticatedRole,
      for: "insert",
      withCheck: sql`requesting_user_id() = user_id`,
    }),
  ],
);

// 2. Zod refinements and error messages for the Person schema
export const peopleSelectSchema = createSelectSchema(peopleTable);
export const peopleInsertSchema = createInsertSchema(peopleTable, {
  name: () => z.string().nonempty({ message: "Name is required." }),
  birthday: () => z.date({ required_error: "Birthday is required." }),
});
export const peopleUpdateSchema = createUpdateSchema(peopleTable, {
  name: () => z.string().nonempty({ message: "Name is required." }),
  birthday: () => z.date({ required_error: "Birthday is required." }),
});
