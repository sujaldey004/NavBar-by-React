import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NavBar></NavBar>
  )
}

function NavBar(){
  return <div className='box-border bg-green-500 p-1'>
  <div className='flex justify-between mx-10'>
    <div>LOGO</div>
    <div className='flex justify-around gap-5'>
      <a href="" className='bg-yellow-500 rounded-full px-2 border-2 border-black hover:scale-110'>Home</a>
      <a href="" className='bg-yellow-500 rounded-full px-2 border-2 border-black hover:scale-110'>Contact</a>
      <a href="" className='bg-yellow-500 rounded-full px-2 border-2 border-black hover:scale-110'>Blog</a>
      <a href="" className='bg-yellow-500 rounded-full px-2 border-2 border-black hover:scale-110'>About</a>
    </div>
  </div>
</div>
}

export default App
