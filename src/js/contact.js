let sendBtn = document.querySelector("#send");
sendBtn.addEventListener("click", send);

document.querySelectorAll("#message > input, #message > textarea").forEach((input) => {
  input.addEventListener("focus", function() {
    this.classList.remove("error");
  });
});

function send() {
  let status = true;
  document.querySelectorAll("#message > *").forEach((check) => {
    if (check.value.trim() == "") {
      check.classList.add("error");
      check.setAttribute("placeholder", check.getAttribute("placeholder") + " 沒寫到唷");
      status = false;
    }
  });
  if (status) {
    let currentTime = new Date();
    let queryString = `time=${currentTime.toLocaleString()}&name=${document.querySelector("#name").value}&mail=${document.querySelector("#mail").value}&text=${document.querySelector("#text").value}`;
    // let data = {
    //   "time": currentTime.toLocaleString(),
    //   "name": document.querySelector("#name").value,
    //   "mail": document.querySelector("#mail").value,
    //   "text": document.querySelector("#text").value
    // }
    makeRequest(queryString);
  }
}

function toQueryString(data) {
  let params = [];
  for (let index in data) {
    params.push(index + "=" + data.index);
  }
  return params.join("&");
}

let httpRequest;
function makeRequest(data) {
  console.log(data);
  httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', `https://script.google.com/macros/s/AKfycbzRS0rz8tThx1RVTffcaGv8i3mz0d1r4HB2z2IWYh7BuE45P7s4/exec?${data}`);
  httpRequest.send();
}

function alertContents() {
  console.log(httpRequest);
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      alert("已經收到您的訊息，會盡快回覆:)");
      document.querySelectorAll("#message > input, #message > textarea").forEach((input) => {
        input.value = "";
      });
    } else {
      alert('There was a problem with the request.');
    }
  }
}