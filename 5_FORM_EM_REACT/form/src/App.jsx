import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{name:'Gustavo', email:'gustavo@gmail.com', bio:'Sou programador', role:'admin'}}/>
    </>
  )
}

export default App
