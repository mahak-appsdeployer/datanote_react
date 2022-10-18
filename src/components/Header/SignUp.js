import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {
    const [credentials, setcredentials] = useState({email: "", password: "", name: "", confirmpassword: ""})
    const history = useHistory()

    const handlesignup = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:3002/api/user/auth/createuser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
               },
            body: JSON.stringify({name: credentials.name, email: credentials.email,password: credentials.password}) 
             }
          )
        
          const responsejson = await response.json()
          console.log("login" + JSON.stringify(responsejson))

          if(responsejson.success)
          {
            console.log("register successful ")
        
         history.push('/login')
         props.showAlert("Account created successfully ", "Success")
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
        <form onSubmit={ (event) => {handlesignup(event)}}>
  <div className="mb-3 my-3">
    <h2 className='text-center'>SignUp</h2>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Full Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} id="name" onChange={onChange}/>
  </div>
    <label htmlFor="email" className="form-label">Email address</label>
    
    <input type="email" className="form-control" name='email' value={credentials.email} id="email" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} id="password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='confirmpassword'  id="confirmpassword" onChange={onChange} minLength={5} required/>
  </div>

  <button type="submit" className="btn btn-dark" >Submit</button>
</form>
    </div>
  )
}

export default SignUp