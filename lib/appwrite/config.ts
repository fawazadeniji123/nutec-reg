import { Client, Databases, Storage, Account, Avatars } from "appwrite";

export const appwriteConfig = {
  url: process.env.APPWRITE_URL!,
  projectId: process.env.APPWRITE_PROJECT_ID!,
  databaseId: process.env.APPWRITE_DATABASE_ID!,
  usersCollectionId: process.env.APPWRITE_USERS_COLLECTION_ID!,
}

export const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(appwriteConfig.projectId); // Your project ID

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);
export const avatars = new Avatars(client);

