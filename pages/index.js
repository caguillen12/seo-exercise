import Header from "../components/Header"
import Footer from "../components/Footer"
import Masthead from "../components/Masthead"
import Testimonial from "../components/Testimonial"

export default function Home() {
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content />
    <meta name="author" content />
    <title>WC Frotend Optimization Practice</title>
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    {/* Bootstrap icons*/}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    {/* Google fonts*/}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
    {/* Core theme CSS (includes Bootstrap)*/}
    <link href="css/styles.css" rel="stylesheet" />
  
    <Header/>
    <Masthead/>
    <Testimonial/>
 
  
    {/* App features section*/}
    <section id="features">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div className="container-fluid px-5">
              <div className="row gx-5">
                <div className="col-md-6 mb-5">
                  {/* Feature item*/}
                  <div className="text-center">
                    <i className="bi-phone icon-feature text-gradient d-block mb-3" />
                    <h3 className="font-alt">Device Mockups</h3>
                    <p className="text-muted mb-0">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  {/* Feature item*/}
                  <div className="text-center">
                    <i className="bi-camera icon-feature text-gradient d-block mb-3" />
                    <h3 className="font-alt">Flexible Use</h3>
                    <p className="text-muted mb-0">Put an image, video, animation, or anything else in the screen!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-5 mb-md-0">
                  {/* Feature item*/}
                  <div className="text-center">
                    <i className="bi-gift icon-feature text-gradient d-block mb-3" />
                    <h3 className="font-alt">Free to Use</h3>
                    <p className="text-muted mb-0">As always, this theme is free to download and use for any purpose!</p>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Feature item*/}
                  <div className="text-center">
                    <i className="bi-patch-check icon-feature text-gradient d-block mb-3" />
                    <h3 className="font-alt">Open Source</h3>
                    <p className="text-muted mb-0">Since this theme is MIT licensed, you can use it commercially!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-0">
            {/* Features section device mockup*/}
            <div className="features-device-mockup">
              <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                    <stop className="gradient-start-color" offset="0%" />
                    <stop className="gradient-end-color" offset="100%" />
                  </linearGradient>
                </defs>
                <circle cx={50} cy={50} r={50} /></svg><svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)" />
                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)" /></svg><svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx={50} cy={50} r={50} /></svg>
              <div className="device-wrapper">
                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                  <div className="screen bg-black">
                    {/* PUT CONTENTS HERE:*/}
                    {/* * * This can be a video, image, or just about anything else.*/}
                    {/* * * Set the max width of your media to 100% and the height to*/}
                    {/* * * 100% like the demo example below.*/}
                    <video muted="muted" autoPlay loop style={{maxWidth: '100%', height: '100%'}}><source src="assets/img/demo-screen.mp4" type="video/mp4" /></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Basic features section*/}
    <section className="bg-light">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
          <div className="col-12 col-lg-5">
            <h2 className="display-4 lh-1 mb-4">Enter a new age of web design</h2>
            <p className="lead fw-normal text-muted mb-5 mb-lg-0">This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space for text here, so don't worry about writing too much.</p>
          </div>
          <div className="col-sm-8 col-md-6">
            <div className="px-5 px-sm-0"><img className="img-fluid rounded-circle" src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
          </div>
        </div>
      </div>
    </section>
    {/* Call to action section*/}
    <section className="cta">
      <div className="cta-content">
        <div className="container px-5">
          <h2 className="text-white display-1 lh-1 mb-4">
            Stop waiting.
            <br />
            Start building.
          </h2>
          <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="https://startbootstrap.com/theme/new-age" target="_blank">Download for free</a>
        </div>
      </div>
    </section>
    {/* App badge section*/}
    <section className="bg-gradient-primary-to-secondary" id="download">
      <div className="container px-5">
        <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
          <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
          <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
        </div>
      </div>
    </section>
     <Footer/>
  </div>
  
  )
}
