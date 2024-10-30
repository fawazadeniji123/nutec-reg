"use client";

import UserProfile from "@/components/shared/user-profile";
import { useUserContext } from "@/context/AuthContext";

export default function Home() {
  const { user } = useUserContext();
  return <UserProfile {...user} />;
}
