(function(){


    // Helpers: standard normal PDF and CDF (Abramowitz-Stegun approximation)

    function normPDF(x){

      return Math.exp(-0.5*x*x)/Math.sqrt(2*Math.PI);

    }

    // Cumulative normal distribution using Abramowitz & Stegun formula

    function normCDF(x){

      var sign = 1;

      if (x < 0) sign = -1;

      x = Math.abs(x) / Math.sqrt(2);

      // constants

      var a1= 0.254829592, a2= -0.284496736, a3= 1.421413741, a4= -1.453152027, a5= 1.061405429;

      var p= 0.3275911;

      var t = 1/(1 + p*x);

      var y = 1 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

      return 0.5*(1 + sign*y);

    }

    // UI elements

    const useDates = document.getElementById('useDates');

    const currentDate = document.getElementById('currentDate');

    const expiryDate = document.getElementById('expiryDate');

    const tYears = document.getElementById('tYears');

    const calcBtn = document.getElementById('calcBtn');

    const resetBtn = document.getElementById('resetBtn');

    // set default dates

    const today = new Date();

    function formatDateISO(d){

      const yyyy = d.getFullYear();

      const mm = String(d.getMonth()+1).padStart(2,'0');

      const dd = String(d.getDate()).padStart(2,'0');

      return yyyy + '-' + mm + '-' + dd;

    }

    currentDate.value = formatDateISO(today);

    // default expiry: 3 months ahead

    const threeMonths = new Date(today.getTime()); 

    threeMonths.setMonth(threeMonths.getMonth()+3);

    expiryDate.value = formatDateISO(threeMonths);

    // toggle fields

    function toggleDateOrYears(){

      const checked = useDates.checked;

      currentDate.disabled = !checked;

      expiryDate.disabled = !checked;

      tYears.disabled = checked;

    }

    useDates.addEventListener('change', toggleDateOrYears);

    toggleDateOrYears();

    // main calculate

    function calculate(){

      // read inputs

      const S = parseFloat(document.getElementById('spot').value);

      const K = parseFloat(document.getElementById('strike').value);

      const volPct = parseFloat(document.getElementById('vol').value);

      const rPct = parseFloat(document.getElementById('rate').value);

      const qPct = parseFloat(document.getElementById('div').value);

      const type = document.getElementById('optType').value;

      if (isNaN(S) || isNaN(K) || isNaN(volPct) || isNaN(rPct) || isNaN(qPct)) {

        alert("Please fill all inputs with valid numbers");

        return;

      }

      if (S <= 0 || K <= 0) { 

        alert("Spot and Strike must be > 0"); 

        return; 

      }

      // time to expiry

      let T;

      if (useDates.checked){

        const cd = new Date(currentDate.value + 'T00:00:00');

        const ed = new Date(expiryDate.value + 'T00:00:00');

        const ms = ed - cd;

        if (isNaN(ms) || ms <= 0){ 

          alert("Expiry must be after current date"); 

          return; 

        }

        T = ms / (1000 * 60 * 60 * 24 * 365.25); // years

      } else {

        T = parseFloat(tYears.value);

        if (isNaN(T) || T <= 0){ 

          alert("Enter time to expiry in years"); 

          return; 

        }

      }

      const sigma = volPct/100;

      const r = rPct/100;

      const q = qPct/100;

      // handle near-zero T (option at expiry)

      if (T < 1e-8){

        // payoff

        let price;

        if (type === 'call') price = Math.max(0, S - K);

        else price = Math.max(0, K - S);

        displayResults(price, 0, 0, 0, 0, 0, 0, 0);

        return;

      }

      const sqrtT = Math.sqrt(T);

      const d1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * sqrtT);

      const d2 = d1 - sigma * sqrtT;

      const Nd1 = normCDF(d1);

      const Nd2 = normCDF(d2);

      const Nmd1 = normCDF(-d1);

      const Nmd2 = normCDF(-d2);

      const pdfd1 = normPDF(d1);

      const discS = Math.exp(-q*T) * S;

      const discK = Math.exp(-r*T) * K;

      let price;

      if (type === 'call'){

        price = discS * Nd1 - discK * Nd2;

      } else {

        price = discK * Nmd2 - discS * Nmd1;

      }

      // Greeks

      const delta = (type === 'call') ? Math.exp(-q*T) * Nd1 : Math.exp(-q*T) * (Nd1 - 1);

      const gamma = (Math.exp(-q*T) * pdfd1) / (S * sigma * sqrtT);

      const vega = S * Math.exp(-q*T) * pdfd1 * sqrtT; // per unit vol (i.e. per 1.0 = 100%)

      // Theta (annual) then /365 for per day

      const thetaCommon = - (S * sigma * Math.exp(-q*T) * pdfd1) / (2 * sqrtT);

      let theta;

      if (type === 'call'){

        theta = (thetaCommon - r * discK * Nd2 + q * discS * Nd1) / 365.0;

      } else {

        theta = (thetaCommon + r * discK * Nmd2 - q * discS * Nmd1) / 365.0;

      }

      // Rho (per unit rate, i.e. per 1.0 = 100%)

      let rho;

      if (type === 'call'){

        rho = K * T * Math.exp(-r*T) * Nd2;

      } else {

        rho = -K * T * Math.exp(-r*T) * Nmd2;

      }

      displayResults(price, delta, gamma, vega, theta, rho, d1, d2, T);

    }

    function displayResults(price, delta, gamma, vega, theta, rho, d1, d2, T){

      const resultBox = document.getElementById('resultBox');

      resultBox.classList.add('show');

      document.getElementById('optLabel').textContent = document.getElementById('optType').value === 'call' ? 'Call' : 'Put';

      document.getElementById('price').textContent = Number.isFinite(price) ? price.toFixed(6) : '—';

      document.getElementById('ttime').textContent = (T!==undefined) ? (T.toFixed(6)) : '—';

      document.getElementById('delta').textContent = Number.isFinite(delta) ? delta.toFixed(6) : '—';

      document.getElementById('gamma').textContent = Number.isFinite(gamma) ? gamma.toExponential(6) : '—';

      // vega per 1% -> divide by 100

      document.getElementById('vega').textContent = Number.isFinite(vega) ? (vega/100).toFixed(6) : '—';

      document.getElementById('theta').textContent = Number.isFinite(theta) ? theta.toFixed(8) : '—';

      // rho per 1% -> divide by 100

      document.getElementById('rho').textContent = Number.isFinite(rho) ? (rho/100).toFixed(6) : '—';

      document.getElementById('d12').textContent = (Number.isFinite(d1) && Number.isFinite(d2)) ? (`${d1.toFixed(6)} / ${d2.toFixed(6)}`) : '—';

    }

    // attach events

    calcBtn.addEventListener('click', calculate);

    resetBtn.addEventListener('click', function(){

      document.getElementById('spot').value = 100;

      document.getElementById('strike').value = 100;

      document.getElementById('vol').value = 20;

      document.getElementById('rate').value = 5;

      document.getElementById('div').value = 0;

      document.getElementById('optType').value = 'call';

      useDates.checked = true; 

      toggleDateOrYears();

      currentDate.value = formatDateISO(new Date());

      const d = new Date(); 

      d.setMonth(d.getMonth()+3); 

      expiryDate.value = formatDateISO(d);

      tYears.value = 0.25;

      document.getElementById('resultBox').classList.remove('show');

    });

    // run initial calc

    calculate();

    
})();
