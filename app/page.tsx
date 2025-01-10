import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function Home() {
  return (
    <>
      <SignedIn>this is protected</SignedIn>
      <SignedOut>this is public</SignedOut>
    </>
  );
}
