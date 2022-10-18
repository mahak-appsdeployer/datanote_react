import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {

    const [credentials, setcredentials] = useState({email: "", password: ""})
    const history = useHistory()
    

const handlelogin = async (event) => {
event.preventDefault()
const response = await fetch('http://localhost:3002/api/user/loginuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
       },
    body: JSON.stringify({email: credentials.email,password: credentials.password}) 
     }
  )

  const responsejson = await response.json()
  console.log("login" + JSON.stringify(responsejson))
  if(responsejson.success)
  {
    console.log("logged in ")
 localStorage.setItem("token" , responsejson.authtoken)
 props.showAlert("Login successfully ", "Success")
 history.push('/')


   
  }
  else{
  props.showAlert(responsejson.errormessage, "danger")
  }

}
const onChange = (e) => {
    setcredentials({...credentials, [e.target.name]: e.target.value})
}

    return (
    <div className='container'>
        <form onSubmit={ (event) => {handlelogin(event)}}>
  <div className="mb-3 my-3">
    <h2 className='text-center'>Login</h2>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    
    <input type="email" className="form-control" name='email' value={credentials.email} id="email" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} id="password" onChange={onChange} minLength={5} required/>
  </div>

  <button type="submit" className="btn btn-dark" >Submit</button>
</form>
    </div>
  )
}

export default Login