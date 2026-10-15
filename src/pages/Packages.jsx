import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Packages() {
  usePageMeta("Packages - Bitstek Advisory", "Bitstek Advisory offers expert financial market education, trading resources, and guidance to help you succeed in global markets. Start your trading journey with trusted professionals.")
  return (
    <>
      <main>
        {" "}
        {" "}
        {" "}
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-1">
                <div className="uk-card uk-card-default uk-border-rounded uk-background-center uk-background-contain uk-background-image@m" style={{"backgroundImage": "url(/img/blockit/in-team-background-1.png)"}} data-uk-parallax="bgy: -100">
                  <div className="uk-card-body">
                    <section id="packages" className="trading-packages">
                      <h2 className="section-title">
                        Trading Packages
                      </h2>
                      <p className="para">
                        Choose the Plan That Matches Your Ambition
                      </p>
                      <div className="service-grid">
                        <div className="service-card animate">
                          <h3>
                            Classic Account
                          </h3>
                          <ul style={{"listStyle": "none", "marginTop": "1rem"}}>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Investment Range: ₹2.5 Lakhs – ₹4.99 Lakhs"}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Potential Returns: Up to 12% – 15% p.a."}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Step into the world of smart investing with confidence."}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" The Classic Account is perfect for aspiring investors looking to grow their wealth steadily. Enjoy consistent returns with minimal risk, all while laying the foundation for a brighter financial future."}
                            </li>
                            <br />
                            <div className="list1">
                              <li>
                                <i className="fas fa-lightbulb" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Ideal for first-time investors
                              </li>
                              <li>
                                <i className="fas fa-chart-line" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Balanced growth with secure strategies
                              </li>
                              <li>
                                <i className="fas fa-shield-alt" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Low entry point, high potential
                              </li>
                            </div>
                          </ul>
                        </div>
                        <div className="service-card animate">
                          <h3>
                            Premium Account
                          </h3>
                          <ul style={{"listStyle": "none", "marginTop": "1rem"}}>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Investment Range: ₹5 Lakhs – ₹9.99 Lakhs"}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Potential Returns: Up to 15% – 18% p.a."}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Elevate your investment journey."}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" The Premium Account is crafted for serious investors ready to maximize their earnings with refined strategies. Experience higher returns with personalized guidance and dynamic portfolio management."}
                            </li>
                            <br />
                            <div className="list1">
                              <li>
                                <i className="fas fa-briefcase" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                For investors seeking more growth
                              </li>
                              <li>
                                <i className="fas fa-rocket" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Increased returns with expert-backed investments
                              </li>
                              <li>
                                <i className="fas fa-chart-bar" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Dynamic portfolio options
                              </li>
                            </div>
                          </ul>
                        </div>
                        <div className="service-card animate">
                          <h3>
                            Business Account
                          </h3>
                          <ul style={{"listStyle": "none", "marginTop": "1rem"}}>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Investment Range: ₹10 Lakhs – ₹14.99 Lakhs"}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Potential Returns: Up to 18% – 24% p.a."}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Power up your profits with smarter investments."}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" The Business Account is tailored for ambitious individuals and enterprises aiming to multiply their capital efficiently. Gain access to exclusive opportunities, detailed reporting, and strategic insights."}
                            </li>
                            <br />
                            <div className="list1">
                              <li>
                                <i className="fas fa-brain" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                {"Ideal for seasoned investors & SMEs"}
                              </li>
                              <li>
                                <i className="fas fa-lock" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Exclusive access to high-performing instruments
                              </li>
                              <li>
                                <i className="fas fa-chart-line" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                {"Advanced reporting & risk assessment"}
                              </li>
                            </div>
                          </ul>
                        </div>
                        <div className="service-card animate">
                          <h3>
                            Enterprise Account
                          </h3>
                          <ul style={{"listStyle": "none", "marginTop": "1rem"}}>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Investment Range: ₹15 Lakhs and above"}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Potential Returns: Up to 24% – 30% p.a."}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Invest like the elite, earn like never before."}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" The Enterprise Account is our top-tier offering for high-net-worth individuals and corporations. Unlock maximum earning potential, enjoy premium benefits, and receive VIP-level portfolio management."}
                            </li>
                            <br />
                            <div className="list1">
                              <li>
                                <i className="fas fa-crown" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Highest returns in the segment
                              </li>
                              <li>
                                <i className="fas fa-user-tie" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                {"Dedicated account manager & custom strategy"}
                              </li>
                              <li>
                                <i className="fas fa-globe" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Access to elite investment opportunities
                              </li>
                            </div>
                          </ul>
                        </div>
                        <div className="service-card animate">
                          <h3>
                            ElderCare Investment Account
                          </h3>
                          <ul style={{"listStyle": "none", "marginTop": "1rem"}}>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Investment Range: ₹1 Lakh – ₹4.99 Lakhs"}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Steady Returns: 2–3% per month"}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Safe & Secure: Prioritizing stability over speculation"}
                            </li>
                            <li>
                              <i className="fas fa-check-circle" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                              {" Peace of Mind: Designed with senior citizens' financial comfort in mind"}
                            </li>
                            <div className="">
                              <li>
                                <i className="fas fa-comments" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                {" The ElderCare Account is thoughtfully crafted for retired individuals and senior citizens seeking reliable monthly income and capital protection. Benefit from conservative investment strategies backed by decades of expertise and personal financial guidance."}
                              </li>
                            </div>
                            <br />
                            <div className="list1">
                              <li>
                                <i className="fas fa-user-check" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Applicants must be above 50 years of age.
                              </li>
                              <li>
                                <i className="fas fa-file-alt" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Documents will be verified for authenticity.
                              </li>
                              <li>
                                <i className="fas fa-university" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Monthly returns credited to your verified account.
                              </li>
                              <li>
                                <i className="fas fa-calendar-alt" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                Returns will be disbursed on the 5th of every month.
                              </li>
                              <li>
                                <i className="fas fa-handshake" style={{"marginRight": "8px", "color": "#d4af37"}}></i>
                                1-year lock-in required.
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </section>
                    {" "}
                    {" "}
                    {" "}
                    {" "}
                    {" "}
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
