export async function getUserFromDb(email: string, hash: string) {
  // Your logic here to get a user from a database
  // This is an example of what it could look like
  // const user = await db.collection("users").findOne({ email, hash });
  // return user;
  return { email, hash };
}