
import React, { useState, useEffect } from 'react';
import NavBar from './layout/NavBar'
import { getProducts } from './ApiCore';
import Card from './Card';

import Fondo from "../Imagenes/fondo.jpg"

const Home = () => {

  //funciones ára el estado

  //funciones de la Api
  console.log(getProducts)

  {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);


    const loadProducts = () => {
      getProducts().then(data => {
        if (data.error) {
          setError(data.error)
        } else {
          setProducts(data);
          console.log(data);
        }
      })
    }

    useEffect(() => {
      loadProducts();
    }, [])

    return (
      <divc className='container'>
        <div className="sticky-top"  >
          <NavBar />
        </div>

        <div >
          <div >
            <a className="navbar-brand" > <img src={Fondo} className="modalBackground cover w-100 opacity-25 mg-thumbnail m-0" alt="Logo" /></a>
          </div >
          <div className="container">
            <div className="row">
              {products.map((producto, i) => (
                <div key={i} className=" col-lg-3 col-md-6 col-sm-6 col-sm-6">
                  <Card producto={producto} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </divc>

    )
  }
}

export default Home;




