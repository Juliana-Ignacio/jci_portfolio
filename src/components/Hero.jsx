import React from 'react'

export default function Hero() {
  return (
    <section className="py-5">
      <div className="hero-bg">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center">
            <h1 className="display-5 fw-bold hero-title">Hi, I'm Jaycee</h1>
            <p className="lead text-muted">Front-end developer — building beautiful interfaces for girls in tech.</p>
            <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
              <a className="btn btn-outline-primary btn-lg" href="#projects">View my work</a>
              <a className="btn btn-lg text-white" style={{background: 'linear-gradient(90deg,var(--accent),var(--accent-2))'}} href="#contact">Let's collaborate</a>
            </div>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0 position-relative">
            <svg className="floaty position-absolute" style={{right:'10%',top:'-10px',width:100,height:100,opacity:0.12}} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="url(#g)" />
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#ff6bcb" />
                  <stop offset="1" stopColor="#7c4dff" />
                </linearGradient>
              </defs>
            </svg>
            <img className="profile-img" src="https://static01.nyt.com/images/2020/01/28/multimedia/28xp-memekid3/28cp-memekid3-superJumbo.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  )
}
