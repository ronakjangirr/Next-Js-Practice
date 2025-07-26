import { NextRequest, NextResponse } from "next/server";

type QueryParams = {
  role?: string;
  page: number;
};

// Simulate user data
const mockUsers = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie", role: "user" },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const roleParam: string | null = searchParams.get("role");
  const pageParam: string | null = searchParams.get("page");

  const query: QueryParams = {
    role: roleParam ?? undefined,
    page: pageParam ? parseInt(pageParam, 10) : 1,
  };

  // Filter users by role if specified
  const filteredUsers = query.role
    ? mockUsers.filter((user) => user.role === query.role)
    : mockUsers;

  return NextResponse.json({
    message: "Success",
    users: filteredUsers,
  });
}
