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
2. [Create a Supabase project](https://database.new). Log in and enter the name of the project and a password for the
   database.
   Select your region. Create the project. This will take up to a few minutes to complete. You can continue in the
   meantime.
3. Create a `.env.local` file in the root of the project. Copy and paste the following:

```dotenv
DATABASE_URL="<supabase_transaction_pooling_url>"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<public_key>
CLERK_SECRET_KEY=<secret_key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

4. [Create a Clerk project](https://dashboard.clerk.com/apps/new). Log in and enter the name of the project and select
   the auth providers you want to use. Create the project. It will take you to a quickstart guide. You don't need to
   follow the guide, just copy `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from the guide and replace
   them in your `.env.local` file.


5. Back in the Supabase dashboard, your project should be ready. Get the transaction pooling URL by clicking "Connect"
   at the top of the page.
   Copy the URL and paste it into the `DATABASE_URL` field in the `.env.local` file.
   ![Screenshot 2025-01-12 at 2.45.20 PM.png](Screenshot%202025-01-12%20at%202.45.20%E2%80%AFPM.png)


6. [Create a Vercel project](https://vercel.com/) by logging in and clicking Add New... > Project. Under "Import Git
   Repository," click "Import" on the repository you created earlier. Copy everything in your `.env.local` file and
   paste it in the "Environment Variables" section. Click "Deploy" to deploy the project. Wait for the project to
   deploy.
   ![screenshot2.jpg](screenshot2.jpg)

7. In your Vercel project dashboard, go to the "Settings" tab and click "Environment Variables." Click the ellipsis next
   to the "DATABASE_URL" variable and select "Edit." Make sure the variable only affects the Production environment.
   ![screenshot3.png](screenshot3.png)

8. Create a `.env.development.local` file in the root of the project. Copy and paste the following:

```dotenv
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:54322/postgres"
```

9. In your Vercel project Environment Variables Settings, copy and paste the
   `DATABASE_URL` variable from your new `.env.development.local` file. Make sure the variable only affects
   the Development and Preview environments.
   ![screenshot4.png](screenshot4.png)
10. This project uses pnpm as its package manager. [Install pnpm](https://pnpm.io/installation) if you don't have
    installed already. Run `pnpm i` to install the dependencies.
11. Ensure you have [Docker Desktop](https://docs.docker.com/get-started/get-docker/) running. Run `pnpm db:local` to
    start the local Supabase database. This will create a new Docker container with the database instance and will take
    a few
    minutes to initialize.
12. Run `pnpm db:push` to push the database schema to the local database. This will create the tables in the database.
13. Run `pnpm dev` to start the development server. Open
    [http://localhost:3000](http://localhost:3000) to view the project in your browser. It's connected to the local
    database you are running.

You can now start building your project. The project is set up with a basic CRUD example. You can find the example
in the `db/schema/person.ts` file and the `app/person` folder.

## Project Structure

```plaintext
app - routes and pages for frontend
components - custom reuseable ui components
   ui - shadcn/ui reusable ui components
db - backend
   schema - database schema (table definitions)
   actions - functions to interact with the database
lib - utility functions
supabase - supabase local development configuration
```

## Scaffolding with CRUD

This project is based on the idea that there are only 4 meaningful ways to interact with data:
Create, Read, Update, Delete (CRUD). \
In terms of full stack development, we begin in the backend and end in the frontend. \
Think of a thing in real life whose information you want to interact with (e.g. `Person`)

Data Model:

1. In `db/schema/person.ts`, define the data model for the thing (e.g. `peopleTable`)
2. Still in `db/schema/person.ts`, refine the types of the columns and include error messages using Zod

Create:

1. In `db/actions/person.ts`, define the Create operation for the thing (e.g. `createPerson`)
2. In `app/<thing>/Create<thing>Form.tsx`, create a form component to Create the thing
3. Use this component at `app/<thing>/create/page.tsx`
4. Use your form and watch it insert data into the database!

Read:

1. In `db/actions/person.ts`, define the Read operation for many things (e.g. `readPeople`)
2. In `app/<thing>/columns.tsx`, define the columns of a table UI for the thing
3. In `app/<thing>/page.tsx` (mine is located at `app/SignedInHome.tsx`), create a table UI to see the things
4. Use your table and watch it read data from the database!

Update:

1. In `db/actions/person.ts`, define the Read operation for one thing (e.g. `readPerson`)
2. In `db/actions/person.ts`, define the Update operation for the thing (e.g. `updatePerson`)
3. In `app/<thing>/Update<thing>Form.tsx`, create a form component to Update the thing
4. Use this component at `app/<thing>/[id]/page.tsx`
5. Use your form and watch it update data in the database!

Delete:

1. In `db/actions/person.ts`, define the Delete operation for the thing (e.g. `deletePerson`)
2. Create a delete button with an alert dialog in the table UI at `app/<thing>/columns.tsx`
3. Use your delete button and watch it delete data from the database!

Celebrate! 🎉 \
Repeat!

## Next Steps (The Innovative Part)

Once you can perform CRUD operations through the UI, you have a fully functional web app! Congratulations! \
Moving forward, ask your users or yourself, "What's the most useful way to read the data?" Useful frontend features
include:

* Robust Forms (File Upload, Segmented Controls, Sliders, etc.)
* Robust Tables (Pagination, Filtering, Sorting, etc.)
* Lists or Search Results
* Galleries or Grids
* Dashboards
* Charts
* Maps

Find the most effective way to read and understand your data. \
This is the creative part of web development. The sky is the limit! 
