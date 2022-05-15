const Masthead = () =>{
    return(
    <>
      <header className="masthead masthead-bg">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 className="display-1 lh-1 mb-3">Budgeting Made Easy.</h1>
              <p className="lead fw-normal text-muted mb-5">The power of an all-in-one Financial Managment tool, in the palm of your hands. Get Started Today</p>
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg" /></a>
                <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg"  /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="masthead-device-mockup">
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
                    <video muted="muted" autoPlay loop style={{maxWidth: '100%', height: '100%'}}><source src="assets/video/app-video.mov" type="video/mp4" /></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        </>
    )
}

export default Masthead