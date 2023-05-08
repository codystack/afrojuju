import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Contact() {
  return (
    <>
        <main className="page-wrapper">

            <NavBar />

            <section className="position-relative bg-secondary pt-5">
                <div className="container position-relative zindex-2 pt-5">
                    <div className="row pt-5 mt-5">
                    
                        <div className="col-xl-4 col-lg-5 pb-4 pb-sm-5 mb-2 mb-sm-0">
                            <div className="pe-lg-4 pe-xl-0">
                                <h1 className="pb-3 pb-md-4 mb-lg-5">Contact Us</h1>
                                <div className="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
                                <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                                    <i className="bx bx-envelope" />
                                </div>
                                <div className="ps-3 ps-sm-4">
                                    <h2 className="h4 pb-1 mb-2">Email us</h2>
                                    <p className="mb-2">Please feel free to drop us a line. We will respond as soon as possible.</p>
                                    <a href='mailto:info@afrojuju.co'>
                                        <div className="btn btn-link btn-lg px-0">
                                            Leave a message <i className="bx bx-right-arrow-alt lead ms-2" />
                                        </div>
                                    </a>
                                </div>
                                </div>
                                <div className="d-flex align-items-start">
                                <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                                    <i className="bx bx-group" />
                                </div>
                                <div className="ps-3 ps-sm-4">
                                    <h2 className="h4 pb-1 mb-2">Careers</h2>
                                    <p className="mb-2">Join us in our mission to create the best music distribution experience.</p>
                                    <a href='mailto:careers@afrojuju.co'>
                                        <div className="btn btn-link btn-lg px-0">
                                        Send an application
                                        <i className="bx bx-right-arrow-alt lead ms-2" />
                                        </div>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-7 offset-xl-2">
                            <div className="card border-light shadow-lg py-3 p-sm-4 p-md-5">
                                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block" />
                                <div className="card-body position-relative zindex-2">
                                    <h2 className="card-title pb-3 mb-4">GET IN TOUCH</h2>
                                    <form className="row g-4 needs-validation" noValidate>
                                        <div className="col-12">
                                            <label htmlFor="fn" className="form-label fs-base">Full name</label>
                                            <input type="text" className="form-control form-control-lg" id="fn" required />
                                            <div className="invalid-feedback">Please enter your full name!</div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label htmlFor="email" className="form-label fs-base">Email address</label>
                                            <input type="email" className="form-control form-control-lg" id="email" required />
                                            <div className="invalid-feedback">Please provide a valid email address!</div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label htmlFor="phone" className="form-label fs-base">Phone number</label>
                                            <input type="tel" className="form-control form-control-lg" id="phone" required />
                                            <div className="invalid-feedback">Please provide a valid phone number!</div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label fs-base">Message</label>
                                            <textarea className="form-control form-control-lg" id="message" rows={3} required defaultValue={""} />
                                            <div className="invalid-feedback">Enter message!</div>
                                        </div>
                                        <div className="col-12 pt-2 pt-sm-3">
                                            <button type="submit" className="btn btn-lg btn-danger w-100 w-sm-auto">Send message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute bottom-0 start-0 w-100 bg-light" style={{height: '8rem'}} />
            </section>

            <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
                <div className="row py-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6716452499354!2d3.4531659863305753!3d6.4362028334562895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf592c1b27d0b%3A0xc84f4dcb3a3bb8a3!2sLekki!5e0!3m2!1sen!2sng!4v1683484453707!5m2!1sen!2sng" style={{border: 0, minHeight: '300px'}} allowFullScreen loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <h2 className="h4 mb-4">Office Address</h2>
                        <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
                        <li className="d-flex pb-1 mb-2">
                            <i className="bx bx-map text-primary fs-xl me-2" style={{marginTop: '.125rem'}} />
                            Lekki, Lagos Nigeria.
                        </li>
                        <li className="d-flex pb-1 mb-2">
                            <i className="bx bx-phone-call text-primary fs-xl me-2" style={{marginTop: '.125rem'}} />
                            +234 915 744 5453
                        </li>
                        <li className="d-flex">
                            <i className="bx bx-time-five text-primary fs-xl me-2" style={{marginTop: '.125rem'}} />
                            <div>
                            <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 5:00 pm
                            <br />
                            <strong className="text-nav">Sat - Sun:</strong>: 11:00 am - 4:00 pm
                            </div>
                        </li>
                        </ul>
                        <div className="d-flex pt-1 pt-md-3 pt-xl-4">
                            <a href className="btn btn-icon btn-secondary btn-facebook me-3">
                                <i className="bx bxl-facebook" />
                            </a>
                            <a href className="btn btn-icon btn-secondary btn-instagram me-3">
                                <i className="bx bxl-instagram" />
                            </a>
                            <a href className="btn btn-icon btn-secondary btn-twitter me-3">
                                <i className="bx bxl-twitter" />
                            </a>
                            <a href className="btn btn-icon btn-secondary btn-youtube">
                                <i className="bx bxl-youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    </>
  )
}
