import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface UserProfileProps {
  userId: string;
  email: string;
  name: string;
  college: string;
  department: string;
  matricNumber: string;
  imageUrl: string;
}

export default function Component({
  userId = "123456",
  email = "johndoe@example.com",
  name = "John Doe",
  college = "Sample College",
  department = "Computer Science",
  matricNumber = "CS2023001",
  imageUrl = "https://github.com/shadcn.png",
}: UserProfileProps) {
  return (
    <div className="container mx-auto p-4">
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
              <h3 className="text-lg font-semibold mb-2">
                Academic Information
              </h3>
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
    </div>
  );
}
