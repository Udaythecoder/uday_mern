
import React from 'react'

const Child = ({name,age,isActive,food,Contact}) => {
  return (
    <div>
        <h1>Name:{name} </h1>
        <h2>Age:{age} </h2>  
        <h3>Isactive:{isActive? "Active":"Not Active"}</h3> 
        <br />
        <hr />
        <h1> fav food</h1>
        <ul>
          {food.map((value,index)=>(
            <li Key={index}>{value}</li>
          ))}
        </ul> 
        <h1> Contact details</h1>
        <p>Mobile no:{Contact.mobile}</p>
        <p>Email : {Contact.emial}</p>
        <br />
        <hr />
    </div>
  )
}

export default Child