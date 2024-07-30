const api = import.meta.env.VITE_API_URL;

export const registerUser = async (values) => {
  try {
    const response = await fetch(`${api}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      console.log(`Error status: ${response.status}`);
    }
    console.log(response)
    return response.json();
  } catch (error) {
    console.log(error);
  }
};