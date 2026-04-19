function ai() {
  return `
    <div>
      <h2>ARCHIVE INTERFACE</h2>
      <input id="aiInput" style="font-size:28px;width:70%">
      <button onclick="askAI()" style="font-size:24px">ENTER</button>
      <div id="aiOutput"></div>
    </div>
  `;
}

function askAI() {
  let input = document.getElementById("aiInput").value;
  let out = document.getElementById("aiOutput");

  out.innerHTML += `<div>> ${input}</div>`;
  out.innerHTML += `<div>...processing...</div>`;
}
