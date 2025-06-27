// import React, { forwardRef } from 'react'

// const UserForwardRef = (props,ref) => {
//   return (
//     <div>
//      <input ref={ref} type="text"  />
//      <h1></h1>
//     </div>
//   )
// }
// export default forwardRef(UserForwardRef)

// reactt 19 method 
const UserReact19 = (props) => {
  return (
    <div>
      <div>
     <input ref={props.ref} type="text"  />
     <h1></h1>
    </div>
    </div>
  )
}
export default UserReact19

