import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import UserDetails from './components/UserDetails'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  // const name = 'Peter'
  const [userName] = useState('Guilherme')

  const cars = [
    {id: 1, brand: 'Ferrari', color:'Vermelha', newCar:true, km: 0},
    {id: 2, brand: 'Lamborghini', color:'Roxa', newCar:true, km: 0},
    {id: 3, brand: 'Porsche', color:'Azul', newCar:false, km: 7000}
  ]

  function showMessage(){
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  const users = [
    {id:1, name:'Gustavo', job:'Programador', age:20},
    {id:2, name:'Guilherme', job:'Cozinheiro', age:32},
    {id:3, name:'Bruno', job:'Estudante', age:17},
  ]

  
  return (
    <>
      <h1>Avancando em React</h1>
      <h2>Secao 3</h2>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
      <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand='VW' km={100000} color='Azul' newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand='Ford' color='Vermelha' km={0} newCar={true} />
      <CarDetails brand='Fiat' color='Branco' km={5000} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) =>(
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} 
        />
      ))}
      {/* fragment */}
      <Fragment propFragment='teste' />
      {/* children */}
      <Container myValue='testing'>
        <p>Este e o conteudo</p>
      </Container>
      <Container myValue='testing 2'>
        <h5>Testando o container</h5>
      </Container>
      {/* executar funcao */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* desafio */}
      {users.map((user) =>(
        <UserDetails 
        key={user.id} 
        name={user.name} 
        job={user.job} 
        age={user.age}  
        />
      ))}
    </>
  )
}

export default App
