import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Markets() {
  usePageMeta("Markets - Bitstek Advisory", "Bitstek Advisory offers expert financial market education, trading resources, and guidance to help you succeed in global markets. Start your trading journey with trusted professionals.")
  return (
    <>
      <main>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid-match uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m in-card-10" data-uk-grid="">
              <div className="uk-width-1-1 uk-flex uk-flex-center uk-first-column">
                <div className="uk-width-3-5@m uk-text-center">
                  <h1 className="uk-margin-remove">
                    {"A "}
                    <span className="in-highlight">
                      relationship
                    </span>
                    {" on your terms."}
                  </h1>
                  <p className="uk-text-lead uk-text-muted uk-margin-remove">
                    Work with us the way you want.
                  </p>
                  <p>
                    Some believe you must choose between an online broker and a wealth management firm. Whether you invest on your own, with an advisor, or a little of both — we can support you.
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small uk-border-rounded uk-light in-card-green">
                  <div className="in-icon-wrap circle uk-margin-medium-bottom">
                    <i className="fas fa-seedling fa-lg"></i>
                  </div>
                  <h4 className="uk-margin-top">
                    {" Investing "}
                    {" "}
                  </h4>
                  <hr />
                  <p>
                    A wide selection of investment product to help build diversified portfolio
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small uk-border-rounded uk-light in-card-blue">
                  <div className="in-icon-wrap circle uk-margin-medium-bottom">
                    <i className="fas fa-chart-bar fa-lg"></i>
                  </div>
                  <h4 className="uk-margin-top">
                    {" Trading "}
                    {" "}
                  </h4>
                  <hr />
                  <p>
                    Powerful trading tools, resources, insight and support
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small uk-border-rounded uk-light in-card-purple">
                  <div className="in-icon-wrap circle uk-margin-medium-bottom">
                    <i className="fas fa-chart-pie fa-lg"></i>
                  </div>
                  <h4 className="uk-margin-top">
                    {" Wealth management "}
                    {" "}
                  </h4>
                  <hr />
                  <p>
                    Dedicated financial consultant to help reach your own specific goals
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small uk-border-rounded uk-light in-card-navy">
                  <div className="in-icon-wrap circle uk-margin-medium-bottom">
                    <i className="fas fa-chalkboard-teacher fa-lg"></i>
                  </div>
                  <h4 className="uk-margin-top">
                    {" Investment advisory "}
                    {" "}
                  </h4>
                  <hr />
                  <p>
                    A wide selection of investing strategies from seasoned portfolio managers
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small uk-border-rounded uk-light in-card-grey">
                  <div className="in-icon-wrap circle uk-margin-medium-bottom">
                    <i className="fas fa-funnel-dollar fa-lg"></i>
                  </div>
                  <h4 className="uk-margin-top">
                    {" Smart portfolio "}
                    {" "}
                  </h4>
                  <hr />
                  <p>
                    A revolutionary, fully-automated investment advisory services
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small uk-border-rounded uk-light in-card-brown">
                  <div className="in-icon-wrap circle uk-margin-medium-bottom">
                    <i className="fas fa-handshake fa-lg"></i>
                  </div>
                  <h4 className="uk-margin-top">
                    {" Mutual fund advisor "}
                    {" "}
                  </h4>
                  <hr />
                  <p>
                    Specialized guidance from independent advisor for HNI clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-2-3@m">
                <div className="uk-grid uk-grid-small" data-uk-grid="">
                  <div className="uk-width-auto@m">
                    <div className="in-icon-wrap circle large primary-color uk-margin-right">
                      <i className="fas fa-money-bill-wave fa-2x"></i>
                    </div>
                  </div>
                  <div className="uk-width-expand">
                    <h2>
                      Why Bitstek?
                    </h2>
                    <p>
                      Discover the benefits of trading with Bitstek Advisory, offering competitive rates, secure platforms, and expert support to help you achieve your financial goals with confidence.
                    </p>
                    <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m">
                      <div>
                        <ul className="uk-list in-list-check">
                          <li>
                            Direct Market Access (DMA)
                          </li>
                          <li>
                            Leverage up to 1:500
                          </li>
                          <li>
                            T+0 settlement
                          </li>
                          <li>
                            Dividends paid in cash
                          </li>
                        </ul>
                      </div>
                      <div className="in-margin-top-10@s in-margin-bottom-30@s">
                        <ul className="uk-list in-list-check">
                          <li>
                            Free from UK Stamp Duty
                          </li>
                          <li>
                            Short selling available
                          </li>
                          <li>
                            Commissions from 0.08%
                          </li>
                          <li>
                            Access to morethan 10000 global financial instruments
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              {" "}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
