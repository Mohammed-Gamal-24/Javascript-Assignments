const request = new XMLHttpRequest();
request.open("GET", "articles.json");


// تعريف دالة المعالجة عند اكتمال التحميل
request.onload = function() {
  // this.readyState === 4 => we don't have to write because onload only fires when the request is complete
  if (this.status === 200) {
    console.log(this.responseText);
    console.log("Data Loaded"); // التأكيد بعد اكتمال التحميل    
  }
}

request.send();