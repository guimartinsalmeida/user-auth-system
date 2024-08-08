import { logoutUser } from "../../utils/logoutUser";
import { useNavigate } from "react-router-dom";
function User() {
const navigate = useNavigate()
  const handleClick = async () =>{
      await logoutUser()
      navigate('/login')
  }
  return (
    <div>
      Welcome to the User page

      <button onClick={()=> handleClick()}>Logout</button>
    </div>
  );
}

export default User;
