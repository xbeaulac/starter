import { integer, pgPolicy, pgTable, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { authenticatedRole } from "drizzle-orm/supabase";

export const peopleTable = pgTable(
  "people",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: text().notNull(),
    age: integer().notNull(),
    height: integer().notNull(),
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
