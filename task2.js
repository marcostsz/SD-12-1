// Task 2: listUsers()

import { getServerURL } from "./task1.js";

export async function listUsers() {
  try {
    const response = await fetch(`${getServerURL()}/users`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
