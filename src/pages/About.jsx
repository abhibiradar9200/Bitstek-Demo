import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function About() {
  usePageMeta("About - Bitstek Advisory", "Bitstek Advisory offers expert financial market education, trading resources, and guidance to help you succeed in global markets. Start your trading journey with trusted professionals.")
  return (
    <>
      <style>{`
    /* Fixed uniform team image sizing */
    .team-img {
        width: 300px; /* fixed width */
        height: 300px; /* fixed height to make them square */
        object-fit: cover; /* crop to fill without distortion */
        display: block;
        border-radius: 6px;
    }
    /* layout: stack image above profile text */
    .team-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 12px;
    }

    /* ensure image container doesn't shrink and add bottom spacing */
    .team-photo {
        flex: 0 0 auto;
        margin-bottom: 8px;
    }

    @media (max-width: 640px) {
        .team-img {
            width: 200px;
            height: 200px;
        }
    }
    `}</style>
      <main>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-1 uk-flex uk-flex-center">
                <div className="uk-width-3-5@m uk-text-center">
                  <h1 className="uk-margin-small-bottom">
                    <span className="in-highlight">
                      About Us
                    </span>
                  </h1>
                  <p className="uk-text-lead uk-margin-remove-top">
                    Bitstek is a Global Investment advisory, At Bitstek we design a basket of uncorrelated income streams for the Investor/Trader, which helps us in creating a diversified portfolio with favorable risk-reward ratio.
                  </p>
                </div>
              </div>
              <div className="uk-grid uk-grid-large uk-child-width-1-3@m uk-margin-medium-top" data-uk-grid="">
                <div className="uk-flex uk-flex-left">
                  <div className="uk-margin-right">
                    <div className="in-icon-wrap circle primary-color">
                      <i className="fas fa-eye fa-lg"></i>
                    </div>
                  </div>
                  <div>
                    <h3>
                      Our Vision
                    </h3>
                    <p className="uk-margin-remove-bottom">
                      To empower investors and traders globally by providing transparent, data-driven, and innovative financial advisory solutions for sustainable success.
                    </p>
                  </div>
                </div>
                <div className="uk-flex uk-flex-left">
                  <div className="uk-margin-right">
                    <div className="in-icon-wrap circle primary-color">
                      <i className="fas fa-bullseye fa-lg"></i>
                    </div>
                  </div>
                  <div>
                    <h3>
                      Our Mission
                    </h3>
                    <p className="uk-margin-remove-bottom">
                      To deliver expert investment and trading advisory that bridges technology and human insight, enabling clients to achieve their financial goals with confidence.
                    </p>
                  </div>
                </div>
                <div className="uk-flex uk-flex-left">
                  <div className="uk-margin-right">
                    <div className="in-icon-wrap circle primary-color">
                      <i className="fas fa-chart-line fa-lg"></i>
                    </div>
                  </div>
                  <div>
                    <h3>
                      Our Goal
                    </h3>
                    <p className="uk-margin-remove-bottom">
                      To become a trusted global partner in financial growth by fostering innovation, consistency, and measurable results in every client relationship.
                    </p>
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
                <div className="uk-card uk-card-default uk-border-rounded uk-background-center uk-background-contain uk-background-image@m" style={{"backgroundImage": "url(/img/blockit/in-team-background-1.png)"}} data-uk-parallax="bgy: -100">
                  <div className="uk-card-body">
                    <div className="uk-grid uk-flex uk-flex-center">
                      <div className="uk-width-3-4@m uk-text-center">
                        <h2>
                          Trust the Professionals
                        </h2>
                        <p>
                          We are a group of passionate, independent thinkers who never stop exploring new ways to improve investment and trading experience.
                        </p>
                      </div>
                    </div>
                    <div className="uk-grid uk-child-width-1-2@m uk-margin-medium-top" data-uk-grid="">
                      <div className="team-card uk-first-column">
                        <div className="team-photo">
                          <img className="uk-align-center team-img" src="/img/Ravindra.jpg" alt="image-team" width="300" height="300" />
                        </div>
                        <div>
                          <p className="uk-text-small uk-text-muted uk-text-uppercase uk-margin-remove-bottom">
                            Chief Executive Officer
                          </p>
                          <h4 className="uk-margin-small-top">
                            Rajendra Prasad
                          </h4>
                          <p>
                            Rajendra Prasad is a seasoned investor, trader, and portfolio manager with over 22 years of hands-on experience in financial markets. An NSE Certified Market Professional (Level 4), he has successfully navigated multiple market cycles and developed a deep understanding of global asset classes. His extensive experience spans equities, derivatives, commodities, and international markets, making him a well-rounded and insightful market participant.
                          </p>
                          <div>
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-facebook-f uk-margin-small-right"></i>
                            </a>
                            {" "}
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-twitter uk-margin-small-right"></i>
                            </a>
                            {" "}
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-card">
                        <div className="team-photo">
                          <img className="uk-align-center team-img" src="/img/adilsir.jpg" alt="image-team" width="300" height="300" />
                        </div>
                        <div>
                          <p className="uk-text-small uk-text-muted uk-text-uppercase uk-margin-remove-bottom">
                            Chief Technology Officer
                          </p>
                          <h4 className="uk-margin-small-top">
                            Shaik Adil Zama
                          </h4>
                          <p>
                            Shaik Adil Zama is a technology leader who blends software engineering, data science, and algorithmic trading to build robust trading platforms and automation tools. With over a decade of experience in low-latency systems, cloud infrastructure, APIs and machine learning, he develops quantitative strategies, risk-management modules, and scalable integrations that help translate market insights into reliable execution. His work ensures our trading products are secure, performant, and aligned with practical trading workflows.
                          </p>
                          <div>
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-facebook-f uk-margin-small-right"></i>
                            </a>
                            {" "}
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-twitter uk-margin-small-right"></i>
                            </a>
                            {" "}
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-card">
                        <div className="team-photo">
                          <img className="uk-align-center team-img" src="/img/amit.jpg" alt="image-team" width="300" height="300" />
                        </div>
                        <div>
                          <p className="uk-text-small uk-text-muted uk-text-uppercase uk-margin-remove-bottom">
                            Advisor
                          </p>
                          <h4 className="uk-margin-small-top">
                            Amit Kumar Gupta
                          </h4>
                          <p>
                            {"Mr. Amit Kumar is a highly accomplished and multi-certified professional with over 11 years of experience spanning both corporate industry roles and private practice. He is a qualified Chartered Accountant, Company Secretary, Cost Accountant, and US CISA certified. His academic background includes a degree in science, and he is also NET qualified. He specializes in Listed Space(Equities), Income Tax & Foreign Exchange Management Act (FEMA)."}
                          </p>
                          <div>
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-facebook-f uk-margin-small-right"></i>
                            </a>
                            {" "}
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-twitter uk-margin-small-right"></i>
                            </a>
                            {" "}
                            <a className="uk-link-muted" href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
