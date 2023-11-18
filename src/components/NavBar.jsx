import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
      <>
        <header className="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky">
            <div className="container px-3">
                <a href="./" className="navbar-brand pe-3">
                    <img src="assets/img/AfroJuju-Logo.png" width={207} alt="logo" />
                </a>
                <div id="navbarNav" className="offcanvas offcanvas-end bg-dark">
                    <div className="offcanvas-header border-bottom border-light">
                        <h5 className="offcanvas-title text-white">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body mx-auto mx-4">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/pricing' className="nav-link">Distribution</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/faq' className="nav-link">Promotions</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Black Market</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Talent Mgt</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Ticket</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas-header border-top border-light">
                        <a href="https://app.afrojuju.co" className="btn btn-outline-light w-100 me-3" target="_blank" rel="noreferrer noopener">Login
                        </a>

                        <a href="https://app.afrojuju.co/signup" className="btn btn-primary w-100" target="_blank" rel="noreferrer noopener">Get started
                        </a>
                    </div>      
                </div>
                <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a href="https://app.afrojuju.co" className="btn btn-outline-light btn-sm fs-sm me-3 rounded d-none d-lg-inline-flex" target="_blank" rel="noreferrer noopener">
                    Login
                </a>
                <a href="https://app.afrojuju.co/signup" className="btn btn-danger btn-sm fs-sm rounded d-none d-lg-inline-flex" target="_blank" rel="noreferrer noopener">
                    Get started
                </a>
            </div>
        </header>
      </>
    )
}
