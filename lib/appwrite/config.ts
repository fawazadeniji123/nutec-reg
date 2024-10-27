import { Client, Databases, Storage, Account, Avatars } from "node-appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID!) // Your project ID
  .setKey(process.env.APPWRITE_API_KEY!); // Your secret API key

export const database = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);
export const avatar = new Avatars(client);

