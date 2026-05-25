// Task 2: listUsers()

const listUsers = async () => {
  try {
    const response = await fetch(getServerURL());
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
