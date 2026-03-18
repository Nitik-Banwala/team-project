import { useState } from 'react'
import './index.css'
import Hero from './components/Hero'
import HeroSlider from './components/HeroSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-red-300'>
        <Hero />
        <HeroSlider />
        </h1>
    </>
  )
}

export default App
