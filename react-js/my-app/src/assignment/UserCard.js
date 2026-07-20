import React from 'react'

const UserCard = ({name,age,city}) => {
    const style={
        card:{
            border:"1px solid #ccc",
            borderRadius:"10px",
            padding:"15px",
            width:"250px",
            margin:"10px",
            backgroundColor:"blue"
        
        }
    }
  return (
    <div style={style.card}>
      <h2>User Details</h2>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>City:{city}</p>
    </div>
  )
}

export default UserCard