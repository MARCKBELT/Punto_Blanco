import React from 'react'
import logo from "../layout/Logo.png"

const NavBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/"> <img src={logo} width={200} className="img-thumbnail m-0" alt="Logo" /></a>
         
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto mb-0 mb-lg-0">

              <li className="nav-item">
                <form className="d-flex ms-auto ">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Store</a>
              </li>

            </ul>

          </div>

        </div>
      </nav>


    </div>
  )
}

export default NavBar