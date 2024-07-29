import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const token = import.meta.env.VITE_ACCESS_TOKEN;
  const api = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/users`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setUsers(result.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [api, token]);

console.log(users)
  return (
    <>
      <div>
        <h1>Working in progress ... 🛠️</h1>
        <br />
        <h2 >Users list: </h2>
        <ul>
          {users.map((user) => (
            <div key={user._id}>
              <li className='text-left' >name: {user.name}</li>
              <li className='text-left' > email: {user.email}</li>
              <li className='text-left'> User Role: {user.isAdmin ? ('Admin') : ('User')}</li>
              <br />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
