import React from 'react'

export const DefaultProps = ({name="New user"}) => {
  // if some how props value is not pass the what will be the default prop show....
  return (
    <div>
      <h1>Hi,{name}</h1>
    </div>
  )
}
