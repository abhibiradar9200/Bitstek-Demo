import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Careers() {
  usePageMeta("Careers - Bitstek Advisory", "Bitstek Advisory offers expert financial market education, trading resources, and guidance to help you succeed in global markets. Start your trading journey with trusted professionals.")
  return (
    <>
      <main>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-flex uk-flex-center">
              <div className="uk-width-3-4@m">
                <p className="uk-text-large">
                  Join us and help redefine trust, innovation, and impact in the financial markets.
                </p>
                <p>
                  At the heart of global finance, we’re building trust where it matters most. From asset management to equities and trading, our mission is to make security and performance work hand in hand.
                </p>
                <p>
                  We’re growing fast — and we’re looking for driven minds ready to shape the future of investing.
                </p>
                <div className="uk-grid-divider uk-child-width-1-1 uk-child-width-1-3@m uk-margin-medium-top uk-margin-bottom" data-uk-grid="">
                  <div>
                    <h3>
                      Our Opportunity
                    </h3>
                    <p>
                      We strive to make security effortless, ensuring businesses can focus on growth while safeguarding their most valuable information.
                    </p>
                    <p>
                      <strong>
                        Contact us:
                      </strong>
                      {" "}
                      <a href="mailto:enquiry@bitstekadvisory.com">
                        enquiry@bitstekadvisory.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3>
                      Our Team
                    </h3>
                    <p>
                      We believe security should empower innovation, not hinder it. Our mission is to simplify compliance, enhance protection, and drive long-term success.
                    </p>
                  </div>
                  <div>
                    <h3>
                      Our Culture
                    </h3>
                    <p>
                      We foster innovation and collaboration, making security a shared commitment. Our team thrives on learning, growth, and empowers to safeguard their data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        {" "}
        {" "}
        {" "}
        <div className="uk-section in-gallery-1">
          <div className="uk-container">
            <ul className="uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s uk-text-center" data-uk-grid="masonry: true">
              <li>
                <div className="uk-inline-clip uk-transition-toggle uk-border-rounded" tabIndex="0">
                  <img className="uk-transition-scale-up uk-transition-opaque" src="/img/blockit/in-gallery-image-1.jpg" alt="gallery-image" data-width="" data-height="" />
                </div>
              </li>
              <li>
                <div className="uk-inline-clip uk-transition-toggle uk-border-rounded" tabIndex="0">
                  <img className="uk-transition-scale-up uk-transition-opaque" src="/img/blockit/in-gallery-image-2.jpg" alt="gallery-image" data-width="" data-height="" />
                </div>
              </li>
              <li>
                <div className="uk-inline-clip uk-transition-toggle uk-border-rounded" tabIndex="0">
                  <img className="uk-transition-scale-up uk-transition-opaque" src="/img/blockit/in-gallery-image-3.jpg" alt="gallery-image" data-width="" data-height="" />
                </div>
              </li>
              <li>
                <div className="uk-inline-clip uk-transition-toggle uk-border-rounded" tabIndex="0">
                  <img className="uk-transition-scale-up uk-transition-opaque" src="/img/blockit/in-gallery-image-4.jpg" alt="gallery-image" data-width="" data-height="" />
                </div>
              </li>
              <li>
                <div className="uk-inline-clip uk-transition-toggle uk-border-rounded" tabIndex="0">
                  <img className="uk-transition-scale-up uk-transition-opaque" src="/img/blockit/in-gallery-image-5.jpg" alt="gallery-image" data-width="" data-height="" />
                </div>
              </li>
              <li>
                <div className="uk-inline-clip uk-transition-toggle uk-border-rounded" tabIndex="0">
                  <img className="uk-transition-scale-up uk-transition-opaque" src="/img/blockit/in-gallery-image-6.jpg" alt="gallery-image" data-width="" data-height="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
