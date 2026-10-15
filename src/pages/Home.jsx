import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta("Home - Bitstek Advisory", "Bitstek Advisory offers expert financial market education, trading resources, and guidance to help you succeed in global markets. Start your trading journey with trusted professionals.")
  return (
    <>
      <style>{`
    .richesse-assets-section {
        background: black;
        padding: 64px 0;
    }
    .richesse-assets-tabs {
        flex-wrap: wrap;
        gap: 8px;
    }
    .richesse-assets-tabs > li {
        margin-bottom: 8px;
    }
    .richesse-assets-tabs > li > a {
        color: #fff;
        font-weight: 500;
        padding: 16px 24px;
        border-radius: 8px 8px 0 0;
        background: #999990;
        transition: background 0.2s, color 0.2s;
        min-width: 120px;
        display: block;
        text-align: center;
        font-size: 16px;
        line-height: 1.2;
    }
    .richesse-assets-tabs > li.uk-active > a,
    .richesse-assets-tabs > li:hover > a {
        background: #f0c137;
        color: #222;
    }
    .richesse-assets-tabs img {
        display: block;
        margin: 0 auto 8px;
    }
    .richesse-assets-switcher .uk-card {
        background: #000;
        border: 1px solid #444444;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        margin-top: 24px;
        padding: 32px 40px;
    }
    .uk-text-large1 {
        font-size: 1.2rem;
        color: #fff;
        line-height: 1.5;
    }
    @media (max-width: 960px) {
        .richesse-assets-section {
            padding: 40px 0;
        }
        .richesse-assets-switcher .uk-card {
            padding: 24px 16px;
        }
        .uk-text-large1 {
            font-size: 1.1rem;
        }
    }
    @media (max-width: 640px) {
        .richesse-assets-section {
            padding: 24px 0;
        }
        .uk-margin-large-bottom {
            margin-bottom: 24px !important;
        }
        .richesse-assets-tabs {
            gap: 4px;
        }
        .richesse-assets-tabs > li > a {
            padding: 10px 4px;
            font-size: 13px;
            min-width: 80px;
        }
        .uk-text-lead {
            font-size: 15px;
        }
        .richesse-assets-switcher .uk-card {
            padding: 16px 6px;
            font-size: 14px;
        }
        .uk-text-large1 {
            font-size: 1rem;
        }
    }
    `}</style>
      <main>
        <div className="uk-section uk-padding-remove-vertical"></div>
        <div className="in-slideshow uk-visible-toggle" data-uk-slideshow="">
          <ul className="uk-slideshow-items">
            <li className="image-slider">
              <div className="uk-container">
                <div className="uk-grid" data-uk-grid="">
                  <div className="uk-width-1-2@m">
                    <div className="uk-overlay">
                      <h1>
                        {"Empower your "}
                        <span className="in-highlight">
                          Financial
                        </span>
                        {" Journey."}
                      </h1>
                      <p className="uk-text-lead uk-visible@m">
                        Experience Professional Investment and Trading advisory across asset classes spanning Global Markets — using single platform.
                      </p>
                      <div className="in-slideshow-button">
                        <Link to="/contact" className="uk-button uk-button-primary uk-border-rounded" target="_blank">
                          Open account
                        </Link>
                        {" "}
                        <Link to="/contact" className="uk-button uk-button-default uk-border-rounded uk-margin-small-left uk-visible@m" target="_blank">
                          Discover account
                        </Link>
                      </div>
                      <p className="uk-text-small">
                        <span className="uk-text-primary">
                          *
                        </span>
                        Investment and Trading in Financial Market/CFDs is subject to risk.
                      </p>
                    </div>
                  </div>
                  <div className="uk-position-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/in-slideshow-image-1.png" alt="slideshow-image" width="862" height="540" data-uk-img="" />
                  </div>
                </div>
              </div>
            </li>
            <li className="image-slider">
              <div className="uk-container">
                <div className="uk-grid" data-uk-grid="">
                  <div className="uk-width-1-2@m">
                    <div className="uk-overlay">
                      <h1>
                        {"Unlock "}
                        <span className="in-highlight">
                          strategic growth
                        </span>
                        {" in global markets."}
                      </h1>
                      <p className="uk-text-lead uk-visible@m">
                        Gain personalized trading and investment advisory services designed to maximize returns, mitigate risks, and build long-term financial freedom.
                      </p>
                      <div className="in-slideshow-button">
                        <a href="#" className="uk-button uk-button-primary uk-border-rounded" target="_blank">
                          Open account
                        </a>
                        {" "}
                        <a href="#" className="uk-button uk-button-default uk-border-rounded uk-margin-small-left uk-visible@m" target="_blank">
                          Discover account
                        </a>
                      </div>
                      <p className="uk-text-small">
                        <span className="uk-text-primary">
                          *
                        </span>
                        Investment and Trading in Financial Market/CFDs is subject to risk.
                      </p>
                    </div>
                  </div>
                  <div className="uk-position-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/in-slideshow-image-2.png" alt="slideshow-image" width="862" height="540" data-uk-img="" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous="" data-uk-slideshow-item="previous"></a>
          {" "}
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next="" data-uk-slideshow-item="next"></a>
          <div className="uk-container in-slideshow-feature uk-visible@m">
            <div className="uk-grid uk-flex uk-flex-center">
              <div className="uk-width-3-4@m">
                <div className="uk-child-width-1-4" data-uk-grid="">
                  <div className="uk-flex uk-flex-middle">
                    <div className="in-icon-wrap small circle uk-box-shadow-small uk-margin-small-right">
                      <i className="fas fa-drafting-compass"></i>
                    </div>
                    <div>
                      <p className="uk-text-bold uk-margin-remove">
                        Enhanced Tools
                      </p>
                    </div>
                  </div>
                  <div className="uk-flex uk-flex-middle">
                    <div className="in-icon-wrap small circle uk-box-shadow-small uk-margin-small-right">
                      <i className="fas fa-book"></i>
                    </div>
                    <div>
                      <p className="uk-text-bold uk-margin-remove">
                        Trading Guides
                      </p>
                    </div>
                  </div>
                  <div className="uk-flex uk-flex-middle">
                    <div className="in-icon-wrap small circle uk-box-shadow-small uk-margin-small-right">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div>
                      <p className="uk-text-bold uk-margin-remove">
                        Fast execution
                      </p>
                    </div>
                  </div>
                  <div className="uk-flex uk-flex-middle">
                    <div className="in-icon-wrap small circle uk-box-shadow-small uk-margin-small-right">
                      <i className="fas fa-percentage"></i>
                    </div>
                    <div>
                      <p className="uk-text-bold uk-margin-remove">
                        0% Commission
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        {" "}
        <div className="uk-section uk-section-muted in-padding-large-vertical@s in-profit-3">
          <div className="uk-container">
            <div className="uk-grid-divider" data-uk-grid="">
              <div className="uk-width-expand@m in-margin-top-20@s">
                <h2>
                  Trading products
                </h2>
                <p>
                  Choose from asset classes and get access to 15+ trading instruments
                </p>
              </div>
              <div className="uk-width-2-3@m">
                <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m uk-text-center" data-uk-grid="">
                  {" "}
                  <div>
                    <div className="in-icon-wrap circle uk-box-shadow-small uk-margin-auto">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <p className="uk-text-bold uk-margin-small-top">
                      Stocks
                    </p>
                  </div>
                  <div>
                    <div className="in-icon-wrap circle uk-box-shadow-small uk-margin-auto">
                      <i className="fas fa-chart-area"></i>
                    </div>
                    <p className="uk-text-bold uk-margin-small-top">
                      Bonds
                    </p>
                  </div>
                  <div>
                    <div className="in-icon-wrap circle uk-box-shadow-small uk-margin-auto">
                      <i className="fas fa-file-contract"></i>
                    </div>
                    <p className="uk-text-bold uk-margin-small-top">
                      Currencies
                    </p>
                  </div>
                  <div>
                    <div>
                      <div className="in-icon-wrap circle uk-box-shadow-small uk-margin-auto">
                        <i className="fas fa-cube"></i>
                      </div>
                      <p className="uk-text-bold uk-margin-small-top">
                        Commodities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="uk-section uk-padding-large in-padding-large-vertical@s in-profit-10">
            <div className="uk-container uk-background-contain uk-background-bottom-right" data-src="/img/in-profit-mockup-2.png" data-uk-img="">
              <div className="uk-grid" data-uk-grid="">
                <div className="uk-width-1-1 in-offset-bottom-20">
                  <h2 className="uk-margin-small-bottom">
                    Why choose Bitstek Advisory?
                  </h2>
                  <p className="uk-text-lead uk-margin-remove-top">
                    We offer one-click trading experience with 30+ world-renowned markets.
                  </p>
                </div>
              </div>
              <div className="uk-grid-large" data-uk-grid="">
                <div className="uk-width-1-2@s uk-width-1-3@m">
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/in-profit-icon-1.svg" alt="profit-icon" width="86" height="86" data-uk-img="" />
                  <h4 className="uk-heading-bullet uk-margin-top">
                    Wide range of instruments
                  </h4>
                  <p>
                    Explore a variety of instruments designed to meet your needs, offering precision, reliability, and versatility for every task or instrument you invest or trade in.
                  </p>
                </div>
                <div className="uk-width-1-2@s uk-width-1-3@m">
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/in-profit-icon-2.svg" alt="profit-icon" width="86" height="86" data-uk-img="" />
                  <h4 className="uk-heading-bullet uk-margin-top">
                    Unparalleled market returns
                  </h4>
                  <p>
                    Experience exceptional market dynamics that provide unique opportunities, ensuring growth, stability, and success in every investment.
                  </p>
                </div>
                <div className="uk-width-1-2@s uk-width-1-3@m">
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/in-profit-icon-3.svg" alt="profit-icon" width="86" height="86" data-uk-img="" />
                  <h4 className="uk-heading-bullet uk-margin-top">
                    {"Globally licensed & regulated"}
                  </h4>
                  <p>
                    Our operations adhere to international standards, ensuring compliance, trust, and security across all regions where we provide our services.
                  </p>
                </div>
                <div className="uk-width-1-2@s uk-width-1-3@m">
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/in-profit-icon-4.svg" alt="profit-icon" width="86" height="86" data-uk-img="" />
                  <h4 className="uk-heading-bullet uk-margin-top">
                    Committed to Financial Market education
                  </h4>
                  <p>
                    We are dedicated to providing comprehensive resources and training to help you master Financial Market Investment and Trading, ensuring you gain the knowledge and skills needed for success.
                  </p>
                </div>
                <div className="uk-width-1-2@s uk-width-1-3@m">
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/in-profit-icon-5.svg" alt="profit-icon" width="86" height="86" data-uk-img="" />
                  <h4 className="uk-heading-bullet uk-margin-top">
                    {"Regular contests & promotions"}
                  </h4>
                  <p>
                    Participate in exciting contests and enjoy exclusive promotions, providing opportunities to win rewards and experience thrilling challenges regularly.
                  </p>
                </div>
                <div className="uk-width-1-2@s uk-width-1-3@m">
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/in-profit-icon-5.svg" alt="profit-icon" width="86" height="86" data-uk-img="" />
                  <h4 className="uk-heading-bullet uk-margin-top">
                    {"Regular contests & promotions"}
                  </h4>
                  <p>
                    Participate in exciting contests and enjoy exclusive promotions, providing opportunities to win rewards and experience thrilling challenges regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {" "}
          {" "}
          {" "}
          {" "}
          <section className="uk-section uk-section-muted uk-padding-large richesse-assets-section">
            <div className="uk-container">
              <div className="uk-text-center uk-margin-large-bottom">
                <h2 className="uk-heading-line uk-text-bold">
                  <span>
                    This is what you'll invest in
                  </span>
                </h2>
                <p className="uk-text-lead">
                  Our investments are structured in accordance with the strictest financial principles and diversified across asset classes.
                </p>
              </div>
              <ul className="uk-tab uk-flex-center richesse-assets-tabs" data-uk-tab="">
                <li>
                  <a href="#">
                    <i className="fas fa-chart-line" style={{"fontSize": "32px", "marginBottom": "5%"}}></i>
                    <br />
                    <span style={{"fontWeight": "bold"}}>
                      Indian Equities
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-globe-americas" style={{"fontSize": "32px", "marginBottom": "5%"}}></i>
                    <br />
                    <span style={{"fontWeight": "bold"}}>
                      International Equities
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-coins" style={{"fontSize": "32px", "marginBottom": "5%"}}></i>
                    <br />
                    <span style={{"fontWeight": "bold"}}>
                      Gold
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-city" style={{"fontSize": "32px", "marginBottom": "5%"}}></i>
                    <br />
                    <span style={{"fontWeight": "bold"}}>
                      REITs
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="uk-switcher uk-margin richesse-assets-switcher">
                <li>
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-text-center">
                    <p className="uk-text-large1">
                      Indian equities represent shares of companies listed on Indian stock exchanges. They offer exposure to one of the fastest-growing major economies, with opportunities across diverse sectors. Investing in Indian equities provides potential for long-term growth, diversification, and participation in India's economic progress.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-text-center">
                    <p className="uk-text-large1">
                      International stocks are from a combination of developed and emerging markets of the world other than the US. These are diversified investments across sectors, geographies and market capatialization.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-text-center">
                    <p className="uk-text-large1">
                      Commodities as an asset class have had historically low correlation with stocks and bonds. Gold provides the potential for long-term capital appreciation and acts as an inflation hedge. Our gold investments through ETF and responsibly-sourced bars that meet international standards.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-text-center">
                    <p className="uk-text-large1">
                      Real estate investment trusts (REITs) have historically low correlation with stocks and fixed income. They provide the potential for long-term capital appreciation, act as an inflation hedge, and regularly distribute net rental income.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <div className="uk-section uk-padding-large in-padding-large-vertical@s in-profit-12">
            <div className="uk-container">
              <div className="uk-grid-large uk-flex uk-flex-center" data-uk-grid="">
                <div className="uk-width-1-2@m uk-text-center">
                  <div className="uk-card uk-card-default uk-border-rounded uk-box-shadow-medium">
                    <div className="uk-card-body body-color">
                      <div id="tradingview-widget">
                        <div style={{"width": "100%", "height": "318px"}}>
                          <iframe scrolling="no" allowTransparency="true" frameBorder="0" src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22dateRange%22%3A%221D%22%2C%22showChart%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A318%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.10)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Instruments%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%7D%5D%2C%22originalTitle%22%3A%22Instruments%22%7D%5D%2C%22utm_source%22%3A%22bitstekadvisory.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22bitstekadvisory.com%22%7D" title="market overview TradingView widget" lang="en" style={{"userSelect": "none", "boxSizing": "border-box", "display": "block", "height": "100%", "width": "100%"}}></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="uk-text-uppercase uk-text-small" href="#">
                    See all instruments
                  </a>
                </div>
                <div className="uk-width-1-2@m">
                  <h2>
                    {"Live Fx & Spot Metal Quotes"}
                  </h2>
                  <p>
                    Access real-time foreign exchange and precious metal prices, providing accurate and up-to-date market data to help you make informed trading decisions.
                  </p>
                  <ul className="uk-list in-list-check uk-margin-bottom">
                    <li>
                      Ultra-competitive pricing
                    </li>
                    <li>
                      Trading flexibility
                    </li>
                    <li>
                      Award-winning platform
                    </li>
                  </ul>
                  {" "}
                </div>
                <div className="uk-width-5-6@m in-offset-bottom-40">
                  <div className="uk-grid-divider uk-child-width-1-2@s uk-child-width-1-4@m uk-margin-top uk-text-center" data-uk-grid="">
                    <div>
                      <h2>
                        {"< 7.12 ms"}
                      </h2>
                      <p className="uk-text-uppercase uk-text-small uk-text-primary">
                        Average order execution speed
                      </p>
                    </div>
                    <div>
                      <h2>
                        30+
                      </h2>
                      <p className="uk-text-uppercase uk-text-small uk-text-primary">
                        Trading Instruments
                      </p>
                    </div>
                    <div>
                      <h2>
                        {"> 15"}
                      </h2>
                      <p className="uk-text-uppercase uk-text-small uk-text-primary">
                        Active Brokers
                      </p>
                    </div>
                    <div>
                      <h2>
                        $8M+
                      </h2>
                      <p className="uk-text-uppercase uk-text-small uk-text-primary">
                        Assets Under Management (AUM)
                      </p>
                    </div>
                  </div>
                  <div className="uk-text-center uk-margin-medium-top">
                    <a href="#" className="uk-button uk-button-primary uk-border-rounded" target="_blank">
                      Setup your trading account
                    </a>
                    {" "}
                    <a href="https://crm.richesse.solutions/" className="uk-button uk-button-default uk-border-rounded uk-margin-small-left" target="_blank">
                      Discover our platform
                    </a>
                    <p>
                      Registration takes only 40 seconds!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {" "}
          {" "}
          {" "}
          {" "}
          <div className="uk-section uk-section-muted uk-padding-large in-padding-large-vertical@s in-profit-3">
            <div className="uk-container uk-margin-small-bottom">
              <div className="uk-grid uk-flex uk-flex-center" data-uk-grid="">
                <div className="uk-width-1-1 uk-text-center">
                  <h2>
                    Supporting Traders from over 10+ Countries
                  </h2>
                </div>
                <div className="uk-grid-divider uk-child-width-1-2@s uk-child-width-1-3@m" data-uk-grid="">
                  <div>
                    <div className="uk-flex uk-flex-left uk-flex-middle">
                      <div className="uk-margin-medium-right">
                        <h1 className="uk-heading-small uk-margin-remove-bottom uk-text-primary">
                          $8+
                        </h1>
                      </div>
                      <div>
                        <h3 className="uk-margin-small-bottom">
                          Million
                        </h3>
                        <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                          Trading volume per month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="uk-flex uk-flex-left uk-flex-middle">
                      <div className="uk-margin-medium-right">
                        <h1 className="uk-heading-small uk-margin-remove-bottom uk-text-primary">
                          100+
                        </h1>
                      </div>
                      <div>
                        <h3 className="uk-margin-small-bottom">
                          Investors
                        </h3>
                        <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                          Registered trading accounts
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="uk-visible@m">
                    <div className="uk-flex uk-flex-left uk-flex-middle">
                      <div className="uk-margin-medium-right">
                        <h1 className="uk-heading-small uk-margin-remove-bottom uk-text-primary">
                          48+
                        </h1>
                      </div>
                      <div>
                        <h3 className="uk-margin-small-bottom">
                          Million
                        </h3>
                        <p className="uk-margin-remove uk-text-small uk-text-uppercase">
                          Trades executed per years*
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <span className="uk-text-primary">
                    *
                  </span>
                  {"Data based on year-to-date Bitstek activity "}
                  <span className="uk-text-primary">
                    (last update end of Q2 2025)
                  </span>
                </p>
              </div>
            </div>
          </div>
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          <div className="uk-section uk-section-muted uk-padding-large in-padding-large-vertical@s in-profit-3">
            <div className="uk-container">
              <div className="uk-grid uk-flex uk-flex-center" data-uk-grid="">
                <div className="uk-width-1-1 uk-width-5-6@m">
                  <p className="uk-text-lead uk-margin-remove-bottom uk-text-center in-offset-top-10">
                    Start Investment and Trading with Bitstek.
                  </p>
                  <h2 className="uk-margin-small-top uk-text-center">
                    Fast account opening in 3 simple steps
                  </h2>
                  <div className="uk-grid-large uk-child-width-1-3@m uk-text-center uk-margin-medium-top" data-uk-grid="">
                    <div>
                      <span className="in-icon-wrap circle large uk-margin-auto ff">
                        1
                      </span>
                      <h4 className="uk-margin-top">
                        Register
                      </h4>
                      <p>
                        Choose an account type and submit your application
                      </p>
                    </div>
                    <div>
                      <span className="in-icon-wrap circle large uk-margin-auto ff">
                        2
                      </span>
                      <h4 className="uk-margin-top">
                        Fund
                      </h4>
                      <p>
                        Fund your account using a wide range of funding methods.
                      </p>
                    </div>
                    <div>
                      <span className="in-icon-wrap circle large uk-margin-auto ff">
                        3
                      </span>
                      <h4 className="uk-margin-top">
                        Fund Management
                      </h4>
                      <p>
                        Access 180+ instruments across all asset classes
                      </p>
                    </div>
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
