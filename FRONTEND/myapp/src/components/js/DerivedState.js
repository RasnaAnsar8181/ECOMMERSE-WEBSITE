import React from 'react'


function DerivedState(){
    const users = [
        {name:'Rasna',age:46},
        {name:'Ansar',age:54},
        {name:'Salman',age:24},
        {name:'Adnan',age:20},
        {name:'Fidha',age:16}
    ]
    const userCount = users.length
    const avgAge = users.reduce((accum,currelem)=>accum+currelem.age,0)/userCount
  return (
    <div>
      <h1>USERS LIST</h1>
      <br/>
      {users.map((item) => 
         <ol>{item.name} - {item.age} years old</ol>
      )}
      <p><h3>TOTAL USER</h3>{userCount}</p>
      <p><h3>AVERAGE AGE</h3>{avgAge}</p>
    </div>
  )
}

export default DerivedState
