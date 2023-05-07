import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default class Home extends Component {
  render() {
    return (
      <>
        <main className="page-wrapper">
        
          <NavBar />

          <section className="dark-mode bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4 h-100" style={{backgroundImage: 'url(assets/img/hero-bg.jpg)'}}>
              <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5">
                <div className="row pt-3 pb-2 py-md-4">
                
                    <div className="col-xl-5 col-md-6 pt-lg-5 text-center text-md-start mb-4 mb-md-0">
                      <h1 className="display-4 pb-2 pb-sm-3">Sell your music <span className='text-gradient'>worldwide</span></h1>
                      <p className="fs-lg d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5">Get your tracks on major streaming platforms including Spotify, Apple Music, Amazon, Deezer and more with our music distribution services. Go viral on the biggest social channels like TikTok, Instagram & Facebook. Build a new global fan base on international music stores.</p>
                      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                        <a href="https://app.afrojuju.co" className="btn btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3" style={{backgroundColor: '#223158'}}>
                          <img src="assets/img/market/appstore-light.svg" className="dark-mode-img" width={124} alt="App Store" />
                        </a>
                        <a href="https://app.afrojuju.co"className="btn btn-lg rounded px-3 py-2 mb-3" style={{backgroundColor: '#223158'}}>
                          <img src="assets/img/market/googleplay-light.svg" className="dark-mode-img" width={139} alt="Google Play" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="col-xl-7 col-md-6 d-md-flex justify-content-end">
                      <div className="parallax mx-auto ms-md-0 me-md-n5" style={{maxWidth: '675px'}}>
                          <div className="parallax-layer zindex-2" data-depth="0.1">
                          <img src="assets/img/layer01.png" alt="Card" />
                          </div>
                          <div className="parallax-layer zindex-3" data-depth="0.25">
                          <img src="assets/img/layer02.png" alt="Bubble" />
                          </div>
                          <div className="parallax-layer" data-depth="-0.15">
                          <img src="assets/img/layer03.png" alt="Bubble" />
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
}
