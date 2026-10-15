import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Education() {
  usePageMeta("Education - Bitstek Advisory", "Bitstek Advisory offers expert financial market education, trading resources, and guidance to help you succeed in global markets. Start your trading journey with trusted professionals.")
  return (
    <>
      <main>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid" data-uk-grid="">
              <div className="uk-width-3-5@m">
                <h1 className="uk-margin-small-bottom">
                  <span className="in-highlight">
                    Knowledge
                  </span>
                  {" is a wise investment."}
                </h1>
                <p className="uk-text-lead uk-margin-remove-top uk-margin-bottom">
                  By combining easy-to-understand information with actionable insights, Our company helps make the market seem less daunting—and approachable.
                </p>
                <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill">
                  Learn
                </span>
                {" "}
                <i className="fas fa-long-arrow-alt-right fa-sm uk-margin-small-left uk-margin-small-right"></i>
                {" "}
                <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill">
                  Understand
                </span>
                {" "}
                <i className="fas fa-long-arrow-alt-right fa-sm uk-margin-small-left uk-margin-small-right"></i>
                {" "}
                <span className="uk-label uk-text-small uk-text-uppercase uk-border-pill">
                  Trade
                </span>
              </div>
              <div className="uk-width-2-5@m">
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                  <div className="uk-grid uk-grid-small">
                    <div className="uk-width-expand@m">
                      <h3 className="uk-margin-remove-bottom">
                        Trader Academy
                      </h3>
                      <p className="uk-margin-small-top">
                        Join our comprehensive trading academy to learn market analysis, strategies, and risk management from expert instructors.
                      </p>
                      <Link to="/contact" className="uk-button uk-button-primary uk-border-rounded">
                        Contact us
                      </Link>
                    </div>
                    <div className="uk-width-auto@m uk-visible@m">
                      <div className="in-icon-wrapper transparent uk-margin-top">
                        <i className="fas fa-user-graduate fa-5x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-1">
                <table className="uk-table uk-table-middle uk-table-divider uk-table-responsive">
                  <tbody>
                    <tr>
                      <td className="uk-width-1-3@m">
                        <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                          <div className="uk-width-auto">
                            <div className="in-icon-wrap circle primary-color">
                              <i className="fas fa-users fa-lg"></i>
                            </div>
                          </div>
                          <div className="uk-width-expand">
                            <h3>
                              Beginner Course
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td>
                        Learn the basic concepts of Financial Market trading, what this market is all about, and why you should be a part of it.
                      </td>
                      <td className="uk-width-1-5@m uk-text-right@m"></td>
                    </tr>
                    <tr>
                      <td className="uk-width-1-3@m">
                        <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                          <div className="uk-width-auto">
                            <div className="in-icon-wrap circle primary-color">
                              <i className="fas fa-tools fa-lg"></i>
                            </div>
                          </div>
                          <div className="uk-width-expand">
                            <h3>
                              Trading Tools
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td>
                        Familiarize yourself with advanced strategies and Btrade's trading toolset. Take your trading to the next level.
                      </td>
                      <td className="uk-width-1-5@m uk-text-right@m"></td>
                    </tr>
                    <tr>
                      <td className="uk-width-1-3@m">
                        <div className="uk-grid uk-grid-small uk-flex uk-flex-middle">
                          <div className="uk-width-auto">
                            <div className="in-icon-wrap circle primary-color">
                              <i className="fas fa-chart-area fa-lg"></i>
                            </div>
                          </div>
                          <div className="uk-width-expand">
                            <h3>
                              Stocks and CFDs
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td>
                        {"Discover the world of CFD trading: The ins & outs of the CFD market, relevant information and market dynamics."}
                      </td>
                      <td className="uk-width-1-5@m uk-text-right@m"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {" "}
        {" "}
        {" "}
      </main>
    </>
  )
}
