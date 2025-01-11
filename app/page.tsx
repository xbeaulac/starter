import { SignedIn, SignedOut } from "@clerk/nextjs";
import CreatePersonForm from "@/app/CreatePersonForm";

export default async function Home() {
  return (
    <>
      <SignedIn>
        <CreatePersonForm />
      </SignedIn>
      <SignedOut>this is public</SignedOut>
    </>
  );
}
