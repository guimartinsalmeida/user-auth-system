const api = import.meta.env.VITE_API_URL;

export const loginUser = async (values) => {

try {
  const response = await fetch(`${api}/auth/login`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  })
  if(!response.ok){
    console.log(response.error)
  }
  return response.json()
} catch (error) {
  console.log(error)
}
}