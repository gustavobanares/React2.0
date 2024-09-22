import './App.css'
import CarDetails from './components/CarDetails'

function App() {

const cars = [
  {id: 1, brand:'Porsche', color:'Green', km:10000, newCar:false},
  {id: 2, brand:'Ferrari', color:'Black', km:0, newCar:true},
  {id: 3, brand:'Lamborghini', color:'Purple', km:0, newCar:true},
]


  return (
    <div className='App'>
      <h1>Details for Car</h1>
      <div className='car-container'>
      {cars.map((car) =>(
        <CarDetails  
        brand={car.brand} 
        color={car.color} 
        km={car.km}
        newCar={car.newCar}
        />
      ))}
      </div>
    </div>
  )
}

export default App
