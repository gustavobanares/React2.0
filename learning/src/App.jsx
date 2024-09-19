import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'

function App() {

  return (
    <>
      <h1>Avancando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
      <img src={City} alt="Cidade" />
      </div>
    </>
  )
}

export default App
