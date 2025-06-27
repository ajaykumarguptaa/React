import React,{useState} from 'react'
import LiftingUpE from './LiftingUpE'
import LiftingUpStateD from './LiftingUpStateD'
import { User } from '../Loop_in_Jsx/User'


const AppLift = () => {
   const[user,setUser]=useState('')
  return (
    <div>
     <LiftingUpE setuser={setUser}/>
     <LiftingUpStateD user={user}/>
    </div>
  )
}

export default AppLift