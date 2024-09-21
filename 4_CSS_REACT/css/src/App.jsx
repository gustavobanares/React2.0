import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from 'react';
import Title from './components/Title';

function App() {

  const n = 15
  const [name] = useState('Gustavo')

  const redTitle = false

  return (
    <div className='App'>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo e do App.jsx</p>
      {/* inline CSS */}
      <p style={{color:'magenta', padding:'25px', borderTop:'2px solid red'}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color:'magenta', padding:'25px', borderTop:'2px solid red'}}>Este elemento foi estilizado de forma inline</p>
      {/* CSS inline dinamico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color:'pink'})}>CSS dinamico</h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color:'pink'})}>CSS dinamico</h2>
      <h2 style={name === 'Gustavo' ? ({color: 'green', backgroundColor: '#000'}) : null}>Teste nome</h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>
      {/* CSS modules */}
      <Title />
      <h2 className={'my_title'}>Testando</h2>
    </div>
  )
}

export default App
