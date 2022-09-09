import React from 'react'
import Foto from '../../Assets/Img/foto-bienvenidos.jpg'
import './Bienvenidos.css'

const Bienvenidos = () => {
  return (
    <div className='cont-bienvenidos'>
        <h2>Zona 1</h2>
        <img src={Foto} alt="Rubén y Maryló" />
        <p>Oporto - Portugal</p>
        <p>Budapest - Hungría</p>
    </div>
  )
}

export default Bienvenidos