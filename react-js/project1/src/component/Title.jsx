import React from 'react'

const Title = ({name,contactNumber,schoolName,collageName,rollNumber}) => {
  return (
    <>
      {/* <h1 style={{fontSize:50, color:'blue'}}>{name}</h1> */}
      {/* <h1>{props.demo}</h1>
     <h1>{props.test}</h1> */}
   

    <div>
      <div>
        <div>
          <h1 style={{fontSize:50, color:'blue'}}>{name}</h1>
        </div>
      </div>
    </div>

      <h1 style={{fontSize:50, color:'blue'}}>{contactNumber}</h1>
      <h1 style={{fontSize:50, color:'blue'}}>{schoolName}</h1>
      <h1 style={{fontSize:50, color:'blue'}}>{collageName}</h1>
      <h1 style={{fontSize:50, color:'blue'}}>{rollNumber}</h1>
    </>
  )
}

export default Title