import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class NavBar
  extends Component {
  render() {
    return (
      <nav >
        <ul>
          <li>
            <Link to='/'>Logo</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/AddProduct'>Agregar Producto</Link>
          </li>
          <li>
            <Link to='/Registrar'>Registrarse</Link>
          </li>
          <li>
            <Link to='/Signin'>Iniciar Sesion</Link>
          </li>
          <li>
            <Link to='/store'>Store</Link>
          </li>

        </ul>

      </nav>
    )
  }
}
