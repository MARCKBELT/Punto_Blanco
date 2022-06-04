import React, { useState} from 'react';//
//import { Link } from 'react-router-dom';
import './Card.css';
import ModalCard from './ModalCard';
import ShowImage from './ShowImage';

const Card = ({producto}) => {
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="card m-10 card-cont animated__animated animate__fadeInUp">
      <div className="">
        <ShowImage className="img" item={producto} url="producto"/>
        {console.log(producto)}
        <p>{producto.producto}</p>
        <p>{producto.marca.marca}</p>
        <p>${producto.precio_venta}</p>

        {/* <p>{producto.stock}</p>
        <p>{producto.descripcion}</p>
        <p>{producto.id_marca}</p>

        <p>{producto.id_talla}</p>
        <p>{producto.description}</p>
        <p>{producto.id_color}</p>
        <p>{producto.id_categoria}</p>
        <p>{producto.id_proveedor}</p> */}


      
          
            <button className="btn btn-success openModalBtn" 
            onClick={() => {
                setModalOpen(true);
        }}>Ver Mas</button>
        {modalOpen&&<ModalCard setOpenModal={setModalOpen} producto ={producto}/>}
          
      </div>
    </div>
  )
}

export default Card;