const request = new XMLHttpRequest();
request.open("GET", "articles.json");

// تعريف دالة المعالجة عند اكتمال التحميل
request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    let mainData = JSON.parse(this.responseText);
    console.log(mainData)
    console.log(mainData.length)
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All"
    }
    const updatedData = JSON.stringify(mainData)
    console.log(updatedData)
  }
}

request.send();