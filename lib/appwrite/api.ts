import { INewUser } from "@/types";
import { ID } from "node-appwrite";
import { account } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    // Call the Appwrite API to create a new user account
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (error) {
    console.error(error);
    return null;
  }
}
