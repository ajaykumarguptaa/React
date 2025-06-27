import React from 'react'

let data=4;
const PureComponent = () => {
  data=5; // in pure component only two to change values inside the component or value come from props
  return (
    <div>
      
    </div>
  )
}

export default PureComponent