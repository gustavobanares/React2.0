import React from 'react'
import styles from './CarDetails.module.css'

const CarDetails = ({brand, color, km, newCar}) => {
  return (
    <div className={styles.card}>
        <h2>{brand}</h2>
        <p>Color: {color}</p>
        <p>Km: {km}</p>
        {newCar && (<p>Este carro e novo!</p>)}
        {!newCar && (<p>Este carro e usado!</p>)}
    </div>
  )
}

export default CarDetails