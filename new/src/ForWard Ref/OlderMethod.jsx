import React, { forwardRef, useRef, useState } from 'react'
import UserForwardRef from './userForwardRef';

const OlderMethod = () => {
  const OldRef=useRef(null);
    const data=()=>{
      OldRef.current.value=1000;
      OldRef.current.style.color="red";
    }

  
  return (
    <div>
        <UserForwardRef  ref={OldRef} />
        <button onClick={data}>submit</button>
    </div>
  )
}

export default forwardRef(OlderMethod);