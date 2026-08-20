import socialFacebook from '../assets/home/social-facebook.svg'
import socialInstagram from '../assets/home/social-4.svg'
import iconCall from '../assets/home/icon-call.svg'
import iconPin from '../assets/home/icon-pin.svg'

const socialLinks = [
  {
    icon: socialFacebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/p/Grime-Grease-Garage-61566425213580/',
  },
  {
    icon: socialInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/grimengreasegarage/',
  },
]

const mapQuery = '12.8553085,77.6481841(Grime %26 Grease Garage)'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-map-wrap">
          <iframe
            className="footer-map"
            title="Map to Grime & Grease Garage"
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
          />
          <a
            className="footer-map-link"
            href="https://maps.app.goo.gl/Brca4o5tngUr283W8"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Grime & Grease Garage location in Google Maps"
          />
        </div>
        <div className="footer-info">
          <a
            className="footer-address"
            href="https://maps.app.goo.gl/Brca4o5tngUr283W8"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconPin} alt="" className="footer-icon" />
            <span className="footer-address-text">
              Site No 11/1 Opposite MANYA MAGNAVILLE Chikkathoguru, Post, near
              Gundthop, Electronic City, Devendra Nagar, Bengaluru, Karnataka
              560100
            </span>
          </a>
          <a className="footer-phone" href="tel:+919741297321">
            <img src={iconCall} alt="" className="footer-icon" />
            +91 97412 97321
          </a>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <img src={social.icon} alt="" />
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
