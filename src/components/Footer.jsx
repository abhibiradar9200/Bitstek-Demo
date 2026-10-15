import { Link } from 'react-router-dom'

export default function Footer() {
  return (
      <footer>
        <div className="uk-section uk-section-secondary uk-padding-large uk-padding-remove-horizontal uk-margin-medium-top">
          <div className="uk-container">
            <div className="uk-child-width-1-2@s uk-child-width-1-5@m uk-flex uk-margin-small-top" data-uk-grid="">
              <div>
                <h4 className="uk-heading-bullet">
                  Overview
                </h4>
                <ul className="uk-list uk-link-text">
                  <li>
                    <a href="/Packages">
                      Stock indices
                    </a>
                  </li>
                  <li>
                    <a href="/Packages">
                      Commodities
                    </a>
                  </li>
                  <li>
                    <a href="/Packages">
                      Financial Market
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="uk-heading-bullet">
                  Company
                </h4>
                <ul className="uk-list uk-link-text">
                  <li>
                    <Link to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/packages">
                      Packages
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="uk-heading-bullet">
                  Legal
                </h4>
                <ul className="uk-list uk-link-text">
                  <li>
                    <a href="#">
                      {"Terms & Conditions"}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {"Privacy & Policy"}
                    </a>
                  </li>
                  <li>
                    <Link to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="uk-visible@m">
                <h4 className="uk-heading-bullet">
                  Support
                </h4>
                <ul className="uk-list uk-link-text">
                  <li>
                    <a href="#">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div className="uk-visible@m">
                <h4 className="uk-heading-bullet">
                  Contact
                </h4>
                <ul className="uk-list uk-link-text">
                  <li>
                    <a href="#" style={{"display": "inline-flex", "alignItems": "center"}}>
                      <i className="fas fa-envelope uk-margin-small-right" style={{"verticalAlign": "middle"}}></i>
                      {" "}
                      <span style={{"verticalAlign": "middle"}}>
                        enquiry@bitstekadvisory.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="uk-grid uk-flex uk-flex-center uk-margin-large-top uk-margin-small-bottom" data-uk-grid="">
              <div className="uk-width-5-6@m uk-margin-bottom">
                <div className="footer-warning in-margin-top-20@s">
                  <h5 className="uk-text-small uk-text-uppercase">
                    <span>
                      Risk Warning
                    </span>
                  </h5>
                  <p className="uk-text-small">
                    Trading derivatives and leveraged products carries a high level of risk, including the risk of losing substantially more than your initial investment. It is not suitable for everyone. Before you make any decision in relation to a financial product you should obtain and consider our Product Disclosure Statement (PDS) and Financial Services Guide (FSG) available on our website and seek independent advice if necessary
                  </p>
                </div>
              </div>
              <div className="uk-width-1-2@m">
                <p className="copyright-text">
                  © Bitstek Advisory 2025. All rights reserved.
                </p>
              </div>
              <div className="uk-width-1-2@m uk-flex uk-flex-right@m">
                <div className="uk-flex social-media-list">
                  <div>
                    <a href="https://www.instagram.com/richesse.solutions/" className="color-instagram text-decoration-none" target="_blank">
                      <i className="fab fa-instagram"></i>
                      {" Instagram"}
                    </a>
                  </div>
                  <div>
                    <a href="https://wa.link/vf0mbz" className="color-youtube text-decoration-none" target="_blank">
                      <i className="fab fa-whatsapp"></i>
                      {" Youtube"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
