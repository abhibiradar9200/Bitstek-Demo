import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta("Contact - Bitstek Advisory", "Bitstek Advisory offers expert financial market education, trading resources, and guidance to help you succeed in global markets. Start your trading journey with trusted professionals.")
  return (
    <>
      <main>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-flex uk-flex-center in-contact-6">
              <div className="uk-width-1-1">
                <iframe className="uk-width-1-1 uk-height-large uk-border-rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.257909948636!2d78.37289137462824!3d17.44736560107557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f25bb54e17%3A0x556cb53b13a07fc4!2sGenesys%20Info%20X!5e0!3m2!1sen!2sin!4v1760868447226!5m2!1sen!2sin"></iframe>
              </div>
              <div className="uk-width-3-5@m">
                <div className="uk-grid uk-child-width-1-3@m uk-margin-medium-top uk-text-center" data-uk-grid="">
                  <div>
                    <h5 className="uk-margin-remove-bottom">
                      Address
                    </h5>
                    <p className="uk-margin-small-top">
                      {"C Block Cyber Gatway "}
                      <br />
                      Hitech City Hyderabad
                    </p>
                  </div>
                  <div>
                    <h5 className="uk-margin-remove-bottom">
                      Email
                    </h5>
                    <p className="uk-margin-small-top uk-margin-remove-bottom">
                      enquiry@bitstekadvisory.com
                    </p>
                    <p className="uk-text-small uk-text-muted uk-text-uppercase uk-margin-remove-top">
                      for public inquiries
                    </p>
                  </div>
                  <div>
                    <h5 className="uk-margin-remove-bottom">
                      Call
                    </h5>
                    <p className="uk-margin-small-top uk-margin-remove-bottom">
                      +91 90599 80243
                    </p>
                  </div>
                </div>
                <hr className="uk-margin-medium" />
                <h4 className="uk-margin-remove-bottom uk-text-muted uk-text-center">
                  Have questions?
                </h4>
                <h1 className="uk-margin-small-top uk-text-center">
                  {"Let's "}
                  <span className="in-highlight">
                    get in touch
                  </span>
                </h1>
                <form id="contact-form" action="https://bitstekadvisory.com/contact.php" method="POST" className="uk-form uk-grid-small uk-margin-medium-top" data-uk-grid="" autoComplete="off">
                  <div className="uk-width-1-2@s uk-inline">
                    <span className="uk-form-icon fas fa-user fa-sm"></span>
                    {" "}
                    <input className="uk-input uk-border-rounded" id="name" name="name" type="text" placeholder="Full name" required />
                  </div>
                  <div className="uk-width-1-2@s uk-inline">
                    <span className="uk-form-icon fas fa-envelope fa-sm"></span>
                    {" "}
                    <input className="uk-input uk-border-rounded" id="email" name="email" type="email" placeholder="Email address" required />
                  </div>
                  <div className="uk-width-1-1 uk-inline">
                    <span className="uk-form-icon fas fa-pen fa-sm"></span>
                    {" "}
                    <input className="uk-input uk-border-rounded" id="subject" name="subject" type="text" placeholder="Subject" required />
                  </div>
                  <div className="uk-width-1-1">
                    <textarea className="uk-textarea uk-border-rounded" id="message" name="message" rows="6" placeholder="Message" required />
                  </div>
                  <div className="uk-width-1-1">
                    <button className="uk-width-1-1 uk-button uk-button-primary uk-border-rounded" type="submit" name="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
