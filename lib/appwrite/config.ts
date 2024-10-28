import { Client, Databases, Storage, Account, Avatars } from "appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("671d151f00201e04d448"); // Your project ID

export const database = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);
export const avatar = new Avatars(client);

