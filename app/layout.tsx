import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ClerkProvider from "./ClerkProvider";

export const metadata = {
  title: "Starter Project made by Xander",
  description: "The fastest way to build an app.",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <main className="h-screen w-screen flex flex-col gap-16 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-4 items-center font-semibold">
                    <Link href={"/"}>Xander's Starter Project</Link>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ThemeSwitcher />
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                </div>
              </nav>
              <div className={"w-full h-full p-5 flex justify-center"}>
                {children}
              </div>
            </main>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
