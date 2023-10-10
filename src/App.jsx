import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [UserData, setUserData] = useState([])
  

  return (
    <>

   
      <div className="main">
        <div className="container">
          <div className="NavBar">
            <hi className="Fitness-Pro">Fitness Pro</hi>

</div>
          <input type="Date" className="name" placeholder='Enter Name Here' />
          <br/>
          <input type="text" className="weight"  placeholder='Enter Weight Here'/>
          <br/>
          <input type="text" className="height"  placeholder='Enter Height Here'/>
          <br/>
          <input type="text" className="Goal-height"  placeholder='Enter The Wight That You Have To Gain '/>
          <br/>

          <button className="submitBtn" type='submit'>Submit</button>
          </div>
      </div>
        
    </>
  )
}

export default App
