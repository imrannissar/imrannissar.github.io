var xhr = new XMLHttpRequest();
var url = "https://ads.tiktok.com/marketing_api/api/developer/app/get/";

// Replace 'your_csrf_token' with the actual CSRF token value
var csrfToken = 'your_csrf_token';

xhr.open("GET", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.setRequestHeader("X-Csrftoken", csrfToken);

xhr.onload = function () {
  if (xhr.status == 200) {
    var responseData = JSON.parse(xhr.responseText);
    alert(JSON.stringify(responseData));
  } else {
    alert('Error: ' + xhr.status);
  }
};

xhr.send(null);
