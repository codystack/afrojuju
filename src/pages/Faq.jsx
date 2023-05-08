import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Faq() {
    return (
        <>
            <main className="page-wrapper">

                <NavBar />
                <section className="bg-secondary py-5 pt-5 mt-5">
                    <div className="container my-2 py-md-2 py-lg-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-5 text-center text-md-start pb-2 pb-md-0 mb-4 mb-md-0">
                            <h2 className="pb-3 mb-1 mb-lg-2">Any questions? <br className="d-none d-md-inline" />Check out the FAQs</h2>
                            <p className="fs-lg pb-3 mb-2 mb-lg-3">Still have unanswered questions and need to get in touch?</p>
                            <Link to='/contact' className="btn btn-primary">Contact support</Link>
                            </div>
                            <div className="col-md-7 offset-xl-1">
                            <div className="accordion" id="faq">
                                <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h4 className="accordion-header" id="q1-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q1" aria-expanded="false" aria-controls="q1">
                                    What if I exceed my Free or paid plan limits?
                                    </button>
                                </h4>
                                <div id="q1" className="accordion-collapse collapse" aria-labelledby="q1-heading" data-bs-parent="#faq" style={{}}>
                                    <div className="accordion-body fs-sm pt-0">
                                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                                    <p className="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h4 className="accordion-header" id="q2-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2" aria-expanded="false" aria-controls="q2">
                                    How do I know which plan is right for me?
                                    </button>
                                </h4>
                                <div id="q2" className="accordion-collapse collapse" aria-labelledby="q2-heading" data-bs-parent="#faq" style={{}}>
                                    <div className="accordion-body fs-sm pt-0">
                                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                                    <p className="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h4 className="accordion-header" id="q3-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3" aria-expanded="false" aria-controls="q3">
                                    Are there any long-term commitments or cancellation fees?
                                    </button>
                                </h4>
                                <div id="q3" className="accordion-collapse collapse" aria-labelledby="q3-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                                    <p className="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h4 className="accordion-header" id="q4-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q4" aria-expanded="false" aria-controls="q4">
                                    How do I cancel my monthly subscription?
                                    </button>
                                </h4>
                                <div id="q4" className="accordion-collapse collapse" aria-labelledby="q4-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                                    <p className="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h4 className="accordion-header" id="q5-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q5" aria-expanded="false" aria-controls="q5">
                                    What happens if I upgrade or downgrade a plan mid-period?
                                    </button>
                                </h4>
                                <div id="q5" className="accordion-collapse collapse" aria-labelledby="q5-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                                    <p className="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item border-0 rounded-3 shadow-sm">
                                <h4 className="accordion-header" id="q6-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q6" aria-expanded="false" aria-controls="q6">
                                    What kind of support do I get?
                                    </button>
                                </h4>
                                <div id="q6" className="accordion-collapse collapse" aria-labelledby="q6-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                                    <p className="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                                    </div>
                                </div>
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
