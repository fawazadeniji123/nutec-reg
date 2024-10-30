"use client"

import { useUserContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useUserContext();
  if (isAuthenticated) return redirect("/");

  return <>{children}</>;
}
