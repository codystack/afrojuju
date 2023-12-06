import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
        <main className="page-wrapper">

            <NavBar />

            <section className="position-relative pt-5 mb-5" style={{backgroundColor: '#151922'}}>
                <span className="d-dark-mode-none d-block position-absolute start-0 bottom-0 w-100 bg-white" style={{height: '19.875vw'}} />
                <span className="d-dark-mode-block d-none position-absolute start-0 bottom-0 w-100 bg-light" style={{height: '19.875vw'}} />
                <div className="container position-relative zindex-2 pt-5" data-bs-theme="dark">
                    <div className="mt-4 mb-lg-5 mb-4 py-3">
                        <h1 className="display-4 mb-0">About us</h1>
                    </div>
                    <div className="row g-md-4 g-3">
                        <div className="col-md-6">
                            <img src="assets/img/eyo.jpg" alt="about" className="rounded-3" />
                        </div>
                        <div className="col-md-3 col-6 d-md-block d-none mt-3 pt-1 pt-xl-4">
                            <img src="assets/img/about2.jpg" alt="about" className="rounded-3" />
                        </div>
                        <div className="col-md-3 col-6 d-md-block d-none">
                            <img src="assets/img/aboutbg1.jpeg" alt="about" className="rounded-3" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mb-5 pt-md-1 pt-lg-4 pt-xl-5">
                <div className="mt-4 py-2 pb-sm-3 pb-md-4 pb-lg-5 mx-auto text-center" style={{maxWidth: '46.625rem'}}>
                    <p className="mb-4">Welcome to The Afro Juju App, your all-in-one platform for music distribution, playlisting, brand promotion, talent management, event planning, and much more. We are dedicated to empowering artists, brands, and influencers in the music industry, providing them with the tools and resources they need to succeed.</p>
                    <p className="mb-4">At Afro Juju, we are passionate about supporting and empowering artists, brands, and influencers to reach new heights in the music industry. Our team of experienced professionals is dedicated to delivering top-notch services and personalized support to help you achieve your goals.</p>
                    <p className="mb-4">Join us today and unlock a world of opportunities in the music industry. Together, let's create, promote, and inspire.</p>
                    <p className="mb-4">Afro Juju: Empowering Music Creators and Brands to Thrive.</p>
                </div>
            </section>

            <section className="container mb-5 py-lg-3 py-xl-4 py-xxl-5">
                <div className="d-md-flex align-items-center justify-content-between text-md-start text-center pt-1 pt-sm-3 pt-md-4 mb-5">
                    <h2 className="h1 mb-md-0">Our talented team</h2>
                    <Link to='/contact' className="btn btn-primary">Join our team<i className="bx bx-right-arrow-alt lead ms-1" /></Link>
                </div>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-lg-2 pb-xl-3">

                    <div className="col">
                        <div className="card card-hover border-0 bg-transparent">
                            <div className="position-relative">
                                <img src="assets/img/vanessa.jpeg" className="rounded-3" alt="Vanessa Okoye" />
                                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" />
                                    <div className="position-relative d-flex zindex-2">
                                        <a href="https://instagram.com/vanzyvanz" target="_blank" rel="noreferrer noopener" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                                            <i className="bx bxl-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body text-center p-3">
                                <h3 className="fs-lg fw-semibold pt-1 mb-2">Vanessa Okoye</h3>
                                <p className="fs-sm mb-0">Founder &amp; CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-hover border-0 bg-transparent">
                            <div className="position-relative">
                                <img src="assets/img/plato.jpg" className="rounded-3" alt="Godgift Plato Nleru" />
                                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" />
                                    <div className="position-relative d-flex zindex-2">
                                        <a href="https://instagram.com/plato_of_lagos" target="_blank" rel="noreferrer noopener" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                                            <i className="bx bxl-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body text-center p-3">
                                <h3 className="fs-lg fw-semibold pt-1 mb-2">Godgift Nlerum</h3>
                                <p className="fs-sm mb-0">Creative Director &amp; Co-Founder</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
            
        </main>
    </>
  )
}
