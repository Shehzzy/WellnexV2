import React, {useEffect} from 'react'
import AOS from 'aos';
function Footer() {


    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }, []);
  return (
   <>
   <footer>
    <div className="container">
      <div className="row py-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        
 
        <div className="col-lg-4 col-md-6 mb-4 footer-column" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <h5>Wellnex Systems</h5>
          <p className="floating-element">Empowering Wellness Through Technology</p>
          <div className="social-icons">
            <a href="#" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200"><i className="fab fa-facebook-f"></i></a>
            <a href="#" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300"><i className="fab fa-twitter"></i></a>
            <a href="#" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400"><i className="fab fa-instagram"></i></a>
            <a href="#" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>


        <div className="col-lg-2 col-md-6 mb-4 footer-column" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <h5>Quick Links</h5>
          <p><a href="#home"><i className="fas fa-chevron-right me-2"></i>Home</a></p>
          <p><a href="#about"><i className="fas fa-chevron-right me-2"></i>About</a></p>
          <p><a href="#apps"><i className="fas fa-chevron-right me-2"></i>Apps</a></p>
          <p><a href="#why-wellnex"><i className="fas fa-chevron-right me-2"></i>Why Wellnex</a></p>
          <p><a href="#coming-soon"><i className="fas fa-chevron-right me-2"></i>Coming Soon</a></p>
          <p><a href="#testimonials"><i className="fas fa-chevron-right me-2"></i>Testimonials</a></p>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 footer-column" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <h5>Contact</h5>
          <p className="contact-info" data-aos="fade-left" data-aos-duration="600" data-aos-delay="400">
            <i className="fa-solid fa-envelope me-2"></i> info@wellnexsystems.com
          </p>
          <p className="contact-info" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
            <i className="fa-solid fa-phone me-2"></i> +1 (555) 123-4567
          </p>
          <p className="contact-info" data-aos="fade-left" data-aos-duration="600" data-aos-delay="600">
            <i className="fa-solid fa-location-dot me-2"></i> 123 Wellness Ave, Health City
          </p>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 footer-column" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <h5>Our Apps</h5>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="500"><a href="#"><i className="fas fa-mobile-alt me-2"></i>SoulWhispers</a></p>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="600"><a href="#"><i className="fas fa-dumbbell me-2"></i>GymKey</a></p>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="700"><a href="#"><i className="fas fa-heartbeat me-2"></i>Wellnex Platform</a></p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 footer-bottom text-center py-3">
          <p className="mb-1">© 2025 Wellnex Systems. All rights reserved.</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>
            Wellness Reimagined for the Next Generation
          </p>
        </div>
      </div>
    </div>
  </footer>
   
   
   </>
  )
}

export default Footer
