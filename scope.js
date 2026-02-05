async function chiyaPasal() {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
chiyaPasal();
console.log("done");
