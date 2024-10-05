import React, { useContext, useState } from 'react'
import { AppContext } from '../context/App_Context'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const {login} = useContext(AppContext)
  const [gmail, setgmail] = useState("")
  const [password,setpassword] = useState("")

  const loginhandler = async (e)=>{
    e.preventDefault();
    const result = await login(gmail,password)

    toast(result.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });

    // console.log(result.data);
    setTimeout(() => {
      navigate('/')
    }, 1500);
    
  }
  return (
    <>
    <ToastContainer/>
      <div className="container my-3 p-5" style={{ width: "600px", border: '2px solid yellow', borderRadius: "10px" }}>
        <h2 className='text-center'>Login</h2>
        <form onSubmit={loginhandler} style={{
          width: "420px",
          margin: "auto"
        }}
          className='my-3'
        >
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email : </label>
            <input value={gmail} onChange={(e)=>setgmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password : </label>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" required/>
          </div>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">Login</button>
          </div>


        </form>
      </div>
    </>
  )
}

export default Login
