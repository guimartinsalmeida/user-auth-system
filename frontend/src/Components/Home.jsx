import { useNavigate } from "react-router-dom"
function Home() {
  const navigate = useNavigate()
  return (
    <div>
        <h1>Working in progress ... 🛠️</h1>
        <br />
        <button onClick={()=> navigate('/login')} >Login</button>
        <button onClick={()=> navigate('/signup')} >Sign Up</button>
    </div>
  )
}

export default Home
