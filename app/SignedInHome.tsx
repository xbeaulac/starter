import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/person/columns";
import { readPeople } from "@/db/actions";

export default async function SignedInHome() {
  const data = await readPeople();
  return (
    <div className="container max-w-5xl mx-auto">
      <div className={"flex justify-between items-center mb-4"}>
        <p className={"text-xl font-bold"}>People</p>
        <Button asChild>
          <Link href={"/person/create"}>Create person</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
