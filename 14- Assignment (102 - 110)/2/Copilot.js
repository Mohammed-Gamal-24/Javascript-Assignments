function createPopup() {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.cssText = `
    font-family: Arial, sans-serif;
    background-color: #ededed;
    text-align: center;
    width: 500px;
    margin: 50px auto;
    padding: 15px 0;
    border: 1px solid #0000007a;
    position: relative;
  `;

  const heading = document.createElement("h3");
  heading.textContent = "Welcome";

  const message = document.createElement("p");
  message.textContent = "Welcome To Elzero Web School";

  const closeBtn = document.createElement("span");
  closeBtn.textContent = "x";
  closeBtn.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: absolute;
    top: -13px;
    right: -13px;
    width: 26px;
    height: 26px;
    color: white;
    border-radius: 50%;
    cursor: pointer;
  `;

  closeBtn.addEventListener("click", () => popup.remove());

  popup.append(heading, message, closeBtn);
  document.body.appendChild(popup);
}

setTimeout(createPopup, 5000);
