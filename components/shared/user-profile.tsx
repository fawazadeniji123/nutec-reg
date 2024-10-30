"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserContext } from "@/context/AuthContext";

function ProfileSkeleton() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pb-4 sm:pb-6">
        <Skeleton className="h-24 w-24 sm:h-20 sm:w-20 rounded-full" />
        <div className="space-y-2 w-full sm:w-auto">
          <Skeleton className="h-8 w-3/4 sm:w-64" />
          <Skeleton className="h-4 w-full sm:w-48" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Skeleton className="h-6 w-48 mb-2" />
            <Separator className="my-2" />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-32" />
                </div>
              ))}
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function UserProfile() {
  const { user, isLoading } = useUserContext();
  const { userId, email, name, college, department, matricNumber, imageUrl } =
    user;

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pb-4 sm:pb-6">
        <Avatar className="h-24 w-24 sm:h-20 sm:w-20">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <CardTitle className="text-2xl sm:text-3xl">{name}</CardTitle>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            {email}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Academic Information</h3>
            <Separator className="my-2" />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
              <div className="space-y-1">
                <dt className="font-medium text-muted-foreground">College</dt>
                <dd>{college}</dd>
              </div>
              <div className="space-y-1">
                <dt className="font-medium text-muted-foreground">
                  Department
                </dt>
                <dd>{department}</dd>
              </div>
              <div className="space-y-1">
                <dt className="font-medium text-muted-foreground">
                  Matric Number
                </dt>
                <dd>{matricNumber}</dd>
              </div>
              <div className="space-y-1">
                <dt className="font-medium text-muted-foreground">User ID</dt>
                <dd>{userId}</dd>
              </div>
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
