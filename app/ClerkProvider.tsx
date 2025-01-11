"use client";

import { ClerkProvider as CP } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export default function ClerkProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [mounted, setMounted] = useState(false);
  const { resolvedTheme: theme } = useTheme();

  // // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  //   console.log(theme);
  // }, []);
  //
  // if (!mounted) {
  //   return null;
  // }

  return (
    <CP appearance={{ baseTheme: theme === "dark" ? dark : undefined }}>
      {children}
    </CP>
  );
}
