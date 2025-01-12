# Xander's Starter Project

This is a starter project that skips all of the setup and configuration and lets you start building immediately.

### The project is set up with:
* Formatting [Prettier](https://prettier.io/)
* Type Safety [TypeScript](https://www.typescriptlang.org/) and [Zod](https://zod.dev/)
* Meta-framework [Next.js](https://nextjs.org/)
* Database [Supabase](https://supabase.io/)
* ORM [Drizzle](https://orm.drizzle.team//)
* Authentication [Clerk](https://clerk.dev/)
* Styling [Tailwind CSS](https://tailwindcss.com/)
* UI [shadcn/ui](https://ui.shadcn.com/)
* Deployment [Vercel](https://vercel.com/)

Each technology is modular can be removed or replaced with your preferred alternative.

## Getting Started

1. Clone the repository and create a new git repository
2. [Create a Supabase project](https://database.new) and get the transaction pooling URL by clicking "Connect" at the top
3. [Create a Clerk project](https://dashboard.clerk.com/apps/new)
4. Create a Vercel project by clicking Add New... > Project > Import Git Repository
5. Create a `.env.local` file in the root of the project
```dotenv
DATABASE_URL="<supabase_transaction_pooling_url>"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<public_key>
CLERK_SECRET_KEY=<secret_key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

6. Create a `.env.development.local` file in the root of the project
```dotenv
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:54322/postgres"
```

## Scaffolding with CRUD

This project is based on the idea that there are only 4 meaningful ways to interact with data:
Create, Read, Update, Delete (CRUD). \
In terms of full stack development, we begin in the backend and end in the frontend. \
Think of a thing in real life whose information you want to interact with (e.g. `Person`) 

Data Model:
1. In `db/schema.ts`, define the data model for the thing (e.g. `peopleTable`)
2. Still in `db/schema.ts`, refine the types of the columns and include error messages using Zod

Create:
1. In `db/person.ts`, define the Create operation for the thing (e.g. `createPerson`)
2. In `app/<thing>/Create<thing>Form.tsx`, create a form component to Create the thing
3. Use this component at `app/<thing>/create/page.tsx`
4. Use your form and watch it insert data into the database!

Read:
1. In `db/person.ts`, define the Read operation for many things (e.g. `readPeople`)
2. In `app/<thing>/columns.tsx`, define the columns of a table UI for the thing
3. In `app/<thing>/page.tsx` (mine is located at `app/SignedInHome.tsx`), create a table UI to see the things
4. Use your table and watch it read data from the database!

Update:
1. In `db/person.ts`, define the Read operation for one thing (e.g. `readPerson`)
2. In `db/person.ts`, define the Update operation for the thing (e.g. `updatePerson`)
3. In `app/<thing>/Update<thing>Form.tsx`, create a form component to Update the thing
4. Use this component at `app/<thing>/[id]/page.tsx`
5. Use your form and watch it update data in the database!

Delete:
1. In `db/person.ts`, define the Delete operation for the thing (e.g. `deletePerson`)
2. Create a delete button with an alert dialog in the table UI at `app/<thing>/columns.tsx`
3. Use your delete button and watch it delete data from the database! 

Celebrate! 🎉 \
Repeat!


## Next Steps (The Innovative Part)

Once you can perform CRUD operations through the UI, you have a fully functional web app! Congratulations! \
Moving forward, ask your users or yourself, "What's the most useful way to read the data?" Useful frontend features include:
* Robust Forms (File Upload, Segmented Controls, Sliders, etc.)
* Robust Tables (Pagination, Filtering, Sorting, etc.)
* Lists or Search Results
* Galleries or Grids
* Dashboards
* Charts
* Maps

Find the most effective way to read and understand your data. \
This is the creative part of web development. The sky is the limit! 
