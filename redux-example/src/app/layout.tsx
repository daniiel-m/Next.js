"use client";
import "./globals.css";
import Provider from "@/redux/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="container mx-auto">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
