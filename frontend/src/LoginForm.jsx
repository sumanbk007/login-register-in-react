import React, { useState } from "react";

function LoginForm() {
  const initialLoginData = {
    username: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialLoginData);

  function handleOnChange(event) {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function handleLogin(event){


    event.preventDefault()

   try {
     const response= await fetch("http://localhost:5151/login",{
method:"POST",
headers:{
  "Content-Type":"application/json",
},

body:JSON.stringify({username: loginData.username,
        password: loginData.password,})

    })

  const data= await response.json()
    alert(data.message)
    setLoginData(initialLoginData)

   } catch (error) {
    console.log(error)
   }

  }



  return (
    <div>
      <form className="loginForm" onSubmit={handleLogin} >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleOnChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleOnChange}
          required
        />
        <br />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
