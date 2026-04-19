function loadPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <div class="intro">
        WELCOME TO THE ARCHIVE.<br><br>

        A COLLECTION OF TOOLS, IDEAS, AND DIGITAL EXPERIENCES,<br>
        DESIGNED WITH A VINTAGE SOUL.<br><br>

        THIS SPACE IS BUILT TO FEEL CALM,<br>
        SLOW, AND DIFFERENT FROM MODERN INTERFACES.<br><br>

        SELECT A SECTION FROM THE LEFT.
      </div>
    `;
  }

  else if (page === "ai") {
    content.innerHTML = ai();
  }

  else if (page === "game") {
    content.innerHTML = game();
  }

  else if (page === "tools") {
    content.innerHTML = tools();
  }
}

/* load default */
loadPage("home");

/* 🍂 generate leaves */
const leavesContainer = document.getElementById("leaves");

for (let i = 0; i < 25; i++) {
  let leaf = document.createElement("div");
  leaf.className = "leaf";

  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.animationDuration = (5 + Math.random() * 5) + "s";
  leaf.style.opacity = Math.random();

  leavesContainer.appendChild(leaf);
}
