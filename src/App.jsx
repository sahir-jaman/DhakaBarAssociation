import { useState } from 'react'
import Header from './Components/Header'
import Dropdown from './Components/Dropdown'

function App() {
  const [count, setCount] = useState(0)
  // const menuList = ["dropdown 1","dropdown 1","dropdown 1","dropdown 1"]

  return (
    <>
      <div>
        <Header />
        {/* <Dropdown menuName={"My DropDown"} menuList={["dropdown 1","dropdown 1","dropdown 1","dropdown 1"]}/> */}
      </div>
    </>
  )
}

export default App
