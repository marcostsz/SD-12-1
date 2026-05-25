// Task 4: delUser(number)

const delUser = async (id) => {
  const response = await fetch(`${getServerURL()}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
  return data;
};
