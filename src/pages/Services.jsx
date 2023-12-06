import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Services() {
    return (
        <>
            <main className="page-wrapper">

                <NavBar />

                    <nav className="container py-4 mb-2 my-lg-3" aria-label="breadcrumb">
                    </nav>

                    <h1 className="container pb-4 mt-lg-5 py-5 display-4 mb-5">Our Services</h1>

                    <section className="container mb-md-3 mb-lg-5 pb-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 pb-2 pb-md-0 mb-4 mb-md-0">
                                <div className="pe-lg-5">
                                    <img src="assets/img/musicDes.jpg" style={{width: 90 + "%"}} className="rounded-3" alt="Music Distribution and Playlisting" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="h3 mb-sm-4">Music Distribution and Playlisting</h2>
                                <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">We offer a seamless and efficient music distribution service, ensuring that your music reaches a wide audience across various platforms. Our expertly curated playlists help artists gain exposure and connect with listeners who appreciate their unique sound.</p>
                                <div className="d-flex flex-column flex-sm-row">
                                    <Link to='/contact' className="btn btn-outline-primary"> Start Distribution
                                    <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="container pt-2 pt-lg-3 mb-md-3 mb-lg-5 pb-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                                <div className="ps-lg-5">
                                    <img src="assets/img/brandpromo.jpg" style={{width: 90 + "%"}} className="rounded-3" alt="Music, TV, and Brand Promotion" />
                                </div>
                            </div>
                            <div className="col-md-6 ordr-md-1">
                                <h2 className="h3 mb-sm-4">Music, TV, and Brand Promotion</h2>
                                <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">With our extensive network and industry expertise, we facilitate music, TV, and brand promotions, helping artists and brands gain visibility and recognition. We work closely with media outlets, streaming platforms, and advertising channels to create impactful promotional campaigns.</p>
                                <div className="d-flex flex-column flex-sm-row">
                                    <Link to='/contact' className="btn btn-outline-primary"> Start Promotion
                                    <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container mb-md-3 mb-lg-5 pb-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 pb-2 pb-md-0 mb-4 mb-md-0">
                                <div className="pe-lg-5">
                                    <img src="assets/img/influencers.jpg" style={{width: 90 + "%"}} className="rounded-3" alt="Easy Access to A-List Artists and Influencers" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="h3 mb-sm-4">Easy Access to A-List Artists and Influencers</h2>
                                <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">We understand the importance of collaborations and connections in the music industry. Through our app, you gain easy access to A-list artists and influencers, enabling you to forge valuable partnerships and elevate your music promotion efforts.</p>
                                <div className="d-flex flex-column flex-sm-row">
                                    <Link to='/contact' className="btn btn-outline-primary"> Get Access
                                    <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="container pt-2 pt-lg-3 mb-md-3 mb-lg-5 pb-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                                <div className="ps-lg-5">
                                    <img src="assets/img/events.jpg" style={{width: 90 + "%"}} className="rounded-3" alt="Shows and Events" />
                                </div>
                            </div>
                            <div className="col-md-6 ordr-md-1">
                                <h2 className="h3 mb-sm-4">Shows and Events</h2>
                                <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">Our platform also assists in organizing and promoting shows and events. Whether it's a small gig or a large-scale concert, our event planning services ensure smooth execution and maximum attendance, giving artists and brands the opportunity to shine on stage.</p>
                                <div className="d-flex flex-column flex-sm-row">
                                    <Link to='/contact' className="btn btn-outline-primary"> Get Started
                                    <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container mb-md-3 mb-lg-5 pb-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 pb-2 pb-md-0 mb-4 mb-md-0">
                                <div className="pe-lg-5">
                                    <img src="assets/img/talentmgt.jpg" style={{width: 90 + "%"}} className="rounded-3" alt="Talent Management" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="h3 mb-sm-4">Talent Management</h2>
                                <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">We provide comprehensive talent management services, guiding and nurturing artists throughout their careers. From contract negotiation to strategic planning, we support artists in their artistic development, helping them make informed decisions and reach their full potential.</p>
                                <div className="d-flex flex-column flex-sm-row">
                                    <Link to='/contact' className="btn btn-outline-primary"> Get Onboard
                                    <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="container pt-2 pt-lg-3 mb-md-3 mb-lg-5 pb-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                                <div className="ps-lg-5">
                                    <img src="assets/img/brandDev.jpg" style={{width: 90 + "%"}} className="rounded-3" alt="Brand Development" />
                                </div>
                            </div>
                            <div className="col-md-6 ordr-md-1">
                                <h2 className="h3 mb-sm-4">Brand Development</h2>
                                <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">Building a strong brand is crucial for success in the music industry. Our app offers brand development assistance, helping artists and brands create a unique identity that resonates with their target audience. We provide branding strategies, visual design, and marketing support to establish a compelling brand presence.</p>
                                <div className="d-flex flex-column flex-sm-row">
                                    <Link to='/contact' className="btn btn-outline-primary"> Go Public
                                    <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                <Footer />

            </main>
        </>
    )
}
