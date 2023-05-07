import React from 'react'

export default function ErrorPage() {
  return (
    <>
        <main className="page-wrapper">
            <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center bg-size-cover" style={{backgroundImage: 'url(assets/img/bg.jpg)'}} />

            <section className="container d-flex flex-column h-100 align-items-center position-relative zindex-5 pt-5">
                <div className="text-center pt-5 pb-3 mt-auto">
                    <div className="parallax mx-auto d-dark-mode-none" style={{maxWidth: '574px', transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', pointerEvents: 'none'}}>
                        <div className="parallax-layer" data-depth="-0.15" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'relative', display: 'block', left: '0px', top: '0px'}}>
                        <img src="assets/img/404/light/layer01.png" alt="Layer" />
                        </div>
                        <div className="parallax-layer" data-depth="0.12" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                        <img src="assets/img/404/light/layer02.png" alt="Layer" />
                        </div>
                        <div className="parallax-layer zindex-5" data-depth="-0.12" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                        <img src="assets/img/404/light/layer03.png" alt="Layer" />
                        </div>
                    </div>
                    <div className="parallax mx-auto d-none d-dark-mode-block" style={{maxWidth: '574px', transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', pointerEvents: 'none'}}>
                        <div className="parallax-layer" data-depth="-0.15" style={{transform: 'translate3d(8.4px, -0.8px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'relative', display: 'block', left: '0px', top: '0px'}}>
                        <img src="assets/img/404/dark/layer01.png" alt="Layer" />
                        </div>
                        <div className="parallax-layer" data-depth="0.12" style={{transform: 'translate3d(-6.7px, 0.7px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                        <img src="assets/img/404/dark/layer02.png" alt="Layer" />
                        </div>
                        <div className="parallax-layer zindex-5" data-depth="-0.12" style={{transform: 'translate3d(6.7px, -0.7px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: '0px', top: '0px'}}>
                        <img src="assets/img/404/dark/layer03.png" alt="Layer" />
                        </div>
                    </div>
                    <h1 className="visually-hidden">404</h1>
                    <h2 className="display-5">Ooops!</h2>
                    <p className="fs-xl pb-3 pb-md-0 mb-md-5">The page you are looking for is not available.</p>
                    <a href="./" className="btn btn-lg btn-danger w-sm-auto w-100">
                        <i className="bx bx-home-alt me-2 ms-n1 lead" />
                        Go to homepage
                    </a>
                </div> 
            </section>
        </main>
    </>
  )
}
