"use client";

import { ClerkProvider as CP } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export default function ClerkProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { resolvedTheme } = useTheme();

  return (
    <CP appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}>
      {children}
    </CP>
  );
}
