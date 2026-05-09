import { useState } from 'react'
function App() {
  const [showPassword, setShowPassword] = useState("false");
  const [password,setPassword] = useState("");
  return(
    <div>
      <h1>Show/Hide Password</h1>
      <input type={showPassword ? "text" : "password"} value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;