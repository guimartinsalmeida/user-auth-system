import { useEffect, useState } from "react";
import { getUser } from "../../utils/getUser";

function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUserData = async () => {
    const { data, error } = await getUser();

    if (error) {
      setError(error); 
    } else {
      setUsers(data.users)
    }
    setLoading(false)
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            Name: {user.name} Email: ({user.email})
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
