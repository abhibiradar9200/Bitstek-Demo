import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const act = (routes, base = '') => [base, routes.includes(pathname) && 'uk-active'].filter(Boolean).join(' ') || undefined
  return (
    <header>
      <div className="uk-section uk-padding-remove-vertical">
        <nav className="uk-navbar-container" data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
          <div className="uk-container" data-uk-navbar="">
            <div className="uk-navbar-left uk-width-expand uk-flex uk-flex-between">
              <Link to="/" className="uk-navbar-item uk-logo logo">
                <img src="/img/Logo.jpg" alt="logo" width="160" height={pathname === '/' ? 60 : 75} data-uk-img="" />
              </Link>
              <ul className="uk-navbar-nav uk-visible@m">
                <li className={act(["/"], "")}>
                  <Link to="/">Home</Link>
                </li>
                <li className={act(["/about"], "")}>
                  <Link to="/about">About</Link>
                </li>
                <li className={act(["/markets"], "")}>
                  <Link to="/markets">Markets</Link>
                </li>
                <li className={act(["/careers", "/contact"], "")}>
                  <a href="#">
                    Company
                    <span data-uk-navbar-parent-icon=""></span>
                  </a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className={act(["/careers"], "")}>
                        <Link to="/careers">Careers</Link>
                      </li>
                      <li className={act(["/contact"], "")}>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={act(["/calculator"], "")}>
                  <Link to="/calculator">Calculator</Link>
                </li>
                <li className={act(["/education"], "")}>
                  <Link to="/education">Education</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right uk-width-auto">
              <div className="uk-navbar-item uk-visible@m in-optional-nav">
                <div>
                  <a href={pathname === '/' ? "https://crm.bitstekadvisory.com/login" : "#"} className="uk-button uk-button-link" target="_blank">
                    Login
                  </a>
                  {" "}
                  <a href={pathname === '/' ? "https://crm.bitstekadvisory.com/register" : "#"} className="uk-button uk-button-link" target="_blank">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}