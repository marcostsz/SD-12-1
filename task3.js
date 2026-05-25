// Task 3: addUser(first_name, last_name, email)

const addUser = async (first_name, last_name, email) => {
  const payload = {
    nombre: first_name,
    apellido: last_name,
    correo: email,
  };
  try {
    const response = await fetch(getServerURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log("Fallo al agregar el usuario:", error);
  }
};
