async function predict() {
    const url = `/api/predict?traffic=${traffic.value}&cost=${cost.value}&risk=${risk.value}&lead_time=${lead.value}&driver_score=${driver.value}`;
  
    const res = await fetch(url);
    const data = await res.json();
  
    document.getElementById("result").innerHTML =
      `Delay Probability: <b>${data.delay_probability}</b><br>
       Risk Level: <b>${data.risk_level}</b>`;
  }
  