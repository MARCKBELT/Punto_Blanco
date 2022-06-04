import React from "react";
import "./ModalCard.css";

import ShowImage from './ShowImage';

const ModalCard = ({ setOpenModal, producto }) => {
    return (
        <div className="modal modalBackground modal-dialog-centered">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div >
                    <div className="container  m-10 cart-cont animated__animated animate__fadeInUp">

                        <div className="row ">
                            <div className="col-5 zoom">
                                <ShowImage className="  mb-3 img zoom" item={producto} url="producto" />
                                {console.log(producto)}

                            </div>

                            <div className="col-7 ">
                                <div className="row">
                                    <div className="card">
                                        <h2 className="title">{producto.producto}</h2>
                                        <div className="row">
                                            <div className="col-3">

                                                <h4>Precio:</h4>
                                                <h4>Marca:</h4>
                                                <h4>Talla:</h4>
                                                <h4>Color:</h4>
                                                
                                            </div>
                                            <div className="col-4">

                                                <h4>${producto.precio_venta}</h4>
                                                <h4>{producto.marca.marca}</h4>
                                                <h4>{producto.talla.talla}</h4>
                                                <h4>{producto.color.color}</h4>
                                                
                                            </div>
                                            <h4>Descripcion: {producto.descripcion}</h4>
                                        </div>


                                        

                                    </div>

                                </div>
                            </div>

                        </div>
                        


                    </div>
                </div>

            </div>
        </div>
    );
}

export default ModalCard;