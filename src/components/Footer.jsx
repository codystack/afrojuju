import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="footer pt-1 pb-4 pb-lg-1">
        <div className="container text-center pt-lg-1">
          <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
            <img src="assets/img/AfroJuju-Logo.png" width={200} alt="Afrojuju" />
          </div>
          <ul className="nav justify-content-center pt-2 pb-4 pb-lg-3">
            <li className="nav-item"><Link to='' className="nav-link">Terms</Link></li>
            <li className="nav-item"><Link to='' className="nav-link">Privacy</Link></li>
            <li className="nav-item"><Link to='' className="nav-link">About us</Link></li>
          </ul>
          <div className="d-flex flex-column flex-sm-row justify-content-center">
            <a href="https://afrojuju.co.uk" className="btn btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3" style={{backgroundColor: '#223158'}}>
              <img src="assets/img/market/appstore-light.svg" className="dark-mode-img" width={124} alt="App Store" />
            </a>
            <a href="https://afrojuju.co.uk"className="btn btn-lg rounded px-3 py-2 mb-3" style={{backgroundColor: '#223158'}}>
              <img src="assets/img/market/googleplay-light.svg" className="dark-mode-img" width={139} alt="Google Play" />
            </a>
          </div>
          <div className="d-flex justify-content-center pt-4 mt-lg-3">
            <a href className="btn btn-icon btn-secondary btn-facebook mx-2">
              <i className="bx bxl-facebook" />
            </a>
            <a href className="btn btn-icon btn-secondary btn-instagram mx-2">
              <i className="bx bxl-instagram" />
            </a>
            <a href className="btn btn-icon btn-secondary btn-twitter mx-2">
              <i className="bx bxl-twitter" />
            </a>
            <a href className="btn btn-icon btn-secondary btn-youtube mx-2">
              <i className="bx bxl-youtube" />
            </a>
          </div>
          <p className="nav d-block fs-sm text-center pt-3 mt-lg-3 mb-0">
            <span className="opacity-80">© {(new Date().getFullYear())} All rights reserved. AfroJuju&trade;</span>
          </p>
        </div>
      </footer>
    </>
  )
}
