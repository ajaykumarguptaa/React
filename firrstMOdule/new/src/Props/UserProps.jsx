export function UserProps({name,age}){
  
  // console.log(data)
  return(
   <div>
    {/* <h3>{data.name}</h3> */}
    <h3>Name:{name}</h3>
    <h3>Age:{age}</h3>
   </div>

  )
}



export const PropsUser = ({object}) => {
  return (
    <div>
      <h2>{object.name}</h2>
      <h2>{object.age}</h2>
      <h2>{object.branch}</h2>
    </div>
  )
}



export const ArrayProps = ({name}) => {
  return (
    <div>
     <h3>{name[0]}</h3>
    </div>
  )
}

export const ArrayProps2=({name})=>{
return(
  <div>
    <h2>{name}</h2>
  </div>
)
}
