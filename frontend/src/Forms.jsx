import React, { useState } from "react";


function Forms() {

    const initialFormData={

    username:'',
    password:'',
    email:'',



}

const [formData, setFormData]= useState(initialFormData)

function handleChange(event){

    const{name, value}=event.target

    setFormData({
        ...formData,
        [name]:value
    })
}


function handleSubmit(event){

    event.preventDefault()
  const {username, password,email}=formData

  function validateUsername(username){

    const usernameRegex= 
    /^[A-Za-z0-9]{3,20}$/
    return (usernameRegex.test(username))
  }


  function validatePassword(password){
const passwordRegex= 
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&])[a-zA-Z\d!@#$%&]{8,}$/

return (passwordRegex.test(password))

  }

let isvalid=true

if(!validateUsername(username)){
alert("username must be greatet than 3 characters")
isvalid=false

}

if(!validatePassword(password)){

    alert("Password must be greater than 8 characters.")
    isvalid = false;
}

if(isvalid){

    console.log(formData)
    sendFormData()
    setFormData(initialFormData)
    // alert("You have sucessfully registered")


}



async function sendFormData(){
try {
    
    const response= await fetch("http://localhost:5151/register",{
        method:"POST",
headers:{
    "Contnet-type":"application/json",

},

body:JSON.stringify({username,password,email})

    })

    const data= await response.json()
    alert(data.message)

} catch (error) {

    console.log(error)
    
}
}



 
}

  return (
    <div>

        <form id="myForm" onSubmit={handleSubmit}>

            <input type="text"  name="username" placeholder="Username"  value={formData.username} onChange={handleChange}/>
            <input type="password"  name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
            <input type="email"  name="email" placeholder="Email"  value={formData.email} onChange={handleChange}  required/>

<button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Forms