import { readPerson } from "@/db/actions/person";
import UpdatePersonForm from "@/app/person/UpdatePersonForm";

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const person = await readPerson(Number(id));
  return <UpdatePersonForm person={person} />;
}
