function tools() {
  return `
    <div>
      <h2>TOOLS</h2>
      <input id="calc" placeholder="enter calculation..." style="font-size:28px">
      <button onclick="calc()" style="font-size:24px">CALCULATE</button>
      <div id="result"></div>
    </div>
  `;
}

function calc() {
  let val = document.getElementById("calc").value;
  document.getElementById("result").innerText = eval(val);
}
