import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
    return (
      <>
        <NavBar/>

        <main className="page-wrapper">
          <section className="dark-mode bg-black bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4 h-100">
              <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5 vh-100">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-md-6 pt-lg-5 text-center text-md-start mb-4 mb-md-0">
                      <h1 className="display-4">Oracle's of <span className='text-gradient'>Afrobeats</span></h1>
                      <p className="fs-lg text-white d-xl-block pb-0 mb-0">Making entertainment in Africa  and the World Easier.</p>
                      <p className="fs-lg text-white d-xl-block pb-2 pb-md-0 mb-4 mb-md-5">Welcome to The Afro Juju App, your all-in-one platform for music distribution, playlisting, brand promotion, talent management, event planning, and much more.</p>
                      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                        <a href="https://form.jotform.com/233424044747556" target="_blank" rel="noreferrer noopener" className="btn btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3" style={{backgroundColor: '#223158'}}>
                          <img src="assets/img/market/appstore-light.svg" className="dark-mode-img" width={124} alt="App Store" />
                        </a>

                        <a href="https://play.google.com/store/apps/details?id=com.afrojuju&pcampaignid=web_share" target="_blank" rel="noreferrer noopener" className="btn btn-lg px-3 py-2 mb-3" style={{backgroundColor: '#223158'}}>
                          <img src="assets/img/market/googleplay-light.svg" className="dark-mode-img" width={139} alt="Google Play" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="col-xl-7 col-md-6 d-md-flex mt-5 justify-content-end">
                      <div className="parallax mx-auto ms-md-0 me-md-n5" style={{maxWidth: '675px'}}>
                          <div className="parallax-layer zindex-2" data-depth="0.1">
                            <img src="assets/img/layer01.png" alt="Card" />
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </section>
        </main>

        <Footer />
      </>
    )
}
