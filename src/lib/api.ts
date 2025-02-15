export async function fetchData() {
  const response = await fetch("http://localhost:3000/api/");
  if (!response.ok) {
    throw new Error("Ошибка при загрузке данных");
  }
  return response.json();
}
