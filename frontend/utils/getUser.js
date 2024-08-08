const api = import.meta.env.VITE_API_URL;

export const getUser = async () => {
  try {
    const response = await fetch(`${api}/users`, {
      credentials: 'include',
    });
    const data = await response.json();
    if (response.ok) {
      return { data }; 
    } else {
      return { error: data.message }; 
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return { error: 'An unexpected error occurred' };
  }
};
