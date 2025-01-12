import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignedInHome from "@/app/SignedInHome";

export default async function Home() {
  return (
    <>
      <SignedIn>
        <SignedInHome />
      </SignedIn>
      <SignedOut>this is public</SignedOut>
    </>
  );
}
