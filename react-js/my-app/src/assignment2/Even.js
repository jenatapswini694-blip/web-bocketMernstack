import React from 'react'

const Even = (props) => {
     let count=0
     let sum=0
  return(
    <div>
        <h3>even numbers:</h3>
        {props.number.map((num,index)=>{
            if(num%2===0){
                count++
                sum=sum+num
                return <p key={index}>{num}</p>
            }
        })}
        <h3>total even number:{count}</h3>
        <h3>sum of total even numnber:{sum}</h3>
    </div>
   )
}

export default Even