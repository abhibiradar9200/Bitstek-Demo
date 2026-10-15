import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import useInlineScript from '../hooks/useInlineScript'

export default function Calculator() {
  usePageMeta("Calculator - Bitstek Advisory", "Bitstek Advisory offers expert financial market education, trading resources, and guidance to help you succeed in global markets. Start your trading journey with trusted professionals.")
  useInlineScript('/js/calculator.js')
  return (
    <>
      <style>{`

    /* ========== Root Variables ========== */
    :root{
      --bg-dark: #000000;
      --bg-light: #1a1a1a;
      --card-bg: #0d0d0d;
      --card-border: #2a2a2a;
      --accent: #f0c137;
      --accent-hover: #ecb409;
      --text-primary: #f3f6f4;
      --text-secondary: #999999;
      --text-muted: #717070;
      --glass: rgba(240, 193, 55, 0.05);
      --glass-border: rgba(240, 193, 55, 0.1);
      --pad: 16px;
      font-family: "Lato", sans-serif;
    }

    /* ========== Calculator Section ========== */
    .calculator-section {
      width: 100%;
      padding: var(--pad) 0;
    }

    .calculator-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .calculator-header h1 {
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 12px 0;
      letter-spacing: 0.5px;
    }

    .calculator-header p {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin: 0;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    /* ========== Card Styling ========== */
    .calculator-card {
      background: linear-gradient(135deg, var(--card-bg) 0%, #1a1a1a 100%);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      max-width: 900px;
      margin: 0 auto;
    }

    .calculator-card h2 {
      font-size: 1.8rem;
      color: var(--text-primary);
      margin: 0 0 12px 0;
      font-weight: 600;
    }

    .calculator-card > p {
      color: var(--text-secondary);
      font-size: 1rem;
      margin: 0 0 28px 0;
      line-height: 1.6;
    }

    /* ========== Input Grid ========== */
    .input-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }

    .input-group label {
      display: block;
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 8px;
      font-weight: 500;
    }

    input[type="number"],
    input[type="date"],
    select {
      width: 100%;
      padding: 12px 14px;
      border-radius: 8px;
      border: 1px solid var(--card-border);
      background: var(--glass);
      color: var(--text-primary);
      font-size: 0.95rem;
      outline: none;
      box-sizing: border-box;
      transition: all 0.3s ease;
      font-family: "Lato", sans-serif;
    }

    select {
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f0c137' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 10px center;
      background-size: 20px;
      padding-right: 40px;
      cursor: pointer;
    }

    select option {
      background: var(--card-bg);
      color: var(--text-primary);
    }

    input[type="number"]:hover,
    input[type="date"]:hover,
    select:hover {
      border-color: var(--glass-border);
      background: rgba(240, 193, 55, 0.08);
    }

    input[type="number"]:focus,
    input[type="date"]:focus,
    select:focus {
      border-color: var(--accent);
      background: rgba(240, 193, 55, 0.12);
      box-shadow: 0 0 0 3px rgba(240, 193, 55, 0.1);
    }

    /* ========== Checkbox Toggle ========== */
    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }

    .checkbox-group label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0;
      font-size: 0.95rem;
      color: var(--text-primary);
      cursor: pointer;
    }

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: var(--accent);
    }

    /* ========== Date/Time Section ========== */
    .date-time-section {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      align-items: flex-end;
      margin-bottom: 24px;
      padding: 20px;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: 8px;
    }

    .date-input-group {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 160px;
    }

    .date-input-group label {
      font-size: 0.85rem;
      color: var(--text-secondary);
      margin-bottom: 6px;
      font-weight: 500;
    }

    .date-input-group input {
      padding: 10px 12px;
      font-size: 0.9rem;
    }

    /* ========== Buttons ========== */
    .button-group {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 28px;
    }

    .btn {
      background: linear-gradient(135deg, var(--accent) 0%, #e8b000 100%);
      border: none;
      padding: 12px 28px;
      border-radius: 8px;
      color: #000000;
      font-weight: 600;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(240, 193, 55, 0.3);
      font-family: "Lato", sans-serif;
    }

    .btn:hover {
      background: linear-gradient(135deg, var(--accent-hover) 0%, #daa000 100%);
      box-shadow: 0 6px 20px rgba(240, 193, 55, 0.4);
      transform: translateY(-2px);
    }

    .btn:active {
      transform: translateY(0);
    }

    .btn-secondary {
      background: transparent;
      color: var(--text-secondary);
      border: 1px solid var(--card-border);
      box-shadow: none;
    }

    .btn-secondary:hover {
      background: var(--glass);
      border-color: var(--accent);
      color: var(--accent);
      box-shadow: none;
    }

    /* ========== Divider ========== */
    .divider {
      height: 1px;
      background: var(--card-border);
      margin: 24px 0;
    }

    /* ========== Results Section ========== */
    .result {
      margin-top: 32px;
      padding: 24px;
      border-radius: 10px;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      display: none;
    }

    .result.show {
      display: block;
      animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .result-header {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      margin-bottom: 24px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--card-border);
    }

    .result-item {
      display: flex;
      flex-direction: column;
    }

    .result-label {
      font-size: 0.85rem;
      color: var(--text-secondary);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .result-value {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--accent);
    }

    /* ========== Greeks Grid ========== */
    .greeks-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .greek-metric {
      background: linear-gradient(135deg, rgba(240, 193, 55, 0.05) 0%, rgba(240, 193, 55, 0.02) 100%);
      padding: 18px;
      border-radius: 8px;
      border: 1px solid var(--glass-border);
      text-align: center;
      transition: all 0.3s ease;
    }

    .greek-metric:hover {
      border-color: var(--accent);
      box-shadow: 0 4px 12px rgba(240, 193, 55, 0.15);
    }

    .greek-metric .label {
      font-size: 0.8rem;
      color: var(--text-secondary);
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .greek-metric .value {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--accent);
      word-break: break-word;
    }

    /* ========== Footer Note ========== */
    .calculator-note {
      margin-top: 24px;
      padding: 16px;
      background: rgba(240, 193, 55, 0.05);
      border-left: 3px solid var(--accent);
      border-radius: 4px;
      color: var(--text-secondary);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* ========== Responsive Design ========== */
    @media (max-width: 1024px) {
      .calculator-card {
        padding: 24px;
      }

      .input-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .greeks-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .calculator-header h1 {
        font-size: 2rem;
      }

      .calculator-card {
        padding: 20px;
        border-radius: 8px;
      }

      .calculator-card h2 {
        font-size: 1.5rem;
      }

      .input-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .date-time-section {
        flex-direction: column;
        gap: 16px;
        padding: 16px;
      }

      .date-input-group {
        width: 100%;
      }

      .button-group {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }

      .result-header {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .greeks-grid {
        grid-template-columns: 1fr;
      }

      .greek-metric {
        padding: 16px;
      }
    }

    @media (max-width: 480px) {
      .calculator-header h1 {
        font-size: 1.5rem;
      }

      .calculator-card {
        padding: 16px;
      }

      .calculator-card h2 {
        font-size: 1.2rem;
      }

      .calculator-card > p {
        font-size: 0.9rem;
      }

      .input-group label,
      .date-input-group label {
        font-size: 0.8rem;
      }

      input[type="number"],
      input[type="date"],
      select {
        padding: 10px 12px;
        font-size: 0.9rem;
      }

      .result-value {
        font-size: 1.4rem;
      }

      .greek-metric .value {
        font-size: 1.1rem;
      }

      .btn {
        padding: 10px 16px;
        font-size: 0.9rem;
      }

      .divider {
        margin: 16px 0;
      }

      .result {
        padding: 16px;
      }
    }

    `}</style>
      <main>
        <div className="uk-section">
          <div className="uk-container">
            <section className="calculator-section">
              <div className="calculator-header">
                <h1>
                  Black–Scholes Option Calculator
                </h1>
                <p>
                  Price European call/put and compute Greeks for equities, ETFs and many financial instruments.
                </p>
              </div>
              <div className="calculator-card">
                <h2>
                  Option Parameters
                </h2>
                <div className="input-grid">
                  <div className="input-group">
                    <label htmlFor="optType">
                      Option type
                    </label>
                    {" "}
                    <select id="optType">
                      <option value="call">
                        Call
                      </option>
                      <option value="put">
                        Put
                      </option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="spot">
                      Spot price (S)
                    </label>
                    {" "}
                    <input id="spot" type="number" step="any" min="0" defaultValue="100" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="strike">
                      Strike price (K)
                    </label>
                    {" "}
                    <input id="strike" type="number" step="any" min="0" defaultValue="100" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="vol">
                      Volatility (σ) — annual %
                    </label>
                    {" "}
                    <input id="vol" type="number" step="any" min="0" defaultValue="20" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="rate">
                      Risk-free rate (r) — annual %
                    </label>
                    {" "}
                    <input id="rate" type="number" step="any" min="-99" defaultValue="5" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="div">
                      Dividend yield (q) — annual %
                    </label>
                    {" "}
                    <input id="div" type="number" step="any" min="0" defaultValue="0" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="checkbox-group">
                  <input id="useDates" type="checkbox" defaultChecked />
                  {" "}
                  <label htmlFor="useDates">
                    Use dates for expiry
                  </label>
                </div>
                <div className="date-time-section">
                  <div className="date-input-group">
                    <label htmlFor="currentDate">
                      Current date
                    </label>
                    {" "}
                    <input id="currentDate" type="date" />
                  </div>
                  <div className="date-input-group">
                    <label htmlFor="expiryDate">
                      Expiry date
                    </label>
                    {" "}
                    <input id="expiryDate" type="date" />
                  </div>
                  <div className="date-input-group">
                    <label htmlFor="tYears">
                      Or time to expiry (years)
                    </label>
                    {" "}
                    <input id="tYears" type="number" step="any" min="0" defaultValue="0.25" />
                  </div>
                </div>
                <div className="button-group">
                  <button id="calcBtn" className="btn">
                    Calculate
                  </button>
                  {" "}
                  <button id="resetBtn" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
                <div className="result" id="resultBox" aria-live="polite">
                  <div className="result-header">
                    <div className="result-item">
                      <span className="result-label">
                        Option Price (
                        <span id="optLabel">
                          Call
                        </span>
                        )
                      </span>
                      <div className="result-value" id="price">
                        —
                      </div>
                    </div>
                    <div className="result-item">
                      <span className="result-label">
                        Time to expiry (years)
                      </span>
                      <div className="result-value" id="ttime">
                        —
                      </div>
                    </div>
                    <div className="result-item">
                      <span className="result-label">
                        Implied inputs
                      </span>
                      <div style={{"fontSize": "0.9rem", "color": "var(--text-secondary)", "marginTop": "8px"}}>
                        {"σ shown as annual %, r & q in %"}
                      </div>
                    </div>
                  </div>
                  <div className="greeks-grid">
                    <div className="greek-metric">
                      <div className="label">
                        Delta
                      </div>
                      <div className="value" id="delta">
                        —
                      </div>
                    </div>
                    <div className="greek-metric">
                      <div className="label">
                        Gamma
                      </div>
                      <div className="value" id="gamma">
                        —
                      </div>
                    </div>
                    <div className="greek-metric">
                      <div className="label">
                        Vega (per 1% vol)
                      </div>
                      <div className="value" id="vega">
                        —
                      </div>
                    </div>
                    <div className="greek-metric">
                      <div className="label">
                        Theta (per day)
                      </div>
                      <div className="value" id="theta">
                        —
                      </div>
                    </div>
                    <div className="greek-metric">
                      <div className="label">
                        Rho (per 1% rate)
                      </div>
                      <div className="value" id="rho">
                        —
                      </div>
                    </div>
                    <div className="greek-metric">
                      <div className="label">
                        d₁ / d₂
                      </div>
                      <div className="value" id="d12">
                        —
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calculator-note">
                  <strong>
                    Tip:
                  </strong>
                  {" For short maturities, enter dates for better accuracy. Greeks shown in conventional units (vega/rho per 1% change, theta per day)."}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
