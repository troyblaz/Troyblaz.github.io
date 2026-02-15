import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TROYBLAZ - Legal",
  description: "TROYBLAZ Terms of Service and Privacy Policy",
  other: {
    "tiktok-developers-site-verification": "DqmCGevwfdIOmdOxQ2cMn9pkruDZE4tF",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
