import React,{useState} from 'react'
import GoogleLogin from "react-google-login"
function App() {
  const [name,setname]=useState("")
  const [photo,setphoto]=useState()

  function responseGoogle(response){
  setname(response.profileObj.name)
  setphoto(response.profileObj.imageUrl)
  console.log(response.profileObj)


  }
  return (
    <div>
      <GoogleLogin
      clientId="54479578786-0g39h4bugcjtp7i8i63j5uf3bjrds6bt.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      />
      <h1>{name}</h1>
      <img src={photo}></img>
    </div>
  )
}

export default App
