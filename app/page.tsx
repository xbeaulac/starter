import { SignedIn, SignedOut } from "@clerk/nextjs";
import { columns } from "@/app/person/columns";
import { DataTable } from "@/app/person/data-table";
import { readPeople } from "@/db/actions";

export default async function Home() {
  const data = await readPeople();
  return (
    <>
      <SignedIn>
        <div className="container max-w-5xl mx-auto">
          <DataTable columns={columns} data={data} />
        </div>
      </SignedIn>
      <SignedOut>this is public</SignedOut>
    </>
  );
}
