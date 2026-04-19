function game() {
  return `
    <div>
      <h2>REACTION TEST</h2>
      <button onclick="startGame()" style="font-size:28px">START</button>
      <div id="box" style="width:180px;height:180px;background:#8b5e3c;margin-top:30px;"></div>
    </div>
  `;
}

function startGame() {
  let box = document.getElementById("box");

  setTimeout(() => {
    box.style.background = "#d4a373";
    let start = Date.now();

    box.onclick = () => {
      alert("Reaction: " + (Date.now() - start) + "ms");
    };

  }, Math.random()*3000);
}
