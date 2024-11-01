"use client";

import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieFallback = localStorage.getItem("cookieFallback");
  if (cookieFallback && cookieFallback !== "[]") {
    return redirect("/");
  }

  return <>{children}</>;
}
