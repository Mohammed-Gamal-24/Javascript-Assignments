document.body.style.cssText = `
  font-family: Arial, sans-serif;
  `;

const request = new XMLHttpRequest();
request.open("GET", "articles.json");

request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const mainData = JSON.parse(this.responseText);

    let mainDiv = document.createElement("div");
    mainDiv.id = "data";

    for (let i = 0; i < mainData.length; i++) {
      mainDiv.innerHTML += `
        <div>
          <h2>Title: ${mainData[i].title}</h2>
          <p>Article Number: ${mainData[i].id}</p>
          <p>Description: ${mainData[i].description}</p>
          <p>Author: ${mainData[i].author}</p>
          <p>Category: ${mainData[i].category}</p>
        </div>
        <hr>
      `;
    }
    document.body.appendChild(mainDiv);
  }
};

request.send();