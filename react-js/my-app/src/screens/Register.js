import React from 'react'

const Register = () => {

    function handelRegister(e){
        e.preventDefault()
        console.log("hello warld")
    }

    let age=16
    const email="rakesh@gmail.com"
  return (

    <form>
        {age > 18 && email =="rakesh@mail.com" ?(
            <div>
            <input type='email'placeholder='Enter Email'></input>
             <button onClick={handelRegister}>Submit</button>
            </div>
        ) : (
            <p>you are a small kid come back you are 18 or above 18 you are not alegible to create email</p>
        )}
     
    </form>
  )
}

export default Register