import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Img } from './components/Img'
import FirstComp from './components/FirstComp'
import { NewExport } from './components/NewExport'
import JS, { New } from './components/JS'
import ClickEvent from './components/ClickEvent'
import { State } from './components/State'
import { HideAndShow } from './Toggle_Hide_And_Show/HideAndShow'

function App() {
  const [count, setCount] = useState(0)
  let Props1={
    name:'hello',
    age:20,
 
  }

  return (
    <>
  <h1>hello</h1>
  {/* <Img/> */}
  {/* <FirstComp user={Props1}/>  */}
  {/* <NewExport/>
  <JS/> 
  <New/> */}
  {/* <ClickEvent/> */}
  <State/>
  <HideAndShow/>
    </>
  )
}

export default App
