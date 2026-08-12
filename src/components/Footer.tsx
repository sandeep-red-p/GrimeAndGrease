import social1 from '../assets/home/social-1.svg'
import social2 from '../assets/home/social-2.svg'
import social3 from '../assets/home/social-3.svg'
import social4 from '../assets/home/social-4.svg'
import iconCall from '../assets/home/icon-call.svg'
import iconPin from '../assets/home/icon-pin.svg'

const socialLinks = [social1, social2, social3, social4]

const address =
  'Site No 11/1 Opposite MANYA MAGNAVILLE Chikkathoguru, Post, near Gundthop, Electronic City, Devendra Nagar, Bengaluru, Karnataka 560100'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <iframe
          className="footer-map"
          title="Map to Grime & Grease Garage"
          src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="footer-info">
          <p className="footer-address">
            <img src={iconPin} alt="" className="footer-icon" />
            Site No 11/1 Opposite MANYA MAGNAVILLE Chikkathoguru, Post, near
            Gundthop, Electronic City, Devendra Nagar, Bengaluru, Karnataka
            560100
          </p>
          <a className="footer-phone" href="tel:+919741297321">
            <img src={iconCall} alt="" className="footer-icon" />
            +91 97412 97321
          </a>
          <div className="footer-social">
            {socialLinks.map((icon, index) => (
              <a
                key={icon}
                href="#"
                className="social-link"
                aria-label={`Social link ${index + 1}`}
              >
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="container">
          &copy; 2026 Grime &amp; Grease Garage. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
