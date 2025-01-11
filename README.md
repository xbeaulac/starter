Things to set up this project:

1. `npx create-next-app -e with-supabase --use-pnpm`
2. `cd <project-name>`
3. Create a supabase project or use an existing one
4. Rename `.env.example` to `.env.local` and fill in your Supabase credentials
5. `pnpm dev` make sure it's working
6. Create GitHub repo and push init to git
7. Deploy to Vercel

Things to do in this project:

1. Add clerk to project with [this](https://clerk.com/docs/quickstarts/nextjs)
2. Make dedicated pages for sign up and sign in with [this](https://clerk.com/docs/references/nextjs/custom-signup-signin-pages)
3. Remove supabase auth stuff (pretty much all the code)
4. Connect Clerk to Supabase with [this](https://supabase.com/partners/integrations/clerk)
5. Add drizzle to project with [this](https://orm.drizzle.team/docs/get-started/supabase-new), used transaction pool url
6. Create table of people (name, height, age)
7. Create a table to display the people
8. Add a form to add people
9. Add a form to edit people
10. Add a button to delete people
