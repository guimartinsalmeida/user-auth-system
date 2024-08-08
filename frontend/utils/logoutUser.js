
const api = import.meta.env.VITE_API_URL;
export const logoutUser = async () =>{
try {
  const response = await fetch(`${api}/logout`, {
    method: 'POST',
    credentials:'include'
  })
  const result = await response.json()
  if(result.ok){
    console.log('credentials removed successfuly')
  }
} catch (error) {
  console.log(error)
}
}