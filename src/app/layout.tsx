import "~/styles/globals.css";

import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { PostHogProvider } from "./_providers/posthog-provider";

export const metadata: Metadata = {
  title: "Drive Clone",
  description: "A simple drive clone",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <body>
            <PostHogProvider>{children}</PostHogProvider>
          </body>
        </html>
    </ClerkProvider>
  );
}
