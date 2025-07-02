import React from 'react'

export const UserLet = ({EventPass,name,getname}) => {
  return (
    <div>
      <button onClick={EventPass}>user</button>
      <button onClick={()=>{getname(name)}}>user get name</button>

    </div>
  )
}
