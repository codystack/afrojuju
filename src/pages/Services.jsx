import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Services() {
    return (
        <>
            <main className="page-wrapper">

                <NavBar />

                    <h1 className="container pb-4 mt-lg-5 py-5 display-4">Our Services</h1>

                    <section className="container mb-md-3 mb-lg-5 pb-5">
                        <div className="row">
                        <div className="col-md-6 pb-2 pb-md-0 mb-4 mb-md-0">
                            <div className="pe-lg-5">
                            <img src="assets/img/services/service01.jpg" className="rounded-3" alt="Image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="h3 mb-sm-4">Consulting Services</h2>
                            <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">Orci, ac libero sit ultrices enim volutpat augue. Congue sit nulla velit ornare cras. Facilisis tempus non erat ornare imperdiet. In ac ullamcorper proin urna, lacus, tortor, ullamcorper egestas mattis mauris.</p>
                            <div className="border rounded-3 mb-4 mb-lg-5">
                            <div className="row row-cols-1 row-cols-sm-2 g-0">
                                <div className="col d-flex align-items-center border-end-sm border-bottom p-3">
                                <img src="assets/img/services/icons/digital.svg" width={48} alt="Icon" />
                                <div className="ps-2 ms-1">
                                    <h3 className="h6 mb-0">Digital transformation</h3>
                                    <p className="fs-xs mb-0">Aliquam quis odio senectus.</p>
                                </div>
                                </div>
                                <div className="col d-flex align-items-center border-bottom p-3">
                                <img src="assets/img/services/icons/chart.svg" width={48} alt="Icon" />
                                <div className="ps-2 ms-1">
                                    <h3 className="h6 mb-0">Analytics services</h3>
                                    <p className="fs-xs mb-0">Curabitur neque ut morbi sapien.</p>
                                </div>
                                </div>
                                <div className="col d-flex align-items-center border-end-sm p-3">
                                <img src="assets/img/services/icons/marketing.svg" width={48} alt="Icon" />
                                <div className="ps-2 ms-1">
                                    <h3 className="h6 mb-0">Marketing &amp; sales</h3>
                                    <p className="fs-xs mb-0">At faucibus molestie egestas sed.</p>
                                </div>
                                </div>
                                <hr className="d-sm-none" />
                                <div className="col d-flex align-items-center p-3">
                                <img src="assets/img/services/icons/cybersecurity.svg" width={48} alt="Icon" />
                                <div className="ps-2 ms-1">
                                    <h3 className="h6 mb-0">Cybersecurity &amp; strategy</h3>
                                    <p className="fs-xs mb-0">Orci bibendum ullamcorper lorem.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex flex-column flex-sm-row">
                            <a href="#" className="btn btn-primary mb-3 mb-sm-0 me-sm-3">Send request</a>
                            <a href="#" className="btn btn-outline-primary">
                                Learn more
                                <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </section>


                    <section className="container pt-2 pt-lg-3 mb-md-3 mb-lg-5 pb-5">
                        <div className="row">
                        <div className="col-md-6 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                            <div className="ps-lg-5">
                            <img src="assets/img/services/service02.jpg" className="rounded-3" alt="Image" />
                            </div>
                        </div>
                        <div className="col-md-6 ordr-md-1">
                            <h2 className="h3 mb-sm-4">Banking Expertise</h2>
                            <ul className="list-unstyled d-md-none d-xl-block pb-2 pb-md-3 mb-3">
                            <li className="d-flex align-items-center mb-2">
                                <i className="bx bx-check lead text-primary me-2" />
                                Sagittis quam egestas sit sit convallis turpis sit augue interdum morbi.
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <i className="bx bx-check lead text-primary me-2" />
                                Sollicitudin cursus habitasse adipiscing est sed aenean sapien.
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="bx bx-check lead text-primary me-2" />
                                At arcu arcu morbi scelerisque nibh. Quam velit fermentum porta facilisi massa.
                            </li>
                            </ul>
                            <div className="border rounded-3 mb-4 mb-lg-5">
                            <div className="row row-cols-1 row-cols-sm-2 g-0">
                                <div className="col d-flex align-items-center border-end-sm border-bottom p-3">
                                <img src="assets/img/services/icons/insurance.svg" width={48} alt="Icon" />
                                <div className="ps-2 ms-1">
                                    <h3 className="h6 mb-0">Insurance</h3>
                                    <p className="fs-xs mb-0">Nunc dui aliquam volutpat augue.</p>
                                </div>
                                </div>
                                <div className="col d-flex align-items-center border-bottom p-3">
                                <img src="assets/img/services/icons/banking.svg" width={48} alt="Icon" />
                                <div className="ps-2 ms-1">
                                    <h3 className="h6 mb-0">Banking risk</h3>
                                    <p className="fs-xs mb-0">Habitasse adipiscing aenean sapien.</p>
                                </div>
                                </div>
                                <div className="col d-flex align-items-center border-end-sm p-3">
                                <img src="assets/img/services/icons/payments.svg" width={48} alt="Icon" />
                                <div className="ps-2 ms-1">
                                    <h3 className="h6 mb-0">Payments</h3>
                                    <p className="fs-xs mb-0">At faucibus molestie egestas sed.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex flex-column flex-sm-row">
                            <a href="#" className="btn btn-primary mb-3 mb-sm-0 me-sm-3">Send request</a>
                            <a href="#" className="btn btn-outline-primary">
                                Learn more
                                <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
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
