import React from 'react'
import RemoveBg from "/imgs/3760906-removebg-preview.png";
import RemoveBg1 from "/imgs/imgs-removebg-preview.png";
import WImage from "/imgs/woman image2.jpeg";
import MImage from "/imgs/man image1.jpg";
import WImage2 from "/imgs/man image1.jpg";
import WImage3 from "/imgs/man img2.jpg";
function Home() {
  return (
<>

<div className="container-fluid" id="home" style={{ backgroundColor: '#F6F6FE' }}>
    <div className="row pt-4" style={{
  width: '90%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}}>
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="hero_h2">Wellness, <br/>Reimagined for the <br/>Next Generation</h2>
            <p className="hero_p">A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting edge HealthTech and fitness innovation.</p>
            <button className="hero_btn">Join the Movement</button>
            <button className="hero_btn">Explore Our Apps</button>
        </div>
        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
            <img src={RemoveBg1} alt="" className="imgs m-auto"/>
        </div>
    </div>
  </div>

  <div className="container py-5" id="about">
  <div className="row" style={{
  width: '90%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center'
}}>
    <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
      <img src={RemoveBg} alt="Wellness Image" className="imgs1"/>
    </div>
    <div className="col-lg-6 mb-4" data-aos="fade-left" data-aos-duration="1000">
      <h1 className="hero_title">Where Wellness Meets <br/> What's Next</h1>
      <div className="underline"></div>
      <p className="hero_text">
        At Wellnex Systems, we believe the future of health and fitness lies in intelligent, 
        integrated, and deeply human-centered technology.
      </p>
      <p className="hero_text">
        Born from the fusion of <b>"Wellness"</b> and <b>"Next,"</b> our platform is designed to 
        elevate how people connect with their bodies, minds, and communities—anytime, anywhere.
      </p>
      <p className="hero_bold">We're not just building apps. We're building a movement.</p>
      <button className="hero_btn">Join Our Community</button>
    </div>
  </div>
</div>

<section id="apps" className="section-padding">
  <div className="container">
    <div className="row mb-5">
      <div className="col-12 text-center" data-aos="fade-up" data-aos-duration="800">
        <h2 className="section-title1">Our Flagship Apps</h2>
        <div className="title-underline"></div>
        <p className="lead">Discover our innovative applications designed to transform your wellness journey</p>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-6 mb-4" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
        <div className="app-card card p-4">
          <div className="app-header d-flex align-items-center mb-3">
            <div className="app-icon soulwhispers-icon">
              <i className="fas fa-brain"></i>
            </div>
            <div className="ms-3">
              <h3 className="card-title mb-1">SoulWhispers</h3>
              <h6 className="text-muted">Your Pocket-Sized Wellness Companion</h6>
            </div>
          </div>

          <p className="card-text">
            SoulWhispers is a mindfulness and emotional wellness app designed to help users reconnect with their inner calm. 
            Through guided meditations, reflective journaling, and AI-powered mood tracking, SoulWhispers nurtures 
            mental clarity and emotional resilience in a fast-paced world.
          </p>

          <h5 className="mt-4">Key Features:</h5>
          <ul className="feature-list">
            <li>Telehealth and diagnostics</li>
            <li>Mood journaling with AI insights</li>
            <li>Personalized wellness providers</li>
            <li>Seamless booking & consultation check-ins</li>
          </ul>

          <a href="#" className="btn gradient-btn mt-3">Download SoulWhispers</a>
        </div>
      </div>

      <div className="col-lg-6 mb-4" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
        <div className="app-card card p-4 pb-5">
          <div className="app-header d-flex align-items-center mb-3">
            <div className="app-icon gymkey-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <div className="ms-3">
              <h3 className="card-title mb-1">GymKey</h3>
              <h6 className="text-muted">Smart Access to Fitness, Anytime</h6>
            </div>
          </div>

          <p className="card-text">
            GymKey is your digital passport to fitness freedom. Whether you're a gym owner or a fitness enthusiast, 
            GymKey connects users with partner gyms, tracks workouts, and simplifies access—all from a single app.
          </p>

          <h5 className="mt-4">Key Features:</h5>
          <ul className="feature-list">
            <li>Seamless check-in at partner gyms</li>
            <li>Workout tracking & performance analytics</li>
            <li>Membership management for gym owners</li>
            <li>Real-time className schedules & bookings</li>
          </ul>

          <a href="#" className="btn gradient-btn-secondary mt-3">Explore GymKey</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="why-wellnex" className="py-5">
  <div className="container text-center">
    <h2 className="section-title mb-4" data-aos="fade-up" data-aos-duration="800">Why Wellnex?</h2>
    <div className="title-underline"></div>
    <div className="row mt-5">
      <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-link"></i>
          </div>
          <h4>Integrated Wellness</h4>
          <p>Physical, mental, and emotional health in one ecosystem</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-robot"></i>
          </div>
          <h4>AI-Driven Personalization</h4>
          <p>Smart recommendations tailored to your goals</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-expand-arrows-alt"></i>
          </div>
          <h4>Scalable for Providers</h4>
          <p>From boutique studios to national gym chains</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h4>Built for the Future</h4>
          <p>Cloud-native, mobile-first, and privacy-conscious</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="coming-next" id="coming-soon">
    <div className="container">
      <h2 data-aos="fade-up" data-aos-duration="800">What's Coming Next</h2>
      <p className="lead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        We're building a unified Wellnex Platform that brings together fitness, nutrition, mental health, 
        and diagnostics into a single intelligent dashboard. Whether you're a user, trainer, or clinic — 
        Wellnex will be your digital wellness command center.
      </p>

      <div className="row g-4">
        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300">
          <div className="feature-card1">
            <div className="feature-icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <h4>Wearable Integration</h4>
            <p>Connect your favorite wearables for seamless health tracking</p>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
          <div className="feature-card1">
            <div className="feature-icon">
              <i className="fas fa-utensils"></i>
            </div>
            <h4>Nutrition & Meal Planning</h4>
            <p>Personalized nutrition plans based on your health goals</p>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500">
          <div className="feature-card1">
            <div className="feature-icon">
              <i className="fas fa-building"></i>
            </div>
            <h4>Corporate Wellness</h4>
            <p>Dashboards for organizations to track employee wellness</p>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section id="testimonials" className="py-5">
  <div className="container text-center">
    <h2 className="section-title3" data-aos="fade-up" data-aos-duration="800">What Our Users Say</h2>
    <div className="underline"></div>

    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <div className="testimonial-card mx-auto" style={{ maxWidth: '700px' }}>
            <div className="user-info">
              <img src={WImage} alt="User 1"/>
              <div className="user-name">Ayesha R.</div>
              <div className="user-location">Karachi</div>
            </div>
            <p className="testimonial-text">"SoulWhispers helped me find calm in chaos. It's like therapy in my pocket."</p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="testimonial-card mx-auto" style={{ maxWidth: '700px' }}>
            <div className="user-info">
              <img src={MImage} alt="User 2"/>
              <div className="user-name">Imran M.</div>
              <div className="user-location">Gym Owner, Lahore</div>
            </div>
            <p className="testimonial-text">"GymKey has transformed how I manage my gym. My members love the convenience."</p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="testimonial-card mx-auto" style={{ maxWidth: '700px' }}>
            <div className="user-info">
              <img src={WImage2} alt="User 3"/>
              <div className="user-name">Sarah K.</div>
              <div className="user-location">Islamabad</div>
            </div>
            <p className="testimonial-text">"The AI-powered insights in SoulWhispers have improved my mental wellbeing."</p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="testimonial-card mx-auto" style={{ maxWidth: '700px' }}>
            <div className="user-info">
              <img src={WImage3} alt="User 4"/>
              <div className="user-name">Ahmed T.</div>
              <div className="user-location">Dubai</div>
            </div>
            <p className="testimonial-text">"As a fitness enthusiast, GymKey made accessing gyms super easy. Revolutionary!"</p>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  </div>
</section>

  <section className="subscribe-section">
  <h2 data-aos="fade-up" data-aos-duration="800">Stay Connected</h2>
  <div className="underline"></div>
  <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Be the first to experience the full Wellnex platform.</p>

  <div className="subscribe-box" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
    <input type="email" placeholder="Enter your email"/>
    <button>Join Our Waitlist</button>
  </div>

  <p className="privacy-text" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">We respect your privacy and will never share your information.</p>
</section>

</>
  )
}

export default Home
