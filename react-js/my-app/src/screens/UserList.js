import React from 'react'

const UserList = () => {

    let data=[
        {
            name:"Tanish",
            email:"tanish@gmail.com",
            rollno:13
        },
        {
            name:"Rakesh",
            email:"rakesh@gmail.com",
            rollno:12
        },
        {
            name:"Ritu",
            email:"ritu@gmail.com",
            rollno:14
        },
        {
            name:"Jinu",
            email:"jinu@gmail.com",
            rollno:15
        },
        {
            name:"Sonali",
            email:"snali@gmail.com",
            rollno:19
        },
        {
            name:"Pritee",
            email:"pritee@gmail.com",
            rollno:20
        },
    ]

    return(
    <div>
      {data.map(({name,email,rollno})=>{
        return(
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{rollno}</p>
    </div>
      )
})}
      </div>
  )
}

export default UserList