// ========== Global Styles ==========
document.body.style.cssText = `
  font-family: Arial, sans-serif;
  background-color: #ececec;
  margin: 0;
`;

// ========== Constants ========== الثوابت
const COLORS = {
  green: "#23a96e",
  gray: "#a7a7a7",
  white: "#ffffff",
  bg: "#ececec",
};

// ========== Create Header ==========
function createHeader() {
  const header = document.createElement("header");
  header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: ${COLORS.white};
  `;

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "Elzero";
  logo.style.cssText = `
    color: ${COLORS.green};
    font-weight: bold;
    font-size: 1.2rem;
  `;

  const menu = document.createElement("ul");
  menu.className = "menu";
  menu.style.cssText = `
    list-style: none;
    display: flex;
    gap: 15px;
    color: ${COLORS.gray};
  `;

  const menuItems = ["Home", "About", "Service", "Contact"];
  menuItems.forEach((itemText) => {
    const li = document.createElement("li");
    li.textContent = itemText;
    menu.appendChild(li);
  });

  header.append(logo, menu);
  return header;
}

// ========== Create Products Section ==========
function createContent(count = 15) {
  const content = document.createElement("div");
  content.className = "content";
  content.style.cssText = `
    display: flex;
    justify-content: space-evenly;
    row-gap: 15px;
    flex-wrap: wrap;
    padding: 15px 0;
  `;

  for (let i = 1; i <= count; i++) {
    const product = document.createElement("div");
    product.className = "product";
    product.style.cssText = `
      flex-basis: 31%;
      text-align: center;
      padding: 15px 0;
      background-color: ${COLORS.white};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 6px;
      box-shadow: 0 0 5px #ddd;
    `;

    const number = document.createElement("span");
    number.textContent = i;
    number.style.cssText = `font-size: 1.3rem; font-weight: bold;`;

    const label = document.createElement("span");
    label.textContent = "Product";
    label.style.cssText = `color: ${COLORS.gray};`;

    product.append(number, label);
    content.appendChild(product);
  }
  return content;
}

// ========== Create Footer ==========
function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Copyright 2021";
  footer.style.cssText = `
    background-color: ${COLORS.green};
    color: white;
    display: flex;
    justify-content: center;
    padding: 15px;
  `;
  return footer;
}

// ========== Render All ==========
document.body.append(
  createHeader(),
  createContent(15),
  createFooter()
);
