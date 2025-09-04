import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './component/Login'
import Register from './component/Register'
import MerchantCard from './layout/MerchantCard'
import PaymentCard from './layout/PaymentCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PaymentCard/>
    </>
  )
}

export default App
