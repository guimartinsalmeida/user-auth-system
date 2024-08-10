import { useEffect, useState } from "react";
import { getUser } from "../../utils/getUser";
import { logoutUser } from "../../utils/logoutUser";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
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
  const handleClick = () =>{
    logoutUser()
    navigate('/')
  }
  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error} <br />Please login with an Admin account</p>;

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            Name: {user.name} Email: ({user.email})
            <br />
          </li>
        ))}
      </ul>
      <button onClick={()=> handleClick()}>Logout</button>
    </div>
  );
}

export default Admin;
