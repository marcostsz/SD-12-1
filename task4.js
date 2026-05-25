// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

export const delUser = async (id) => {
  const response = await fetch(`${getServerURL()}/users/${id}`, {
    method: "delete",
  });

  const data = await response.json();
  console.log(data);
  return data;
};
