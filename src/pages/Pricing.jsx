import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Pricing() {
  return (
    <>
        <main className="page-wrapper">

            <NavBar />

                <section className="bg-dark dark-mode py-5 pt-5 mt-5">
                    <div className="container pb-2 py-lg-3 mt-5">
                        <h1 className="text-center mb-0">Transparent Pricing for You</h1>
                    </div>
                    <div style={{height: '300px'}} />
                </section>


                <section className="container position-relative zindex-2" style={{marginTop: '-300px'}}>
                    <div className="price-switch-wrapper">
                        <div className="table-responsive-lg">
                            <div className="d-flex align-items-center pb-4">
                            {/* Pricing plan */}
                            <div className="border rounded-3 rounded-end-0 shadow-sm me-n1" style={{width: '32%', minWidth: '16rem'}}>
                                <div className="card bg-light h-100 border-0 border-end rounded-end-0 py-3 py-sm-4 py-lg-5">
                                <div className="card-body text-center">
                                    <h3 className="mb-2">Team</h3>
                                    <div className="fs-lg pb-4 mb-3">Best for small teams</div>
                                    <div className="display-5 text-dark mb-1" data-monthly-price>$15</div>
                                    <div className="d-none display-5 text-dark mb-1" data-annual-price>$12</div>
                                    <div className="text-muted mb-5">per month</div>
                                </div>
                                <div className="card-footer border-0 text-center pt-0 pb-4">
                                    <a href className="btn btn-outline-light btn-lg">Get started now</a>
                                </div>
                                </div>
                            </div>
                            {/* Featurd pricing plan */}
                            <div className="bg-danger position-relative rounded-3 shadow-primary shadow-dark-mode-none zindex-2 p-4" style={{width: '36%', minWidth: '18rem'}}>
                                <div className="card bg-transparent border-light py-3 py-sm-4 py-lg-5">
                                <div className="card-body text-light text-center">
                                    <h3 className="text-light mb-2">Company</h3>
                                    <div className="fs-lg opacity-70 pb-4 mb-3">Best for growing teams</div>
                                    <div className="display-5 mb-1" data-monthly-price>$25</div>
                                    <div className="d-none display-5 mb-1" data-annual-price>$20</div>
                                    <div className="opacity-50 mb-5">per month</div>
                                </div>
                                <div className="card-footer border-0 text-center pt-0 pb-4">
                                    <a href className="btn btn-light btn-lg shadow-secondary">Get started now</a>
                                </div>
                                </div>
                            </div>
                            {/* Pricing plan */}
                            <div className="border rounded-3 rounded-start-0 shadow-sm" style={{width: '32%', minWidth: '16rem'}}>
                                <div className="card bg-light h-100 border-0 rounded-start-0 py-3 py-sm-4 py-lg-5">
                                <div className="card-body text-center">
                                    <h3 className="mb-2">Enterprise</h3>
                                    <div className="fs-lg pb-4 mb-3">Best for large teams</div>
                                    <div className="display-5 text-dark mb-1" data-monthly-price>$50</div>
                                    <div className="d-none display-5 text-dark mb-1" data-annual-price>$40</div>
                                    <div className="text-muted mb-5">per month</div>
                                </div>
                                <div className="card-footer border-0 text-center pt-0 pb-4">
                                    <a href className="btn btn-outline-light btn-lg">Get started now</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="container py-5 my-md-3 my-lg-5">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center text-md-start">
                            <h2 className="h1 mb-4">Plan Comparison</h2>
                            <p className="fs-lg mb-md-0">Choose the option that makes the most sense for your business.</p>
                        </div>
                        <div className="col-md-8">
                            <div className="row row-cols-1 row-cols-md-3">
                            <div className="col text-md-center pb-2 mb-4">
                                <h3 className="h5 mb-2 mb-md-3">Team</h3>
                                <ul className="d-md-none list-unstyled">
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Users:&nbsp;</span>
                                    1 included
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Member support via email:&nbsp;</span>
                                    Standard
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Live chat support:&nbsp;</span>
                                    <i className="bx bx-x lead text-muted" />
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                                    <i className="bx bx-x lead text-muted" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Projects:&nbsp;</span>
                                    4 projects
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Zoom integration:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                                    <i className="bx bx-x lead text-muted" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                                    <i className="bx bx-x lead text-muted" />
                                </li>
                                </ul>
                                <button className="btn btn-outline-light w-100 w-md-auto">Free trial</button>
                            </div>
                            <div className="col text-md-center pb-2 mb-4">
                                <h3 className="h5 mb-2 mb-md-3">Company</h3>
                                <ul className="d-md-none list-unstyled">
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Users:&nbsp;</span>
                                    5 included
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Member support via email:&nbsp;</span>
                                    3 hours
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Live chat support:&nbsp;</span>
                                    10+ members
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Projects:&nbsp;</span>
                                    Unlimited
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Zoom integration:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                                    <i className="bx bx-x lead text-muted" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                </ul>
                                <button className="btn btn-outline-light w-100 w-md-auto">Get started</button>
                            </div>
                            <div className="col text-md-center mb-3">
                                <h3 className="h5 mb-2 mb-md-3">Enterprise</h3>
                                <ul className="d-md-none list-unstyled">
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Users:&nbsp;</span>
                                    10 +
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Member support via email:&nbsp;</span>
                                    With highest priority
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Live chat support:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">IT security and legal review:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Projects:&nbsp;</span>
                                    Unlimited
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Comments and sharing:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Zoom integration:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Ongoing strategy calls:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2">
                                    <span className="text-dark fw-medium">Analytics dashboard:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                <li className="d-flex align-items-center p-2 bg-secondary">
                                    <span className="text-dark fw-medium">Get custom integrations:&nbsp;</span>
                                    <i className="bx bx-check lead text-danger" />
                                </li>
                                </ul>
                                <button className="btn btn-outline-light w-100 w-md-auto">Get started</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block pt-5 mt-2 pb-4">
                        <div className="row g-0">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Users</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">1 included</div>
                                <div className="col position-relative bg-danger px-2 py-4">
                                <span className="text-light opacity-80">5 included</span>
                                <span className="position-absolute start-0 bottom-100 w-100 bg-danger rounded-3 rounded-bottom-0" style={{height: '2rem'}} />
                                </div>
                                <div className="col px-2 py-4">10+</div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0 bg-secondary rounded-3">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Member support via email</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">Standard</div>
                                <div className="col bg-danger px-2 py-4">
                                <span className="text-light opacity-80">3 hours</span>
                                </div>
                                <div className="col px-2 py-4">With highest priority</div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Live chat support</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">
                                <i className="bx bx-x lead text-muted" />
                                </div>
                                <div className="col bg-danger px-2 py-4">
                                <span className="text-light opacity-80">10+ members</span>
                                </div>
                                <div className="col px-2 py-4">Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0 bg-secondary rounded-3">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">IT security and legal review</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">
                                <i className="bx bx-x lead text-muted" />
                                </div>
                                <div className="col bg-danger px-2 py-4">
                                <i className="bx bx-check lead text-light" />
                                </div>
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Projects</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">4 projects</div>
                                <div className="col bg-danger px-2 py-4">
                                <span className="text-light opacity-80">Unlimited</span>
                                </div>
                                <div className="col px-2 py-4">Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0 bg-secondary rounded-3">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Comments and sharing</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
                                <div className="col bg-danger px-2 py-4">
                                <i className="bx bx-check lead text-light" />
                                </div>
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Zoom integration</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
                                <div className="col bg-danger px-2 py-4">
                                <i className="bx bx-check lead text-light" />
                                </div>
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0 bg-secondary rounded-3">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Ongoing strategy calls</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">
                                <i className="bx bx-x lead text-muted" />
                                </div>
                                <div className="col bg-danger px-2 py-4">
                                <i className="bx bx-x lead text-light opacity-50" />
                                </div>
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Analytics dashboard</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
                                <div className="col bg-danger px-2 py-4">
                                <i className="bx bx-check lead text-light" />
                                </div>
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0 bg-secondary rounded-3">
                            <div className="col-md-4 text-dark fw-semibold ps-4 pe-2 py-4">Get custom integrations</div>
                            <div className="col-md-8 text-center">
                            <div className="row row-cols-3 g-0">
                                <div className="col px-2 py-4">
                                <i className="bx bx-x lead text-muted" />
                                </div>
                                <div className="col position-relative bg-danger px-2 py-4">
                                <i className="bx bx-check lead text-light" />
                                <span className="position-absolute start-0 top-100 w-100 bg-danger rounded-3 rounded-top-0" style={{height: '2rem'}} />
                                </div>
                                <div className="col px-2 py-4">
                                <i className="bx bx-check lead text-danger" />
                                </div>
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
