import { SignedIn, SignedOut } from "@clerk/nextjs";
import { columns } from "@/app/person/columns";
import { DataTable } from "@/app/person/data-table";
import { readPeople } from "@/db/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const data = await readPeople();
  return (
    <>
      <SignedIn>
        <div className="container max-w-5xl mx-auto">
          <div className={"flex justify-between items-center mb-4"}>
            <p className={"text-xl font-bold"}>People</p>
            <Button asChild>
              <Link href={"/person/create"}>Create person</Link>
            </Button>
          </div>
          <DataTable columns={columns} data={data} />
        </div>
      </SignedIn>
      <SignedOut>this is public</SignedOut>
    </>
  );
}
