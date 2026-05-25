// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

export const addUser = async (primer_nombre, apellido, correo_electronico) => {
  const userPayload = {
    nombre: primer_nombre,
    apellido: apellido,
    correo: correo_electronico,
  };

  const response = await fetch(`${getServerURL()}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userPayload),
  });

  const data = await response.json();
  return data;
};
