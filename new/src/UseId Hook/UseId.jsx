import React, { useId } from 'react'

const UseId = () => {
  // evertime they generate unique user id  when ever we  use
  const name=useId();
  return (
    <div>
      <label htmlFor={name}>Enter Name: </label>
      <input type="text" id={name} />
    </div>
  )
}

export default UseId