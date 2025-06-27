import React from 'react'
import UserReact19  from './userForwardRef';
import { useRef } from 'react';

const React9MethodFordRef = () => {
    const OldRef=useRef(null);
      const data=()=>{
        OldRef.current.value=1000;
        OldRef.current.style.color="red";
      }
  
    
    return (
      <div>
         <UserReact19 ref={OldRef}/>
          <button onClick={data}>submit</button>
      </div>
    )
}

export default React9MethodFordRef